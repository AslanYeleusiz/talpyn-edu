<template>

    <head>
        <title>Админ панель | Олимпиада | Сұрақ қосу</title>
    </head>
    <AdminLayout>
        <template #breadcrumbs>
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0">Сұрақ қосу</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item">
                            <a :href="route('admin.index')">
                                <i class="fas fa-dashboard"></i>
                                Басты бет
                            </a>
                        </li>
                        <li class="breadcrumb-item">
                            <a :href="route('admin.olimpiadaSuraktar.index', [
                               bagyt_id,
                               option_id
                            ])">
                                <i class="fas fa-dashboard"></i>
                                Олимпиада бағыт
                            </a>
                        </li>
                        <li class="breadcrumb-item active">Сұрақ қосу</li>
                    </ol>
                </div>
            </div>
        </template>
        <div class="container-fluid">
            <div class="card card-primary">
                <form method="post" @submit.prevent="submit">
                    <div class="card-body">
                        <form @submit.prevent="submit">
                            <table class="table table-bordered">
                                <tbody>
                                    <tr class="odd even">
                                        <td class="w-25"><b>Сұрақ</b> <i class="red">*</i></td>
                                        <td id="turnirQuestion">
                                            <div v-show="input_type === 'ckeditor'">
                                                <textarea name="surak" id="editor"></textarea>
                                                <a class="d-block mt-2" href="https://latex.codecogs.com/eqneditor/editor.php" target="_blank">Latex формула</a>
                                            </div>
                                            <input v-show="input_type != 'ckeditor'" v-model="surak.surak" type="text" class="form-control" />
                                            <validation-error :field="'surak'" />
                                        </td>
                                    </tr>
                                    <tr class="odd even">
                                        <td>Жауап нұсқаларын енгізіңіз:</td>
                                        <td>
                                            <div class="d-flex align-items-center">
                                                <div class="d-flex align-items-center mr-2">
                                                    <input v-model="input_type" type="radio" class="select-answer" value="input" />
                                                    <p class="ml-2">- input</p>
                                                </div>
                                                <div class="d-flex align-items-center">
                                                    <input v-model="input_type" type="radio" class="select-answer" value="ckeditor" v-on:change="changeInputType()" />
                                                    <p class="ml-2">- ckeditor</p>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr v-for="(zhauap, index) in surak.zhauap" :key="'zhauap' + index" class="odd even">
                                        <td>
                                            <b>{{getAnswerOptionTextType(index+1)}}</b>
                                            <i class="red">*</i>
                                        </td>
                                        <td>
                                            <div class="d-flex align-items-center">
                                                <input v-model="surak.correct_answer_number" class="select-answer mr-2 h-25" type="radio" name="Buttonradio25" :value="index" />
                                                <div v-show="input_type === 'ckeditor'">
                                                    <textarea name="variant" id="editor"></textarea>
                                                    <a class="d-block mt-2" href="https://latex.codecogs.com/eqneditor/editor.php" target="_blank">Latex формула</a>
                                                </div>
                                                <input v-show="input_type != 'ckeditor'" v-model="zhauap.variant" type="text" class="form-control" />
                                            </div>
                                            <validation-error :field="`zhauaptar.${index}.variant`" />
                                        </td>
                                    </tr>
                                    <tr class="odd even">
                                        <td>
                                            <b>Белсенді/ Белсенді емес </b>
                                        </td>
                                        <td>
                                            <div class="custom-control custom-switch">
                                                <input type="checkbox" v-model="surak.archive" true-value="1" false-value="0" class="custom-control-input" id="customSwitch1" />
                                                <label class="custom-control-label" for="customSwitch1">Архив</label>
                                            </div>
                                            <validation-error :field="'is_active'" />
                                        </td>
                                    </tr>
                                    <tr class="odd even">
                                        <td>
                                            <button class="btn btn-danger" type="button" @click.prevent="clear">
                                                <i class="fa fa-trash" /> Тазалау
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="form-group">
                                <label for="">Түсінік</label>
                                <input type="text" class="form-control" v-model="surak.tusinik" name="name" placeholder="Түсінік" />
                                <validation-error :field="'tusinik'" />
                            </div>

                        </form>
                    </div>
                    <div class="card-footer">
                        <button type="submit" class="btn btn-primary mr-1">
                            Сақтау
                        </button>
                        <button type="button" class="btn btn-danger" @click.prevent="back()">
                            Артқа
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </AdminLayout>
</template>
<script>
    import AdminLayout from "../../../../Layouts/AdminLayout.vue";
    import {
        Link,
        Head
    } from "@inertiajs/inertia-vue3";
    import Pagination from "../../../../Components/Pagination.vue";
    import ValidationError from "../../../../Components/ValidationError.vue";
    import ClassicEditor from '../../../../ckeditor';

    export default {
        components: {
            AdminLayout,
            Link,
            Pagination,
            ValidationError,
            Head
        },
        props: ['surak'],
        data() {
            return {
                changed: 1,
                bagyt_id: route().params.bagyt,
                option_id: route().params.option,
                editor: ClassicEditor,
                input_type: "input",
                editorConfig: {
                    //
                },
            }
        },
        methods: {
            changeInputType(e) {
                if (this.input_type === "ckeditor" && this.changed) {
                    this.changed = 0
                    this.getCkeditor()
                }
            },
            getCkeditor() {
                var editors = document.querySelectorAll('#editor');
                var baseUrl = window.location.origin
                var token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
                var allData = [this.surak.surak]
                this.surak.zhauap.forEach((val) => {
                    allData.push(val.variant)
                })
                editors.forEach((e, index) => {
                    ClassicEditor
                        .create(e, {
                            //                plugins: [ SimpleUploadAdapter, ],
                            initialData: allData[index],
                            simpleUpload: {
                                // The URL that the images are uploaded to.
                                uploadUrl: baseUrl + '/ckeditor/upload-image',

                                // Enable the XMLHttpRequest.withCredentials property.
                                withCredentials: true,

                                // Headers sent along with the XMLHttpRequest to the upload server.
                                headers: {
                                    'X-CSRF-TOKEN': token,
                                }
                            },
                        })
                        .then(editor => {
                            editor.model.document.on('change:data', () => {
                                index ? this.surak.zhauap[index - 1].variant = editor.getData() : this.surak.surak = editor.getData();
                            });
                        })
                        .catch(error => {
                            console.log(error)
                        });
                })
            },
            submit() {
                this.$inertia.put(
                    route("admin.olimpiadaSuraktar.update", [this.bagyt_id, this.option_id, this.surak.id]),
                    this.surak, {
                        onError: () => console.log("An error has occurred"),
                        onSuccess: () =>
                            console.log("The new contact has been saved"),
                    }
                );
            },
            getAnswerOptionTextType(val) {
                switch (val) {
                    case 1:
                        return "A ";
                    case 2:
                        return "B ";
                    case 3:
                        return "C ";
                    case 4:
                        return "D ";
                    case 5:
                        return "E ";
                    case 6:
                        return "F ";
                    case 7:
                        return "G ";
                    case 8:
                        return "H ";
                    case 9:
                        return "J ";
                }
            },
        },
    };

</script>
