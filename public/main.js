(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_registro_registro_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/registro/registro.component */ "./src/app/pages/registro/registro.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _pages_heroes_heroes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/heroes/heroes.component */ "./src/app/pages/heroes/heroes.component.ts");
/* harmony import */ var _pages_heroe_heroe_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/heroe/heroe.component */ "./src/app/pages/heroe/heroe.component.ts");









var routes = [
    { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'registro', component: _pages_registro_registro_component__WEBPACK_IMPORTED_MODULE_4__["RegistroComponent"] },
    { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'heroes', component: _pages_heroes_heroes_component__WEBPACK_IMPORTED_MODULE_7__["HeroesComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'heroe/:id', component: _pages_heroe_heroe_component__WEBPACK_IMPORTED_MODULE_8__["HeroeComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: '**', redirectTo: 'registro' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'loginApp';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_registro_registro_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/registro/registro.component */ "./src/app/pages/registro/registro.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_heroe_heroe_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/heroe/heroe.component */ "./src/app/pages/heroe/heroe.component.ts");
/* harmony import */ var _pages_heroes_heroes_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/heroes/heroes.component */ "./src/app/pages/heroes/heroes.component.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _pages_registro_registro_component__WEBPACK_IMPORTED_MODULE_7__["RegistroComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _pages_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _pages_heroe_heroe_component__WEBPACK_IMPORTED_MODULE_10__["HeroeComponent"],
                _pages_heroes_heroes_component__WEBPACK_IMPORTED_MODULE_11__["HeroesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.auth.estaAutenticado()) {
            return true;
        }
        else {
            this.router.navigateByUrl('/login');
            return false;
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/models/heroe.model.ts":
/*!***************************************!*\
  !*** ./src/app/models/heroe.model.ts ***!
  \***************************************/
/*! exports provided: HeroeModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroeModel", function() { return HeroeModel; });
var HeroeModel = /** @class */ (function () {
    function HeroeModel() {
        this.vivo = true;
    }
    return HeroeModel;
}());



/***/ }),

/***/ "./src/app/models/usuario.model.ts":
/*!*****************************************!*\
  !*** ./src/app/models/usuario.model.ts ***!
  \*****************************************/
/*! exports provided: UsuarioModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioModel", function() { return UsuarioModel; });
var UsuarioModel = /** @class */ (function () {
    function UsuarioModel() {
    }
    return UsuarioModel;
}());



/***/ }),

/***/ "./src/app/pages/heroe/heroe.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/heroe/heroe.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hlcm9lL2hlcm9lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/heroe/heroe.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/heroe/heroe.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-home></app-home>\n<h1>H??roe <small>Nombre del H??roe</small> </h1>\n<hr>\n\n\n<div class=\"row text-right\">\n  <div class=\"col\">\n    <button class=\"btn btn-danger\"\n            routerLink=\"/heroes\">\n      <i class=\"fa fa-arrow-left\"></i>\n      Regresar\n    </button>\n  </div>\n</div>\n\n\n\n<div class=\"row animated fadeIn faster\">\n  <div class=\"col\">\n\n    <form (ngSubmit)=\"guardar( f )\"\n          #f=\"ngForm\">\n\n      <div class=\"form-group\">\n        <label>Firebase ID</label>\n        <input type=\"text\"\n               class=\"form-control\"\n               placeholder=\"Firebase ID\"\n               [(ngModel)]=\"heroe.id\"\n               name=\"id\"\n               disabled=\"disabled\">\n        <small class=\"form-text text-muted\">Este campo es autogenerado</small>\n      </div>\n\n\n      <div class=\"form-group\">\n          <label>Nombre</label>\n          <input type=\"text\"\n                 class=\"form-control\"\n                 placeholder=\"Nombre del h??roe\"\n                 [(ngModel)]=\"heroe.nombre\"\n                 name=\"nombre\"\n                 required>\n      </div>\n\n      <div class=\"form-group\">\n          <label>Poder</label>\n          <input type=\"text\"\n                 class=\"form-control\"\n                 [(ngModel)]=\"heroe.poder\"\n                 name=\"poder\"\n                 placeholder=\"Poder del h??roe\">\n      </div>\n\n      <div class=\"form-group\">\n        <label>Estado</label>\n        <br>\n\n        <button *ngIf=\"heroe.vivo\" \n                (click)=\"heroe.vivo = false\"\n                class=\"btn btn-outline-success w-50\" type=\"button\">\n          <i class=\"fa fa-smile-wink\"></i>\n          Vivo\n        </button>\n\n        <button *ngIf=\"!heroe.vivo\" \n                (click)=\"heroe.vivo = true\"\n                class=\"btn btn-outline-danger w-50\" type=\"button\">\n            <i class=\"fa fa-dizzy\"></i>\n            Muerto\n        </button>\n\n      </div>\n\n\n\n      <hr>\n      <div class=\"form-group text-center\">\n        <button type=\"submit\"\n                class=\"btn btn-primary w-25\">\n          <i class=\"fa fa-save\"></i>\n          Guardar\n        </button>\n      </div>\n\n\n    </form>\n\n\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/pages/heroe/heroe.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/heroe/heroe.component.ts ***!
  \************************************************/
/*! exports provided: HeroeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroeComponent", function() { return HeroeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_heroe_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/heroe.model */ "./src/app/models/heroe.model.ts");
/* harmony import */ var _services_heroes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/heroes.service */ "./src/app/services/heroes.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);







var HeroeComponent = /** @class */ (function () {
    function HeroeComponent(heroesService, router, route) {
        this.heroesService = heroesService;
        this.router = router;
        this.route = route;
        this.heroe = new _models_heroe_model__WEBPACK_IMPORTED_MODULE_3__["HeroeModel"]();
    }
    HeroeComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        if (id !== 'nuevo') {
            this.heroesService.getHeroe(id)
                .subscribe(function (resp) {
                _this.heroe = resp;
                _this.heroe.id = id;
            });
        }
    };
    HeroeComponent.prototype.guardar = function (form) {
        var _this = this;
        if (form.invalid) {
            console.log('Formulario no v??lido');
            return;
        }
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            title: 'Espere',
            text: 'Guardando informaci??n',
            type: 'info',
            allowOutsideClick: false
        });
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.showLoading();
        var peticion;
        if (this.heroe.id) {
            peticion = this.heroesService.actualizarHeroe(this.heroe);
        }
        else {
            peticion = this.heroesService.crearHeroe(this.heroe);
        }
        peticion.subscribe(function (resp) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                title: _this.heroe.nombre,
                text: 'Se actualiz?? correctamente',
                type: 'success'
            });
            _this.router.navigateByUrl('/heroes');
        });
    };
    HeroeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-heroe',
            template: __webpack_require__(/*! ./heroe.component.html */ "./src/app/pages/heroe/heroe.component.html"),
            styles: [__webpack_require__(/*! ./heroe.component.css */ "./src/app/pages/heroe/heroe.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_heroes_service__WEBPACK_IMPORTED_MODULE_4__["HeroesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], HeroeComponent);
    return HeroeComponent;
}());



/***/ }),

/***/ "./src/app/pages/heroes/heroes.component.css":
/*!***************************************************!*\
  !*** ./src/app/pages/heroes/heroes.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hlcm9lcy9oZXJvZXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/heroes/heroes.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/heroes/heroes.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-home></app-home>\n<h1>Listado de H??roes</h1>\n<hr>\n<div class=\"row\">\n  <div class=\"col text-right\">\n    <button routerLink=\"/heroe/nuevo\"\n            class=\"btn btn-primary\">\n      <i class=\"fa fa-plus\"></i>\n      Agregar\n    </button>\n  </div>\n</div>\n\n\n<table *ngIf=\"!cargando && heroes.length > 0\"\n       class=\"table mt-3 animated fadeIn faster animated fadeIn faster\">\n  <thead class=\"thead-dark\">\n    <tr>\n      <th scope=\"col\">#</th>\n      <th scope=\"col\">Nombre</th>\n      <th scope=\"col\">Poder</th>\n      <th scope=\"col\">Vivo</th>\n      <th scope=\"col\">Tools</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let heroe of heroes; let i = index\">\n      <th scope=\"row\">{{ i + 1 }}</th>\n      <td>{{ heroe.nombre }}</td>\n      <td>{{ heroe.poder }}</td>\n      <td>\n        \n        <label *ngIf=\"heroe.vivo\" class=\"badge badge-success\">Vivo</label>\n        <label *ngIf=\"!heroe.vivo\" class=\"badge badge-danger\">Muerto</label>\n\n      </td>\n      <td>\n\n        <button class=\"btn btn-info mr-1\"\n                [routerLink]=\"['/heroe', heroe.id ]\">\n          <i class=\"fa fa-pen\"></i>\n        </button>\n\n        <button class=\"btn btn-danger\"\n                (click)=\"borrarHeroe( heroe, i ) \">\n          <i class=\"fa fa-trash\"></i>\n        </button>\n\n\n      </td>\n    </tr>\n  </tbody>\n</table>\n\n<div *ngIf=\"!cargando && heroes.length === 0\"\n     class=\"alert alert-warning text-center mt-3 animated fadeIn faster\">\n    <h4 class=\"alert-heading\">No hay registros</h4>\n    <p>\n      <i class=\"fa fa-exclamation fa-2x\"></i>\n    </p>\n</div>\n\n<div *ngIf=\"cargando\" \n     class=\"alert alert-info text-center mt-3 animated fadeIn faster\">\n  <h4 class=\"alert-heading\">Cargando</h4>\n  <p>\n    <i class=\"fa fa-sync-alt fa-spin fa-2x\"></i>\n  </p>\n  <p class=\"mb-0\">\n    Espere por favor\n  </p>\n</div>"

/***/ }),

/***/ "./src/app/pages/heroes/heroes.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/heroes/heroes.component.ts ***!
  \**************************************************/
/*! exports provided: HeroesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroesComponent", function() { return HeroesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_heroes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/heroes.service */ "./src/app/services/heroes.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);




var HeroesComponent = /** @class */ (function () {
    function HeroesComponent(heroesService) {
        this.heroesService = heroesService;
        this.heroes = [];
        this.cargando = false;
    }
    HeroesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cargando = true;
        this.heroesService.getHeroes()
            .subscribe(function (resp) {
            _this.heroes = resp;
            _this.cargando = false;
        });
    };
    HeroesComponent.prototype.borrarHeroe = function (heroe, i) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: '??Est?? seguro?',
            text: "Est\u00E1 seguro que desea borrar a " + heroe.nombre,
            type: 'question',
            showConfirmButton: true,
            showCancelButton: true
        }).then(function (resp) {
            if (resp.value) {
                _this.heroes.splice(i, 1);
                _this.heroesService.borrarHeroe(heroe.id).subscribe();
            }
        });
    };
    HeroesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-heroes',
            template: __webpack_require__(/*! ./heroes.component.html */ "./src/app/pages/heroes/heroes.component.html"),
            styles: [__webpack_require__(/*! ./heroes.component.css */ "./src/app/pages/heroes/heroes.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_heroes_service__WEBPACK_IMPORTED_MODULE_2__["HeroesService"]])
    ], HeroesComponent);
    return HeroesComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/home/home.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\">\n    <img src=\"../../../assets/images/icons/favicon.ico\" width=\"30\" height=\"30\" class=\"d-inline-block align-top\" alt=\"\">\n    <span class=\"navbar-brand mb-0 h1\">INVENTARIO</span>\n  </a>\n \n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"/heroes\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/heroes\">Heroes</a>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" role=\"button\" data-toggle=\"dropdown\" aria-expanded=\"false\">\n          Opciones\n        </a>\n        <div class=\"dropdown-menu\">\n          <a class=\"dropdown-item\" href=\"#\">Usuarios</a>\n          <a class=\"dropdown-item\" href=\"#\">Contacto</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" href=\"#\">Inventario</a>\n        </div>\n      </li>\n    </ul>\n      \n    <button class=\"btn btn-outline-danger\"(click)=\"salir()\">Salir</button>\n\n  </div>\n</nav>\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.salir = function () {
        this.auth.logout();
        this.router.navigateByUrl('/login');
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/pages/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"limiter animated fadeInLeft\">\n    <div class=\"container-login100\">\n        <div class=\"wrap-login100 p-t-50 p-b-90\">\n            \n            <form (ngSubmit)=\"login( f )\"\n                  #f=\"ngForm\"\n                  class=\"login100-form validate-form flex-sb flex-w\">\n\n                <span class=\"login100-form-title p-b-51\">\n                    Login\n                </span>\n\n                <span *ngIf=\"f.submitted && f.controls['email'].errors\"\n                          class=\"text-danger animated fadeIn\">El correo es obligatorio</span>\n\n                <div class=\"wrap-input100 m-b-16\">\n                    <input class=\"input100\" \n                           type=\"text\" \n                           name=\"email\" \n                           [(ngModel)]=\"usuario.email\"\n                           required\n                           email\n                           placeholder=\"Email\">\n\n                    <span class=\"focus-input100\"></span>\n                </div>\n                \n                <span *ngIf=\"f.submitted && f.controls['password'].errors\"\n                          class=\"text-danger animated fadeIn\">Al menos 6 letras</span>\n                <div class=\"wrap-input100 m-b-16\" data-validate = \"Password is required\">\n                    <input class=\"input100\"\n                           type=\"password\" \n                           name=\"password\" \n                           [(ngModel)]=\"usuario.password\"\n                           required\n                           minlength=\"6\"\n                           placeholder=\"Password\">\n                    <span class=\"focus-input100\"></span>\n                </div>\n                \n                <div class=\"flex-sb-m w-full p-t-3 p-b-24\">\n                    <div class=\"contact100-form-checkbox\">\n                        <input [(ngModel)]=\"recordarme\"\n                               class=\"input-checkbox100\" id=\"ckb1\" type=\"checkbox\" name=\"remember-me\">\n                        <label class=\"label-checkbox100\" for=\"ckb1\">\n                            Recordar mi usuario\n                        </label>\n                    </div>\n\n                    <div>\n                        <a routerLink=\"/registro\" class=\"txt1\">\n                            ??No tienes cuenta?\n                        </a>\n                    </div>\n                </div>\n\n                <div class=\"container-login100-form-btn m-t-17\">\n                    <button class=\"login100-form-btn\" type=\"submit\">\n                        Ingresar\n                    </button>\n                </div>\n\n            </form>\n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_usuario_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/usuario.model */ "./src/app/models/usuario.model.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);






var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.usuario = new _models_usuario_model__WEBPACK_IMPORTED_MODULE_3__["UsuarioModel"]();
        this.recordarme = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('email')) {
            this.usuario.email = localStorage.getItem('email');
            this.recordarme = true;
        }
    };
    LoginComponent.prototype.login = function (form) {
        var _this = this;
        if (form.invalid) {
            return;
        }
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            allowOutsideClick: false,
            type: 'info',
            text: 'Espere por favor...'
        });
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.showLoading();
        this.auth.login(this.usuario)
            .subscribe(function (resp) {
            console.log(resp);
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.close();
            if (_this.recordarme) {
                localStorage.setItem('email', _this.usuario.email);
            }
            _this.router.navigateByUrl('/home');
        }, function (err) {
            console.log(err.error.error.message);
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                type: 'error',
                title: 'Error al autenticar',
                text: err.error.error.message
            });
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/pages/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/registro/registro.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/registro/registro.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZ2lzdHJvL3JlZ2lzdHJvLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/registro/registro.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/registro/registro.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"limiter animated fadeInRight\">\n        <div class=\"container-login100\">\n            <div class=\"wrap-login100 p-t-50 p-b-90\">\n                \n                <form (ngSubmit)=\"onSubmit( f )\"\n                      #f=\"ngForm\"\n                      class=\"login100-form validate-form flex-sb flex-w\">\n    \n                    <span class=\"login100-form-title p-b-51\">\n                        Crear nueva cuenta\n                    </span>\n    \n                    <span *ngIf=\"f.submitted && f.controls['email'].errors\"\n                          class=\"text-danger animated fadeIn\">El correo es obligatorio</span>\n\n                    <div class=\"wrap-input100 m-b-16\">\n                        <input class=\"input100\" \n                               type=\"email\" \n                               name=\"email\"\n                               [(ngModel)]=\"usuario.email\"\n                               required\n                               email\n                               placeholder=\"Email\">\n    \n                        <span class=\"focus-input100\"></span>\n                    </div>\n\n                    <span *ngIf=\"f.submitted && f.controls['nombre'].errors\"\n                          class=\"text-danger animated fadeIn\">El nombre es obligatorio</span>\n                    <div class=\"wrap-input100 m-b-16\">\n                        <input class=\"input100\" \n                               type=\"text\" \n                               name=\"nombre\" \n                               [(ngModel)]=\"usuario.nombre\"\n                               minlength=\"2\"\n                               required\n                               placeholder=\"Nombre y apellidos\">\n    \n                        <span class=\"focus-input100\"></span>\n                    </div>\n                    \n                    <span *ngIf=\"f.submitted && f.controls['password'].errors\"\n                          class=\"text-danger animated fadeIn\">Al menos 6 letras</span>\n                    <div class=\"wrap-input100 m-b-16\">\n                        <input class=\"input100\"\n                               type=\"password\" \n                               name=\"password\" \n                               [(ngModel)]=\"usuario.password\"\n                               minlength=\"6\"\n                               required\n                               placeholder=\"Password\">\n\n                        <span class=\"focus-input100\"></span>\n                    </div>\n                    \n                    <div class=\"flex-sb-m w-full p-t-3 p-b-24\">\n                        <div class=\"contact100-form-checkbox\">\n                            <input [(ngModel)]=\"recordarme\"\n                                   class=\"input-checkbox100\" id=\"ckb1\" type=\"checkbox\" name=\"remember-me\">\n                            <label class=\"label-checkbox100\" for=\"ckb1\">\n                                Recordar mi usuario\n                            </label>\n                        </div>\n    \n                        <div>\n                            <a routerLink=\"/login\" class=\"txt1\">\n                                ??Ya tienes cuenta? / Ingresar\n                            </a>\n                        </div>\n                    </div>\n    \n                    <div class=\"container-login100-form-btn m-t-17\">\n                        <button class=\"login100-form-btn\" type=\"submit\">\n                            Crear cuenta\n                        </button>\n                    </div>\n    \n                </form>\n            </div>\n        </div>\n    </div>\n    \n    "

/***/ }),

/***/ "./src/app/pages/registro/registro.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/registro/registro.component.ts ***!
  \******************************************************/
/*! exports provided: RegistroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroComponent", function() { return RegistroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_usuario_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/usuario.model */ "./src/app/models/usuario.model.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);






var RegistroComponent = /** @class */ (function () {
    function RegistroComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.recordarme = false;
    }
    RegistroComponent.prototype.ngOnInit = function () {
        this.usuario = new _models_usuario_model__WEBPACK_IMPORTED_MODULE_3__["UsuarioModel"]();
    };
    RegistroComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (form.invalid) {
            return;
        }
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            allowOutsideClick: false,
            type: 'info',
            text: 'Espere por favor...'
        });
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.showLoading();
        this.auth.nuevoUsuario(this.usuario)
            .subscribe(function (resp) {
            console.log(resp);
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.close();
            if (_this.recordarme) {
                localStorage.setItem('email', _this.usuario.email);
            }
            _this.router.navigateByUrl('/home');
        }, function (err) {
            console.log(err.error.error.message);
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                type: 'error',
                title: 'Error al autenticar',
                text: err.error.error.message
            });
        });
    };
    RegistroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registro',
            template: __webpack_require__(/*! ./registro.component.html */ "./src/app/pages/registro/registro.component.html"),
            styles: [__webpack_require__(/*! ./registro.component.css */ "./src/app/pages/registro/registro.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RegistroComponent);
    return RegistroComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment.prod */ "./src/environments/environment.prod.ts");





var AuthService = /** @class */ (function () {
    // Crear nuevo usuario
    // https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=[API_KEY]
    // Login
    // https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=[API_KEY]
    function AuthService(http) {
        this.http = http;
        this.url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty';
        this.apikey = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["firebase"].apiKey;
        this.leerToken();
    }
    AuthService.prototype.logout = function () {
        localStorage.removeItem('token');
    };
    AuthService.prototype.login = function (usuario) {
        var _this = this;
        var authData = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, usuario, { returnSecureToken: true });
        return this.http.post(this.url + "/verifyPassword?key=" + this.apikey, authData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (resp) {
            _this.guardarToken(resp['idToken']);
            return resp;
        }));
    };
    AuthService.prototype.nuevoUsuario = function (usuario) {
        var _this = this;
        var authData = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, usuario, { returnSecureToken: true });
        return this.http.post(this.url + "/signupNewUser?key=" + this.apikey, authData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (resp) {
            _this.guardarToken(resp['idToken']);
            return resp;
        }));
    };
    AuthService.prototype.guardarToken = function (idToken) {
        this.userToken = idToken;
        localStorage.setItem('token', idToken);
        var hoy = new Date();
        hoy.setSeconds(3600);
        localStorage.setItem('expira', hoy.getTime().toString());
    };
    AuthService.prototype.leerToken = function () {
        if (localStorage.getItem('token')) {
            this.userToken = localStorage.getItem('token');
        }
        else {
            this.userToken = '';
        }
        return this.userToken;
    };
    AuthService.prototype.estaAutenticado = function () {
        if (this.userToken.length < 2) {
            return false;
        }
        var expira = Number(localStorage.getItem('expira'));
        var expiraDate = new Date();
        expiraDate.setTime(expira);
        if (expiraDate > new Date()) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/heroes.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/heroes.service.ts ***!
  \********************************************/
/*! exports provided: HeroesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroesService", function() { return HeroesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var HeroesService = /** @class */ (function () {
    function HeroesService(http) {
        this.http = http;
        this.url = 'https://inventario-8235e-default-rtdb.firebaseio.com/';
    }
    HeroesService.prototype.crearHeroe = function (heroe) {
        return this.http.post(this.url + "/heroes.json", heroe)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (resp) {
            heroe.id = resp.name;
            return heroe;
        }));
    };
    HeroesService.prototype.actualizarHeroe = function (heroe) {
        var heroeTemp = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, heroe);
        delete heroeTemp.id;
        return this.http.put(this.url + "/heroes/" + heroe.id + ".json", heroeTemp);
    };
    HeroesService.prototype.borrarHeroe = function (id) {
        return this.http.delete(this.url + "/heroes/" + id + ".json");
    };
    HeroesService.prototype.getHeroe = function (id) {
        return this.http.get(this.url + "/heroes/" + id + ".json");
    };
    HeroesService.prototype.getHeroes = function () {
        return this.http.get(this.url + "/heroes.json")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.crearArreglo), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(0));
    };
    HeroesService.prototype.crearArreglo = function (heroesObj) {
        var heroes = [];
        Object.keys(heroesObj).forEach(function (key) {
            var heroe = heroesObj[key];
            heroe.id = key;
            heroes.push(heroe);
        });
        return heroes;
    };
    HeroesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HeroesService);
    return HeroesService;
}());



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: firebase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firebase", function() { return firebase; });
var firebase = {
    apiKey: "AIzaSyCDPhWtRUn_BnosO2rQBYUoqa9F-idXXJU",
    authDomain: "inventario-8235e.firebaseapp.com",
    projectId: "inventario-8235e",
    storageBucket: "inventario-8235e.appspot.com",
    messagingSenderId: "770244062123",
    appId: "1:770244062123:web:5add740fecd4bbbb6b00ee",
    measurementId: "G-QVXKX5SH61"
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyCDPhWtRUn_BnosO2rQBYUoqa9F-idXXJU",
        authDomain: "inventario-8235e.firebaseapp.com",
        projectId: "inventario-8235e",
        storageBucket: "inventario-8235e.appspot.com",
        messagingSenderId: "770244062123",
        appId: "1:770244062123:web:5add740fecd4bbbb6b00ee",
        measurementId: "G-QVXKX5SH61"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\usuario\Documents\Github\Pruebas\Inventory\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map