define(['angular',
    'angular-couch-potato',
    'angular-ui-router'], function (ng, couchPotato) {

    "use strict";


    var module = ng.module('app.forms', ['ui.router']);


    couchPotato.configureApp(module);

    module.config(function ($stateProvider, $couchPotatoProvider) {

        $stateProvider
            .state('app.form', {
                abstract: true,
                data: {
                    title: 'Forms'
                }
            })

            .state('app.form.elements', {
                url: '/form/elements',
                data: {
                    title: 'Form Elements'
                },
                views: {
                    "content@app": {
                        templateUrl: 'app/modules/forms/views/form-elements.html'
                    }
                }
            })

            .state('app.form.layouts', {
                url: '/form/layouts',
                data: {
                    title: 'Form Layouts'
                },
                views: {
                    "content@app": {
                        controller: 'FormLayoutsCtrl',
                        templateUrl: 'app/modules/forms/views/form-layouts.html',
                        resolve: {
                            deps: $couchPotatoProvider.resolveDependencies([
                                'modules/forms/controllers/FormLayoutsCtrl',
                                'modules/forms/directives/form-layouts/smartCheckoutForm',
                                'modules/forms/directives/form-layouts/smartOrderForm',
                                'modules/forms/directives/form-layouts/smartReviewForm',
                                'modules/forms/directives/form-layouts/smartRegistrationForm',
                                'modules/forms/directives/form-layouts/smartCommentForm',
                                'modules/forms/directives/form-layouts/smartContactsForm',
                                'modules/forms/directives/input/smartMaskedInput',
                                'modules/forms/directives/input/smartDatepicker'
                            ])
                        }
                    }
                }
            })

            .state('app.form.validation', {
                url: '/form/validation',
                data: {
                    title: 'Form Validation'
                },
                views: {
                    "content@app": {
                        templateUrl: 'app/modules/forms/views/form-validation.html'
                    }
                }
            })

            .state('app.form.bootstrapForms', {
                url: '/form/bootstrap-forms',
                data: {
                    title: 'Bootstrap Forms'
                },
                views: {
                    "content@app": {
                        templateUrl: 'app/modules/forms/views/bootstrap-forms.html'
                    }
                }
            })

            .state('app.form.bootstrapValidation', {
                url: '/form/bootstrap-validation',
                data: {
                    title: 'Bootstrap Validation'
                },
                views: {
                    "content@app": {
                        templateUrl: 'app/modules/forms/views/bootstrap-validation.html',
                        resolve: {
                            deps: $couchPotatoProvider.resolveDependencies([
                                'modules/forms/directives/bootstrap-validation/bootstrapMovieForm',
                                'modules/forms/directives/bootstrap-validation/bootstrapTogglingForm',
                                'modules/forms/directives/bootstrap-validation/bootstrapAttributeForm',
                                'modules/forms/directives/bootstrap-validation/bootstrapButtonGroupForm',
                                'modules/forms/directives/bootstrap-validation/bootstrapProductForm',
                                'modules/forms/directives/bootstrap-validation/bootstrapProfileForm',
                                'modules/forms/directives/bootstrap-validation/bootstrapContactForm'
                            ])
                        }
                    }
                }
            })

            .state('app.form.plugins', {
                url: '/form/plugins',
                data: {
                    title: 'Form Plugins'
                },
                views: {
                    "content@app": {
                        templateUrl: 'app/modules/forms/views/form-plugins.html',
                        controller: 'FormPluginsCtrl',
                        resolve: {
                            deps: $couchPotatoProvider.resolveDependencies([
                                'modules/forms/directives/input/smartSpinner',
                                'modules/forms/directives/input/smartDatepicker',
                                'modules/forms/directives/input/smartTimepicker',
                                'modules/forms/directives/input/smartClockpicker',
                                'modules/forms/directives/input/smartNouislider',
                                'modules/forms/directives/input/smartIonslider',
                                'modules/forms/directives/input/smartDuallistbox',
                                'modules/forms/directives/input/smartColorpicker',
                                'modules/forms/directives/input/smartKnob',
                                'modules/forms/directives/input/smartUislider',
                                'modules/forms/directives/input/smartSelect2',
                                'modules/forms/directives/input/smartMaskedInput',
                                'modules/forms/directives/input/smartTagsinput',
                                'modules/forms/directives/input/smartXEditable',
                                'modules/forms/controllers/FormXeditableCtrl',
                                'modules/forms/controllers/FormPluginsCtrl'
                            ])
                        }
                    }
                }
            })
            .state('app.form.wizards', {
                url: '/form/wizards',
                data: {
                    title: 'Wizards'
                },
                views: {
                    "content@app": {
                        templateUrl: 'app/modules/forms/views/form-wizards.html',
                        controller: 'FormWizardCtrl',
                        resolve: {
                            deps: $couchPotatoProvider.resolveDependencies([
                                'modules/forms/directives/validate/smartValidateForm',
                                'modules/forms/directives/wizard/smartWizard',
                                'modules/forms/directives/wizard/smartFueluxWizard',
                                'modules/forms/directives/input/smartMaskedInput',
                                'modules/forms/controllers/FormWizardCtrl'
                            ])
                        }
                    }
                }
            })
            .state('app.form.editors', {
                url: '/form/editors',
                data: {
                    title: 'Editors'
                },
                views: {
                    "content@app": {
                        templateUrl: 'app/modules/forms/views/form-editors.html',
                        resolve: {
                            deps: $couchPotatoProvider.resolveDependencies([
                                'modules/forms/directives/editors/smartMarkdownEditor',
                                'modules/forms/directives/editors/smartSummernoteEditor',
                                'modules/forms/directives/editors/smartEditSummernote',
                                'modules/forms/directives/editors/smartDestroySummernote'
                            ])
                        }
                    }
                }
            })
            .state('app.form.dropzone', {
                url: '/form/dropzone',
                data: {
                    title: 'Dropzone'
                },
                views: {
                    "content@app": {
                        templateUrl: 'app/modules/forms/views/dropzone.html',
                        resolve: {
                            deps: $couchPotatoProvider.resolveDependencies([
                                'modules/forms/directives/upload/smartDropzone'
                            ])
                        }
                    }
                }
            })
            .state('app.form.imageEditor', {
                url: '/form/image-editor',
                data: {
                    title: 'Image Editor'
                },
                views: {
                    "content@app": {
                        templateUrl: 'app/modules/forms/views/image-editor.html',
                        controller: 'ImageEditorCtrl',
                        resolve: {
                            deps: $couchPotatoProvider.resolveDependencies([
                                'modules/forms/controllers/ImageEditorCtrl',
                                'modules/forms/directives/image-editor/smartJcrop'
                            ])
                        }
                    }
                }
            })


    });

    module.run(function ($couchPotato) {
        module.lazy = $couchPotato;
    });

    return module;

});