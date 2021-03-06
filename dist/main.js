(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/admin/admin.module": [
		"./src/app/admin/admin.module.ts"
	],
	"app/auth/auth.module": [
		"./src/app/auth/auth.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/admin/add-sales/add-sales.component.html":
/*!**********************************************************!*\
  !*** ./src/app/admin/add-sales/add-sales.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container\">\n  <div class=\"columns\">\n    <div class=\"column is-3\">\n      <app-side-nav></app-side-nav>\n    </div>\n    <div class=\"column is-9\">\n      <h3 class=\"title\">Add Sale</h3>\n      <section class=\"section\">\n        <form action=\"#\">\n          <div class=\"columns\">\n            <div class=\"column is-6\">\n              <div class=\"field\">\n                <label class=\"label\">Company Name</label>\n                <div class=\"control\">\n                  <input class=\"input\" type=\"text\" name=\"company_name\" [(ngModel)]=\"company_name\">\n                </div>\n              </div>\n            </div>\n            <div class=\"column is-6\">\n              <div class=\"field\">\n                <label class=\"label\">Contact Name</label>\n                <div class=\"control\">\n                  <input class=\"input\" type=\"text\" name=\"contact_name\" [(ngModel)]=\"contact_name\">\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"columns\">\n            <div class=\"column is-6\">\n              <div class=\"field\">\n                <label class=\"label\">Contact Phone</label>\n                <div class=\"control\">\n                  <input class=\"input\" type=\"text\" name=\"contact_phone\" [(ngModel)]=\"contact_phone\">\n                </div>\n              </div>\n            </div>\n            <div class=\"column is-6\">\n              <div class=\"field\">\n                <label class=\"label\">Contact Email</label>\n                <div class=\"control\">\n                  <input class=\"input\" type=\"text\" name=\"contact_email\" [(ngModel)]=\"contact_email\">\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"columns\">\n            <div class=\"column is-6\">\n              <div class=\"field\">\n                <label class=\"label\">Weight</label>\n                <div class=\"control\">\n                  <input class=\"input\" type=\"text\" name=\"weight\" [(ngModel)]=\"weight\">\n                </div>\n              </div>\n            </div>\n            <div class=\"column is-6\">\n              <div class=\"field\">\n                <label class=\"label\">Dangerous Good?</label>\n                <div class=\"control\">\n                  <label class=\"radio\">\n                    <input type=\"radio\" name=\"dangerous\" value=\"Yes\" [(ngModel)]=\"dangerous\">\n                    Yes\n                  </label>\n                  <label class=\"radio\">\n                    <input type=\"radio\" name=\"dangerous\" value=\"No\" [(ngModel)]=\"dangerous\">\n                    No\n                  </label>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"columns\">\n            <div class=\"column is-6\">\n              <div class=\"field\">\n                <label class=\"label\">Description</label>\n                <div class=\"control\">\n                  <textarea class=\"textarea\" name=\"description\" [(ngModel)]=\"description\"></textarea>\n                </div>\n              </div>\n            </div>\n            <div class=\"column is-6\">\n              <div class=\"field\">\n                <label class=\"label\">Special Instructions</label>\n                <div class=\"control\">\n                  <textarea class=\"textarea\" name=\"instructions\" [(ngModel)]=\"instructions\"></textarea>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"columns\">\n            <div class=\"column is-6\">\n              <div class=\"field\">\n                <label class=\"label\">Origin Airport</label>\n                <div class=\"control\">\n                  <div class=\"select\">\n                    <select [(ngModel)]=\"origin_airport\" name=\"origin_airport\">\n                      <option *ngFor=\"let airport of airports\" [value]=\"airport.icao\">{{airport.icao}}\n                      </option>\n                    </select>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"column is-6\">\n              <div class=\"field\">\n                <label class=\"label\">Destination Airport</label>\n                <div class=\"control\">\n                  <div class=\"select\">\n                    <select [(ngModel)]=\"destination_airport\" name=\"destination_airport\">\n                      <option *ngFor=\"let airport of airports\" [value]=\"airport.icao\">{{airport.icao}}\n                      </option>\n                    </select>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"columns\">\n            <div class=\"column is-6\">\n              <div class=\"field\">\n                <label class=\"label\">Departure</label>\n                <div class=\"control\">\n                    <ng2-flatpickr [config]=\"exampleOptions\" [(ngModel)]=\"departure\" name=\"departure\">\n                    </ng2-flatpickr>\n                </div>\n              </div>\n            </div>\n            <div class=\"column is-6\">\n                <div class=\"field\">\n                    <label class=\"label\">Reference ID</label>\n                    <div class=\"control\">\n                  <input type=\"text\" class=\"input\" name=\"reference_id\" [(ngModel)]=\"reference_id\">\n                    </div>\n                  </div>\n            </div>\n          </div>\n\n          <div class=\"columns\">\n            <div class=\"column is-6\">\n              <div class=\"field\">\n                <label class=\"label\">Estimated Cost</label>\n                <div class=\"control\">\n                  <input type=\"text\" class=\"input\" name=\"estimated_cost\" [(ngModel)]=\"estimated_cost\">\n                </div>\n              </div>\n            </div>\n            <div class=\"column is-6\">\n              <div class=\"field\">\n                <label class=\"label\">Price Charged</label>\n                <div class=\"control\">\n                  <input type=\"text\" class=\"input\" name=\"price_charged\" [(ngModel)]=\"price_charged\">\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"field is-grouped\">\n            <div class=\"control\">\n              <button class=\"button is-link\" (click)=\"addSale()\">Submit</button>\n            </div>\n            <div class=\"control\">\n              <button class=\"button is-text\" type=\"reset\">Reset</button>\n            </div>\n          </div>\n        </form>\n      </section>\n    </div>\n  </div>\n</div>\n<app-chat></app-chat>\n"

/***/ }),

/***/ "./src/app/admin/add-sales/add-sales.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/admin/add-sales/add-sales.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkZC1zYWxlcy9hZGQtc2FsZXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/add-sales/add-sales.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/add-sales/add-sales.component.ts ***!
  \********************************************************/
/*! exports provided: AddSalesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSalesComponent", function() { return AddSalesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../admin.service */ "./src/app/admin/admin.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var AddSalesComponent = /** @class */ (function () {
    function AddSalesComponent(adminService, renderer, document) {
        this.adminService = adminService;
        this.renderer = renderer;
        this.document = document;
        this.exampleOptions = {
            enableTime: true,
            mode: "single"
        };
    }
    AddSalesComponent.prototype.ngOnInit = function () {
        this.getAirports();
        this.doRun = true;
    };
    AddSalesComponent.prototype.ngAfterViewInit = function () {
        // addClass hack until ng2-flatpickr takes my PR
        this.renderer.addClass(this.document.getElementsByClassName('ng2-flatpickr-input flatpickr-input')[0], 'input');
    };
    AddSalesComponent.prototype.getAirports = function () {
        var _this = this;
        this.adminService.getAirports(1, 20).subscribe(function (data) {
            _this.airports = data.data;
            console.log('airports ', _this.airports);
        });
    };
    AddSalesComponent.prototype.addSale = function () {
        var _this = this;
        console.log('add start');
        jquery__WEBPACK_IMPORTED_MODULE_2__('#addBtn').addClass('is-loading');
        if (this.doRun === true) {
            this.adminService.addSale(this.company_name, this.contact_name, this.contact_email, this.contact_phone, this.weight, this.dangerous, this.instructions, this.description, this.origin_airport, this.destination_airport, Date.parse(this.departure) / 1000, this.reference_id, this.estimated_cost, this.price_charged)
                .subscribe(function (data) {
                console.log('Aircraft Added ', data);
                // this.getAircrafts();
                jquery__WEBPACK_IMPORTED_MODULE_2__('form').trigger("reset");
                jquery__WEBPACK_IMPORTED_MODULE_2__('#addBtn').removeClass('is-loading');
                _this.doRun = false;
            }, function (error) {
                jquery__WEBPACK_IMPORTED_MODULE_2__('#addBtn').removeClass('is-loading');
                console.log(error);
            });
        }
    };
    AddSalesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-sales',
            template: __webpack_require__(/*! ./add-sales.component.html */ "./src/app/admin/add-sales/add-sales.component.html"),
            styles: [__webpack_require__(/*! ./add-sales.component.scss */ "./src/app/admin/add-sales/add-sales.component.scss")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])),
        __metadata("design:paramtypes", [_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], Object])
    ], AddSalesComponent);
    return AddSalesComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _admin_user_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-user-guard */ "./src/app/admin/admin-user-guard.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/admin/dashboard/dashboard.component.ts");
/* harmony import */ var _aircrafts_aircrafts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./aircrafts/aircrafts.component */ "./src/app/admin/aircrafts/aircrafts.component.ts");
/* harmony import */ var _aircraft_aircraft_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./aircraft/aircraft.component */ "./src/app/admin/aircraft/aircraft.component.ts");
/* harmony import */ var _crews_crews_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./crews/crews.component */ "./src/app/admin/crews/crews.component.ts");
/* harmony import */ var _crew_crew_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./crew/crew.component */ "./src/app/admin/crew/crew.component.ts");
/* harmony import */ var _movements_movements_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./movements/movements.component */ "./src/app/admin/movements/movements.component.ts");
/* harmony import */ var _movement_movement_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./movement/movement.component */ "./src/app/admin/movement/movement.component.ts");
/* harmony import */ var _sales_sales_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sales/sales.component */ "./src/app/admin/sales/sales.component.ts");
/* harmony import */ var _add_sales_add_sales_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./add-sales/add-sales.component */ "./src/app/admin/add-sales/add-sales.component.ts");
/* harmony import */ var _new_flight_new_flight_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./new-flight/new-flight.component */ "./src/app/admin/new-flight/new-flight.component.ts");
/* harmony import */ var _airports_airports_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./airports/airports.component */ "./src/app/admin/airports/airports.component.ts");
/* harmony import */ var _new_airport_new_airport_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./new-airport/new-airport.component */ "./src/app/admin/new-airport/new-airport.component.ts");
/* harmony import */ var _handlers_handlers_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./handlers/handlers.component */ "./src/app/admin/handlers/handlers.component.ts");
/* harmony import */ var _new_handler_new_handler_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./new-handler/new-handler.component */ "./src/app/admin/new-handler/new-handler.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/admin/settings/settings.component.ts");
/* harmony import */ var _airport_airport_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./airport/airport.component */ "./src/app/admin/airport/airport.component.ts");
/* harmony import */ var _edit_airport_edit_airport_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./edit-airport/edit-airport.component */ "./src/app/admin/edit-airport/edit-airport.component.ts");
/* harmony import */ var _edit_sales_edit_sales_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./edit-sales/edit-sales.component */ "./src/app/admin/edit-sales/edit-sales.component.ts");
/* harmony import */ var _new_aircraft_new_aircraft_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./new-aircraft/new-aircraft.component */ "./src/app/admin/new-aircraft/new-aircraft.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var routes = [{
        path: 'admin',
        canActivate: [_admin_user_guard__WEBPACK_IMPORTED_MODULE_3__["OnlyAdminUsersGuard"]],
        children: [{
                path: '',
                component: _admin_component__WEBPACK_IMPORTED_MODULE_2__["AdminComponent"],
            },
            {
                path: 'dashboard',
                component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]
            },
            {
                path: 'aircrafts',
                component: _aircrafts_aircrafts_component__WEBPACK_IMPORTED_MODULE_5__["AircraftsComponent"]
            },
            {
                path: 'aircraft/:id',
                component: _aircraft_aircraft_component__WEBPACK_IMPORTED_MODULE_6__["AircraftComponent"]
            },
            {
                path: 'airports/:pageNo',
                component: _airports_airports_component__WEBPACK_IMPORTED_MODULE_14__["AirportsComponent"]
            },
            {
                path: 'new-airport',
                component: _new_airport_new_airport_component__WEBPACK_IMPORTED_MODULE_15__["NewAirportComponent"]
            },
            {
                path: 'edit-airport/:id',
                component: _edit_airport_edit_airport_component__WEBPACK_IMPORTED_MODULE_20__["EditAirportComponent"]
            },
            {
                path: 'edit-sales/:id',
                component: _edit_sales_edit_sales_component__WEBPACK_IMPORTED_MODULE_21__["EditSalesComponent"]
            },
            {
                path: 'handlers',
                component: _handlers_handlers_component__WEBPACK_IMPORTED_MODULE_16__["HandlersComponent"]
            },
            {
                path: 'new-handler/:id',
                component: _new_handler_new_handler_component__WEBPACK_IMPORTED_MODULE_17__["NewHandlerComponent"]
            },
            {
                path: 'new-aircraft',
                component: _new_aircraft_new_aircraft_component__WEBPACK_IMPORTED_MODULE_22__["NewAircraftComponent"]
            },
            {
                path: 'crews',
                component: _crews_crews_component__WEBPACK_IMPORTED_MODULE_7__["CrewsComponent"]
            },
            {
                path: 'crew/:id',
                component: _crew_crew_component__WEBPACK_IMPORTED_MODULE_8__["CrewComponent"]
            },
            {
                path: 'movements',
                component: _movements_movements_component__WEBPACK_IMPORTED_MODULE_9__["MovementsComponent"]
            },
            {
                path: 'movement/:id',
                component: _movement_movement_component__WEBPACK_IMPORTED_MODULE_10__["MovementComponent"]
            },
            {
                path: 'sales',
                component: _sales_sales_component__WEBPACK_IMPORTED_MODULE_11__["SalesComponent"]
            },
            {
                path: 'add-sales',
                component: _add_sales_add_sales_component__WEBPACK_IMPORTED_MODULE_12__["AddSalesComponent"]
            },
            {
                path: 'new-flight/:id',
                component: _new_flight_new_flight_component__WEBPACK_IMPORTED_MODULE_13__["NewFlightComponent"]
            },
            {
                path: 'settings',
                component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_18__["SettingsComponent"]
            },
            {
                path: 'airport/:id',
                component: _airport_airport_component__WEBPACK_IMPORTED_MODULE_19__["AirportComponent"]
            }]
    }];
var AdminRoutingModule = /** @class */ (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());



/***/ }),

/***/ "./src/app/admin/admin-user-guard.ts":
/*!*******************************************!*\
  !*** ./src/app/admin/admin-user-guard.ts ***!
  \*******************************************/
/*! exports provided: OnlyAdminUsersGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlyAdminUsersGuard", function() { return OnlyAdminUsersGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OnlyAdminUsersGuard = /** @class */ (function () {
    function OnlyAdminUsersGuard(authService) {
        this.authService = authService;
    }
    OnlyAdminUsersGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn())
            return true;
        return false;
    };
    OnlyAdminUsersGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], OnlyAdminUsersGuard);
    return OnlyAdminUsersGuard;
}());



/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  admin works!\n</p>"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-routing.module */ "./src/app/admin/admin-routing.module.ts");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _admin_user_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-user-guard */ "./src/app/admin/admin-user-guard.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/admin/header/header.component.ts");
/* harmony import */ var ngx_openlayers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-openlayers */ "./node_modules/ngx-openlayers/dist/index.js");
/* harmony import */ var ngx_openlayers__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ngx_openlayers__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./side-nav/side-nav.component */ "./src/app/admin/side-nav/side-nav.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/admin/chat/chat.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/admin/dashboard/dashboard.component.ts");
/* harmony import */ var _aircrafts_aircrafts_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./aircrafts/aircrafts.component */ "./src/app/admin/aircrafts/aircrafts.component.ts");
/* harmony import */ var _airports_airports_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./airports/airports.component */ "./src/app/admin/airports/airports.component.ts");
/* harmony import */ var _aircraft_aircraft_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./aircraft/aircraft.component */ "./src/app/admin/aircraft/aircraft.component.ts");
/* harmony import */ var _crews_crews_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./crews/crews.component */ "./src/app/admin/crews/crews.component.ts");
/* harmony import */ var ng2_flatpickr__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng2-flatpickr */ "./node_modules/ng2-flatpickr/esm5/ng2-flatpickr.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ "./node_modules/angular-calendar/date-adapters/date-fns/index.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @fullcalendar/angular */ "./node_modules/@fullcalendar/angular/fesm5/fullcalendar-angular.js");
/* harmony import */ var _crew_crew_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./crew/crew.component */ "./src/app/admin/crew/crew.component.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _movements_movements_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./movements/movements.component */ "./src/app/admin/movements/movements.component.ts");
/* harmony import */ var _movement_movement_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./movement/movement.component */ "./src/app/admin/movement/movement.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angularx_flatpickr__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! angularx-flatpickr */ "./node_modules/angularx-flatpickr/fesm5/angularx-flatpickr.js");
/* harmony import */ var _sales_sales_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./sales/sales.component */ "./src/app/admin/sales/sales.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _add_sales_add_sales_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./add-sales/add-sales.component */ "./src/app/admin/add-sales/add-sales.component.ts");
/* harmony import */ var _new_flight_new_flight_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./new-flight/new-flight.component */ "./src/app/admin/new-flight/new-flight.component.ts");
/* harmony import */ var _new_airport_new_airport_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./new-airport/new-airport.component */ "./src/app/admin/new-airport/new-airport.component.ts");
/* harmony import */ var _handlers_handlers_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./handlers/handlers.component */ "./src/app/admin/handlers/handlers.component.ts");
/* harmony import */ var _new_handler_new_handler_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./new-handler/new-handler.component */ "./src/app/admin/new-handler/new-handler.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/admin/settings/settings.component.ts");
/* harmony import */ var _airport_airport_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./airport/airport.component */ "./src/app/admin/airport/airport.component.ts");
/* harmony import */ var _edit_airport_edit_airport_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./edit-airport/edit-airport.component */ "./src/app/admin/edit-airport/edit-airport.component.ts");
/* harmony import */ var _edit_sales_edit_sales_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./edit-sales/edit-sales.component */ "./src/app/admin/edit-sales/edit-sales.component.ts");
/* harmony import */ var _new_aircraft_new_aircraft_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./new-aircraft/new-aircraft.component */ "./src/app/admin/new-aircraft/new-aircraft.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









































var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"],
                _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_7__["SideNavComponent"],
                _chat_chat_component__WEBPACK_IMPORTED_MODULE_8__["ChatComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
                _aircrafts_aircrafts_component__WEBPACK_IMPORTED_MODULE_10__["AircraftsComponent"],
                _airports_airports_component__WEBPACK_IMPORTED_MODULE_11__["AirportsComponent"],
                _aircraft_aircraft_component__WEBPACK_IMPORTED_MODULE_12__["AircraftComponent"],
                _crews_crews_component__WEBPACK_IMPORTED_MODULE_13__["CrewsComponent"],
                _crew_crew_component__WEBPACK_IMPORTED_MODULE_22__["CrewComponent"],
                _movements_movements_component__WEBPACK_IMPORTED_MODULE_25__["MovementsComponent"],
                _movement_movement_component__WEBPACK_IMPORTED_MODULE_26__["MovementComponent"],
                _sales_sales_component__WEBPACK_IMPORTED_MODULE_29__["SalesComponent"],
                _add_sales_add_sales_component__WEBPACK_IMPORTED_MODULE_31__["AddSalesComponent"],
                _new_flight_new_flight_component__WEBPACK_IMPORTED_MODULE_32__["NewFlightComponent"],
                _new_airport_new_airport_component__WEBPACK_IMPORTED_MODULE_33__["NewAirportComponent"],
                _handlers_handlers_component__WEBPACK_IMPORTED_MODULE_34__["HandlersComponent"],
                _new_handler_new_handler_component__WEBPACK_IMPORTED_MODULE_35__["NewHandlerComponent"],
                _settings_settings_component__WEBPACK_IMPORTED_MODULE_36__["SettingsComponent"],
                _airport_airport_component__WEBPACK_IMPORTED_MODULE_37__["AirportComponent"],
                _edit_airport_edit_airport_component__WEBPACK_IMPORTED_MODULE_38__["EditAirportComponent"],
                _edit_sales_edit_sales_component__WEBPACK_IMPORTED_MODULE_39__["EditSalesComponent"],
                _new_aircraft_new_aircraft_component__WEBPACK_IMPORTED_MODULE_40__["NewAircraftComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _admin_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminRoutingModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_20__["FileUploadModule"],
                ng2_flatpickr__WEBPACK_IMPORTED_MODULE_14__["Ng2FlatpickrModule"],
                ngx_openlayers__WEBPACK_IMPORTED_MODULE_6__["AngularOpenlayersModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_23__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_30__["environment"].firebase),
                angularfire2_database__WEBPACK_IMPORTED_MODULE_24__["AngularFireDatabaseModule"],
                angularx_flatpickr__WEBPACK_IMPORTED_MODULE_28__["FlatpickrModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_27__["FormsModule"],
                _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_21__["FullCalendarModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_27__["ReactiveFormsModule"],
                angular_calendar__WEBPACK_IMPORTED_MODULE_18__["CalendarModule"].forRoot({
                    provide: angular_calendar__WEBPACK_IMPORTED_MODULE_18__["DateAdapter"],
                    useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_19__["adapterFactory"]
                })
            ],
            providers: [
                _admin_user_guard__WEBPACK_IMPORTED_MODULE_4__["OnlyAdminUsersGuard"]
            ]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/admin/admin.service.ts":
/*!****************************************!*\
  !*** ./src/app/admin/admin.service.ts ***!
  \****************************************/
/*! exports provided: AdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return AdminService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/storage */ "./node_modules/firebase/storage/dist/index.esm.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AdminService = /** @class */ (function () {
    function AdminService(http, db) {
        this.http = http;
        this.db = db;
        this.basePath = '/uploads';
    }
    AdminService.prototype.pushFileToStorage = function (fileUpload, progress) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            var storageRef = firebase_app__WEBPACK_IMPORTED_MODULE_6__["storage"]().ref();
            var uploadTask = storageRef.child(_this.basePath + "/" + fileUpload.file.name).put(fileUpload.file);
            uploadTask.on(firebase_app__WEBPACK_IMPORTED_MODULE_6__["storage"].TaskEvent.STATE_CHANGED, function (snapshot) {
                // in progress
                var snap = snapshot;
                progress.percentage = Math.round((snap.bytesTransferred / snap.totalBytes) * 100);
            }, function (error) {
                // fail
                console.log(error);
            }, function () {
                // success
                uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                    console.log('File available at', downloadURL);
                    fileUpload.url = downloadURL;
                    fileUpload.name = fileUpload.file.name;
                    observer.next({ data: downloadURL });
                    observer.complete();
                    // this.saveFileData(fileUpload);
                });
            });
        });
    };
    AdminService.prototype.saveFileData = function (fileUpload) {
        this.db.list(this.basePath + "/").push(fileUpload);
    };
    AdminService.prototype.addFlight = function (reference_id, ops_crew, pic_crew, fo_crew, ops_crew_name, pic_crew_name, fo_crew_name, aircraft, departure_airport, arrival_airport, departure_time, handler, dangerous, type, pax, cargo, liveLeg, positionFrom, positionTo) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.post('/api/flight', {
                reference_id: reference_id,
                ops_crew: ops_crew,
                pic_crew: pic_crew,
                fo_crew: fo_crew,
                ops_crew_name: ops_crew_name,
                pic_crew_name: pic_crew_name,
                fo_crew_name: fo_crew_name,
                aircraft: aircraft,
                departure_airport: departure_airport,
                arrival_airport: arrival_airport,
                departure_time: departure_time,
                handler: handler,
                dangerous: dangerous,
                type: type,
                pax: pax,
                cargo: cargo,
                liveLeg: liveLeg,
                positionFrom: positionFrom,
                positionTo: positionTo
            }).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.addMboard = function (route_id, message, usergroup) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.post('/api/mboard', {
                route_id: route_id,
                message: message,
                usergroup: usergroup
            }).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.updateCrew = function (id, unavailableFrom, unavailableTo) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.put('/api/crew/update/' + id, {
                unavailableFrom: unavailableFrom,
                unavailableTo: unavailableTo
            }).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.updateCrewData = function (id, name, img_url, occupation, p_email, s_email, p_phone, s_phone) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.put('/api/crew/updateCrew/' + id, {
                img_url: img_url,
                name: name,
                occupation: occupation,
                p_email: p_email,
                s_email: s_email,
                p_phone: p_phone,
                s_phone: s_phone
            }).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.sendMail = function (email, subject, message) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.post('/api/mail/send-mail', {
                email: email,
                subject: subject,
                message: message
            }).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.updateTemplate = function (id, subject, message) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.put('/api/mail/update/' + id, {
                subject: subject,
                message: message
            }).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.addRoute = function (reference_id, route, ops_crew, pic_crew, fo_crew, ops_crew_name, pic_crew_name, fo_crew_name, aircraft, departure_airport, arrival_airport, handler, dangerous, paxCargo, pax, cargo, type, arrivaltime, departuretime, fuel, distance, fplan) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.post('/api/route', {
                reference_id: reference_id,
                route: route,
                ops_crew: ops_crew,
                pic_crew: pic_crew,
                fo_crew: fo_crew,
                ops_crew_name: ops_crew_name,
                pic_crew_name: pic_crew_name,
                fo_crew_name: fo_crew_name,
                aircraft: aircraft,
                departure_airport: departure_airport,
                arrival_airport: arrival_airport,
                handler: handler,
                dangerous: dangerous,
                paxCargo: paxCargo,
                pax: pax,
                cargo: cargo,
                type: type,
                arrivaltime: arrivaltime,
                departuretime: departuretime,
                fuel: fuel,
                distance: distance,
                fplan: fplan
            }).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.addCrew = function (name, img_url, occupation, unavailableFrom, unavailableTo, p_email, s_email, p_phone, s_phone, licence, expiry, user_id) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.post('/api/crew', {
                name: name,
                img_url: img_url,
                occupation: occupation,
                unavailableFrom: unavailableFrom,
                unavailableTo: unavailableTo,
                p_email: p_email,
                s_email: s_email,
                p_phone: p_phone,
                s_phone: s_phone,
                licence: licence,
                expiry: expiry,
                user_id: user_id
            }).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.addSale = function (company_name, contact_name, contact_email, contact_phone, weight, dangerous, description, instructions, origin_airport, destination_airport, departure, reference_id, estimated_cost, price_charged) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.post('/api/sale', {
                company_name: company_name,
                contact_name: contact_name,
                contact_email: contact_email,
                contact_phone: contact_phone,
                weight: weight,
                dangerous: dangerous,
                description: description,
                instructions: instructions,
                origin_airport: origin_airport,
                destination_airport: destination_airport,
                departure: departure,
                reference_id: reference_id,
                estimated_cost: estimated_cost,
                price_charged: price_charged,
            }).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.updateSale = function (id, company_name, contact_name, contact_email, contact_phone, weight, dangerous, description, instructions, origin_airport, destination_airport, departure, reference_id, estimated_cost, price_charged) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.post('/api/sale/update/' + id, {
                company_name: company_name,
                contact_name: contact_name,
                contact_email: contact_email,
                contact_phone: contact_phone,
                weight: weight,
                dangerous: dangerous,
                description: description,
                instructions: instructions,
                origin_airport: origin_airport,
                destination_airport: destination_airport,
                departure: departure,
                reference_id: reference_id,
                estimated_cost: estimated_cost,
                price_charged: price_charged,
            }).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.addAircraftDB = function (aircraft) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.post('/api/aircraft', {
                aircraft: aircraft
            }).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.addAircraft = function (callsign, manufacturername, manufacturer, icaotypename, icaotype, modelname, model, year, homebase, fuel_type, speedunit, fuelunit, comment, equipment, transponder, com, nav, dat, picname, crewcontact, colormarking, dinghies, dinghycapacity, dinghycolor, dinghycover, emergencyradio, survival, lifejackets, wb, distances, defaultmaxfl, maxbhp, taxifuel, taxifuelflow, contingencyfuel) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.post('/api/aircraft/addAircraft', {
                callsign: callsign,
                manufacturername: manufacturername,
                manufacturer: manufacturer,
                icaotypename: icaotypename,
                icaotype: icaotype,
                modelname: modelname,
                model: model,
                year: year,
                homebase: homebase,
                fuel_type: fuel_type,
                speedunit: speedunit,
                fuelunit: fuelunit,
                comment: comment,
                equipment: equipment,
                transponder: transponder,
                com: com,
                nav: nav,
                dat: dat,
                picname: picname,
                crewcontact: crewcontact,
                colormarking: colormarking,
                dinghies: dinghies,
                dinghycapacity: dinghycapacity,
                dinghycolor: dinghycolor,
                dinghycover: dinghycover,
                emergencyradio: emergencyradio,
                survival: survival,
                lifejackets: lifejackets,
                wb: wb,
                distances: distances,
                defaultmaxfl: defaultmaxfl,
                maxbhp: maxbhp,
                taxifuel: taxifuel,
                taxifuelflow: taxifuelflow,
                contingencyfuel: contingencyfuel
            }).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.updateAircraft = function (id, registration, aircraftId, img_url, tow, fuel, pax, cargo, icao24, base) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.put('/api/aircraft/update/' + id, {
                registration: registration,
                aircraftId: aircraftId,
                img_url: img_url,
                tow: tow,
                fuel: fuel,
                pax: pax,
                cargo: cargo,
                icao24: icao24,
                base: base
            }).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.addLicence = function (crew_id, licence, expiry) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.post('/api/licence', {
                crew_id: crew_id,
                licence: licence,
                expiry: expiry
            }).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.addAirport = function (name, country, icao, latitude, longitude, elevation, longest_runway, magnetic_variation, airport_type, beacon, fuel_types, landing_fee, oxygen, repairs) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.post('/api/airport', {
                name: name,
                country: country,
                icao: icao,
                latitude: latitude,
                longitude: longitude,
                elevation: elevation,
                longest_runway: longest_runway,
                magnetic_variation: magnetic_variation,
                airport_type: airport_type,
                beacon: beacon,
                fuel_types: fuel_types,
                landing_fee: landing_fee,
                oxygen: oxygen,
                repairs: repairs
            }).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.updateAirport = function (id, name, country, icao, latitude, longitude, elevation, longest_runway, magnetic_variation, airport_type, beacon, fuel_types, landing_fee, oxygen, repairs) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.put('/api/airport/update/' + id, {
                name: name,
                country: country,
                icao: icao,
                latitude: latitude,
                longitude: longitude,
                elevation: elevation,
                longest_runway: longest_runway,
                magnetic_variation: magnetic_variation,
                airport_type: airport_type,
                beacon: beacon,
                fuel_types: fuel_types,
                landing_fee: landing_fee,
                oxygen: oxygen,
                repairs: repairs
            }).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.addHandler = function (name, icao, logo, phone_primary, phone_secondary, email_primary, email_secondary, monday_open, monday_close, tuesday_open, tuesday_close, wednesday_open, wednesday_close, thursday_open, thursday_close, friday_open, friday_close, saturday_open, saturday_close, sunday_open, sunday_close) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.post('/api/handler', {
                name: name,
                icao: icao,
                logo: logo,
                phone_primary: phone_primary,
                phone_secondary: phone_secondary,
                email_primary: email_primary,
                email_secondary: email_secondary,
                monday_open: monday_open,
                monday_close: monday_close,
                tuesday_open: tuesday_open,
                tuesday_close: tuesday_close,
                wednesday_open: wednesday_open,
                wednesday_close: wednesday_close,
                thursday_open: thursday_open,
                thursday_close: thursday_close,
                friday_open: friday_open,
                friday_close: friday_close,
                saturday_open: saturday_open,
                saturday_close: saturday_close,
                sunday_open: sunday_open,
                sunday_close: sunday_close,
            }).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.getAircrafts = function () {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.get('/api/aircraft/fetch').subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.deleteCrew = function (id) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.delete('/api/crew/delete/' + id).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.deleteRoute = function (id) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.delete('/api/route/delete/' + id).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.deleteUser = function (id) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.delete('/api/auth/delete/' + id).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.deleteAirport = function (id) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.delete('/api/airport/delete/' + id).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.deleteAircraft = function (id) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.delete('/api/aircraft/delete/' + id).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.getAirports = function (pageNo, size) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.get('/api/airport/fetch/' + pageNo + '/' + size).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.findAirports = function (keyword) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.get('/api/airport/find/' + keyword).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.getHandlers = function () {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.get('/api/handler/fetch').subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.getCrews = function () {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.get('/api/crew/fetch').subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.getSale = function (id) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.get('/api/sale/fetch/' + id).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.lastLiveFlight = function (aircraft, date) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.get('/api/route/lastLiveFlight/' + aircraft + '/' + date).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.nextLiveFlight = function (aircraft, date) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.get('/api/route/nextLiveFlight/' + aircraft + '/' + date).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.checkOverlap = function (aircraft, departure, arrival) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.get('/api/route/checkOverlap/' + aircraft + '/' + departure + '/' + arrival).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.getBriefing = function (route) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.get('/api/aircraft/getBriefing/' + route).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.getCrew = function (id) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.get('/api/crew/fetch/' + id).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.getCrewByUser = function (id) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.get('/api/crew/fetchUser/' + id).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.getNOTAM = function (id) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.get('/api/aircraft/getNOTAM/' + id).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.getCrewByOccupation = function (occupation) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.get('/api/crew/fetchType/' + occupation).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.getAircraft = function (id) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.get('/api/aircraft/fetch/' + id).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.getAirport = function (icao) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.get('/api/airport/fetch/' + icao).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.getAirportDetails = function (icao) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.get('/api/airport/fetchAirport/' + icao).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.getLicences = function (crew_id) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.get('/api/licence/fetch/' + crew_id).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.getHandler = function (airport) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.get('/api/handler/fetch/' + airport).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.getHandlerDetails = function (handler) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.get('/api/handler/fetchDetails/' + handler).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.getSales = function () {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.get('/api/sale/fetch').subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.getUsers = function () {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.get('/api/auth/fetch').subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.getUser = function (id) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.get('/api/auth/fetch/' + id).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.addUser = function (fullname, email, password, repeatPassword, role, occupation) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.post('/api/auth/register', {
                fullname: fullname,
                email: email,
                password: password,
                repeatPassword: repeatPassword,
                role: role,
                occupation: occupation
            }).subscribe(function (data) {
                observer.next({ data: data.user });
                observer.complete();
            });
        });
    };
    AdminService.prototype.updateUser = function (id, fullname, email, password, repeatPassword, role, occupation) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.put('/api/auth/update/' + id, {
                fullname: fullname,
                email: email,
                password: password,
                repeatPassword: repeatPassword,
                role: role,
                occupation: occupation
            }).subscribe(function (data) {
                observer.next({ data: data.user });
                observer.complete();
            });
        });
    };
    AdminService.prototype.route = function (data) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.post('/api/aircraft/createRoute', data).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.getFplan = function (routeId) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.get('/api/aircraft/getFplan/' + routeId).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.getFlight = function () {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.get('/api/flight/fetch').subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.getMovements = function () {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.get('/api/route/fetch').subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.getMovement = function (id) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.get('/api/route/fetch/' + id).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.downloadBriefing = function (route) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            var mediaType = 'application/pdf';
            _this.http.get('/api/aircraft/downloadBriefing/' + route, {
                responseType: 'blob'
            }).subscribe(function (data) {
                console.log(data);
                var blob = new Blob([data], { type: mediaType });
                Object(file_saver__WEBPACK_IMPORTED_MODULE_4__["saveAs"])(blob, route + '.pdf');
                observer.next({ data: data });
                observer.complete();
                console.log('not found');
            });
        });
    };
    AdminService.prototype.getAircraftSchedule = function (aircraftId) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.get('/api/route/fetchAircraft/' + aircraftId).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.getOPSSchedule = function (ops) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.get('/api/route/fetchOPS/' + ops).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.getPICSchedule = function (pic) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.get('/api/route/fetchPIC/' + pic).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.getFOSchedule = function (fo) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.get('/api/route/fetchFO/' + fo).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.getAdminSchedule = function () {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.get('/api/route/fetch').subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.getTemplates = function () {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.get('/api/mail/fetch').subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.longPoll = function (routeId) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.get('/api/aircraft/longpoll/' + routeId).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.getChatByRoom = function (room) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.get('/api/chat/' + room).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.getMboard = function (route) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.get('/api/mboard/fetch/' + route).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.getManufacturers = function () {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.get('/api/aircraft/getManufacturers').subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.getAircraftTypes = function (manufacturer) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.get('/api/aircraft/getAircraftTypes/' + manufacturer).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.getLocation = function (icao24) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.get('https://kininteractivesolutions:KinSolutions123@opensky-network.org/api/tracks/all?icao24=' + icao24 + '&time=0').subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.updateFiled = function (id, filed) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.put('/api/route/updateFiled/' + id, {
                filed: filed
            }).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.fileFPL = function (route) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.get('/api/aircraft/fileFPL/' + route).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.cancelFPL = function (flightid) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.get('/api/aircraft/cancelFPL/' + flightid).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.saveChat = function (data) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.post('/api/chat', data).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], angularfire2_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"]])
    ], AdminService);
    return AdminService;
}());



/***/ }),

/***/ "./src/app/admin/aircraft/aircraft.component.html":
/*!********************************************************!*\
  !*** ./src/app/admin/aircraft/aircraft.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container-fluid page-body-wrapper\">\n  <app-side-nav></app-side-nav>\n  <!-- Main Content -->\n  <div class=\"main-panel\">\n    <div class=\"content-wrapper\">\n      <div class=\"page_header d-flex\">\n        <h4 *ngIf=\"aircraft\"><strong>{{aircraft.registration}}</strong>&nbsp;<span>Cargo Aircraft</span></h4>\n      </div>\n      <div class=\"row\">\n\n        <div class=\"col-xl-7\" *ngIf=\"aircraft\">\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"block seat_car_block\">\n                <div class=\"block_head\">\n                  <h3>Upcoming Movements</h3>\n                </div>\n                <ul class=\"movement_list\">\n                  <li *ngFor=\"let schedule of upMove; let i=index\">\n                    <div class=\"m_i_destinations\">\n                      <span>{{schedule.departure_airport}}</span><i\n                        class=\"flaticon-right-arrow\"></i><span>{{schedule.arrival_airport}}</span>\n                    </div>\n                    <div class=\"m_i_date\">{{ schedule.departuretime*1000 | date : \"short\" }}</div>\n                    <a href=\"#\" class=\"btn btn-small-bordered\">View</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"block document_block\">\n                <div class=\"block_head\">\n                  <h3>Previous Movements</h3>\n                </div>\n                <ul class=\"movement_list\">\n                  <li *ngFor=\"let schedule of pastMove; let i=index\">\n                    <div class=\"m_i_destinations\">\n                      <span>{{schedule.departure_airport}}</span><i\n                        class=\"flaticon-right-arrow\"></i><span>{{schedule.arrival_airport}}</span>\n                    </div>\n                    <div class=\"m_i_date\">{{ schedule.departuretime*1000 | date : \"short\" }}</div>\n                    <a href=\"#\" class=\"btn btn-small-bordered\">View</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n          <div *ngIf=\"events.length != 0\" class=\"block full_calender_wrap\">\n            <!-- <div id=\"calendar\"></div> -->\n            <full-calendar defaultView=\"dayGridMonth\" [events]=\"events\" [header]=\"calendarHeaders\" navLinks=\"true\"\n              eventLimit=\"true\" [plugins]=\"calendarPlugins\"></full-calendar>\n          </div>\n        </div>\n        <div class=\"col-xl-5 main_panel_right\">\n\n          <div class=\"row\">\n            <div class=\"col-xl-12 col-lg-6 col-md-6\">\n              <div class=\"block map_block\">\n                <div class=\"block_head\">\n                  <h3>Movement Services</h3>\n                </div>\n                <div class=\"map_div\">\n                  <img src=\"http://159.65.145.230/downwind.io/images/map.png\" alt=\"map\">\n                  <aol-map [width]=\"'100%'\" [height]=\"'100%'\" *ngIf=\"aircraftLocation\">\n                      <aol-view [zoom]=\"5\">\n                        <aol-coordinate [x]=\"aircraftLon\" [y]=\"aircraftLat\" [srid]=\"'EPSG:4326'\"></aol-coordinate>\n                      </aol-view>\n                      <aol-layer-tile>\n                        <aol-source-osm></aol-source-osm>\n                      </aol-layer-tile>\n                      <aol-layer-vector>\n                        <aol-source-vector>\n                          <aol-feature>\n                            <aol-geometry-point>\n                              <aol-coordinate [x]=\"aircraftLon\" [y]=\"aircraftLat\" [srid]=\"'EPSG:4326'\"></aol-coordinate>\n                            </aol-geometry-point>\n                            <aol-style>\n                              <aol-style-circle [radius]=\"10\">\n                                <aol-style-stroke [color]=\"'black'\" [width]=\"2\"></aol-style-stroke>\n                                <aol-style-fill [color]=\"'red'\"></aol-style-fill>\n                              </aol-style-circle>\n                            </aol-style>\n                          </aol-feature>\n                        </aol-source-vector>\n                      </aol-layer-vector>\n                    </aol-map>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-xl-12 col-lg-6 col-md-6\">\n              <div class=\"block document_block\">\n                <div class=\"block_head\">\n                  <h3>Documents</h3>\n                </div>\n                <ul class=\"documents_list\">\n                  <li><a href=\"#\">Contact Information <i class=\"flaticon-download\"></i></a></li>\n                  <li><a href=\"#\">Contact Information <i class=\"flaticon-download\"></i></a></li>\n                  <li><a href=\"#\">Contact Information <i class=\"flaticon-download\"></i></a></li>\n                  <li><a href=\"#\">Contact Information <i class=\"flaticon-download\"></i></a></li>\n                </ul>\n              </div>\n            </div>\n\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/aircraft/aircraft.component.scss":
/*!********************************************************!*\
  !*** ./src/app/admin/aircraft/aircraft.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#tab-content > div {\n  display: none; }\n\n#tab-content > div.is-active {\n  display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZXgvRG9jdW1lbnRzL0dpdEh1Yi9mbGlnaHRvcHMvc3JjL2FwcC9hZG1pbi9haXJjcmFmdC9haXJjcmFmdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWEsRUFBQTs7QUFHZjtFQUNFLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FpcmNyYWZ0L2FpcmNyYWZ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3RhYi1jb250ZW50PmRpdiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBcbiAgI3RhYi1jb250ZW50PmRpdi5pcy1hY3RpdmUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/admin/aircraft/aircraft.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin/aircraft/aircraft.component.ts ***!
  \******************************************************/
/*! exports provided: AircraftComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AircraftComponent", function() { return AircraftComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin.service */ "./src/app/admin/admin.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fullcalendar/daygrid */ "./node_modules/@fullcalendar/daygrid/main.js");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fullcalendar/timegrid */ "./node_modules/@fullcalendar/timegrid/main.js");
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fullcalendar_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fullcalendar/list */ "./node_modules/@fullcalendar/list/main.js");
/* harmony import */ var _fullcalendar_list__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_list__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var colors = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
    }
};
var AircraftComponent = /** @class */ (function () {
    function AircraftComponent(adminService, route) {
        this.adminService = adminService;
        this.route = route;
        this.events = [];
        this.pastMove = [];
        this.upMove = [];
    }
    AircraftComponent.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.paramMap.get("id");
        this.getAircraft();
        this.status = "On Ground";
        this.currentTime = new Date().getTime();
        this.calendarPlugins = [_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_4___default.a, _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_5___default.a, _fullcalendar_list__WEBPACK_IMPORTED_MODULE_6___default.a];
        this.calendarHeaders = {
            right: 'prev,title,next',
            center: '',
            left: 'dayGridMonth,dayGridWeek'
        };
        jquery__WEBPACK_IMPORTED_MODULE_1__('#tabs li').on('click', function () {
            var tab = jquery__WEBPACK_IMPORTED_MODULE_1__(this).data('tab');
            jquery__WEBPACK_IMPORTED_MODULE_1__('#tabs li').removeClass('is-active');
            jquery__WEBPACK_IMPORTED_MODULE_1__(this).addClass('is-active');
            jquery__WEBPACK_IMPORTED_MODULE_1__('#tab-content div').removeClass('is-active');
            jquery__WEBPACK_IMPORTED_MODULE_1__('div[data-content="' + tab + '"]').addClass('is-active');
        });
    };
    AircraftComponent.prototype.getAircraft = function () {
        var _this = this;
        this.adminService.getAircraft(this.id).subscribe(function (data) {
            _this.aircraft = data.data;
            _this.getLocation();
            _this.getAircraftSchedule();
            console.log('aircraft ', _this.aircraft);
        });
    };
    AircraftComponent.prototype.getAircraftSchedule = function () {
        var _this = this;
        this.adminService.getAircraftSchedule(this.aircraft.aircraftId).subscribe(function (data) {
            _this.aircraftSchedule = data.data;
            _this.aircraftSchedule.forEach(function (element) {
                if (_this.status === "On Ground") {
                    if (element.departuretime * 1000 < _this.currentTime && element.arrivaltime > _this.currentTime) {
                        _this.status = "In Progress";
                    }
                }
                if (element.departuretime * 1000 < _this.currentTime) {
                    if (_this.pastMove.length < 4) {
                        _this.pastMove.push(element);
                    }
                }
                else {
                    if (_this.upMove.length < 4) {
                        _this.upMove.push(element);
                    }
                }
                _this.addEvent(element.departure_airport + ' -> ' + element.arrival_airport, element.departuretime, element.arrivaltime);
            });
            console.log('aircraft route', _this.aircraftSchedule);
        });
    };
    AircraftComponent.prototype.getLocation = function () {
        var _this = this;
        this.adminService.getLocation(this.aircraft.icao24).subscribe(function (data) {
            // this.aircraft = data.data;
            _this.aircraftLocation = data.data.path[data.data.path.length - 1];
            _this.aircraftLat = _this.aircraftLocation[1];
            _this.aircraftLon = _this.aircraftLocation[2];
            console.log('location ', _this.aircraftLat);
        });
    };
    AircraftComponent.prototype.addEvent = function (title, start, end) {
        this.events.push({
            title: title + ' (' + new Date(start * 1000) + ' - ' + new Date(end * 1000) + ')',
            start: new Date(start * 1000),
            end: new Date(end * 1000),
        });
    };
    AircraftComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-aircraft',
            template: __webpack_require__(/*! ./aircraft.component.html */ "./src/app/admin/aircraft/aircraft.component.html"),
            styles: [__webpack_require__(/*! ./aircraft.component.scss */ "./src/app/admin/aircraft/aircraft.component.scss")]
        }),
        __metadata("design:paramtypes", [_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], AircraftComponent);
    return AircraftComponent;
}());



/***/ }),

/***/ "./src/app/admin/aircrafts/aircrafts.component.html":
/*!**********************************************************!*\
  !*** ./src/app/admin/aircrafts/aircrafts.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container-fluid page-body-wrapper\">\n  <app-side-nav></app-side-nav>\n  <!-- Main Content -->\n  <div class=\"main-panel\">\n    <div class=\"content-wrapper\">\n      <div class=\"page_header p_header_two d-flex\">\n        <h4><strong>Aircrafts Overview</strong></h4>\n        <div class=\"ml-auto\">\n          <a href=\"#\" class=\"btn bg_blue\">Add Aircraft</a>\n        </div>\n      </div>\n\n      <div class=\"block table_block\">\n        <div class=\"table-responsive\">\n          <table class=\"table\">\n            <thead>\n              <tr>\n                <th class=\"c_l_img\"></th>\n                <th class=\"c_l_name\">Registration</th>\n                <th class=\"c_l_movement\">Upcoming Movement</th>\n                <th class=\"c_l_status\">Current Status</th>\n                <th class=\"c_l_action\">Actions</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let aircraft of aircrafts\">\n                <td class=\"c_l_img\">\n                  <div class=\"c_i_img\"><img src=\"{{aircraft.img_url}}\" alt=\"{{aircraft.registration}}\"></div>\n                </td>\n                <td class=\"c_l_name\">{{aircraft.registration}}</td>\n                <td class=\"c_l_movement\">-</td>\n                <td class=\"c_l_status\">-</td>\n                <td class=\"c_l_action\">\n                  <div class=\"action_btns\">\n                    <a href=\"#\" class=\"edit_btn\" (click)=\"edit(aircraft);update=true\"><i class=\"fa fa-edit\"></i><span>Edit</span></a>\n                    <a href=\"#\" class=\"delete_btn\" (click)=\"delete(aircraft._id)\"><i class=\"fa fa-trash\"></i><span>Delete</span></a>\n                  </div>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n\n          <div class=\"modal\" id=\"add-aircraft\">\n              <div class=\"modal-background\"></div>\n              <div class=\"modal-card\">\n                <form>\n                  <header class=\"modal-card-head\">\n                    <p class=\"modal-card-title\" *ngIf=\"!update\">Add Aircraft</p>\n                    <p class=\"modal-card-title\" *ngIf=\"update\">Update Aircraft</p>\n                    <button class=\"delete\" aria-label=\"close\" (click)=\"close()\"></button>\n                  </header>\n                  <section class=\"modal-card-body\">\n                    <div class=\"field\">\n                      <label class=\"label\">Registration</label>\n                      <div class=\"control\">\n                        <input class=\"input\" type=\"text\" name=\"registration\" [(ngModel)]=\"registration\">\n                      </div>\n                    </div>\n                    <div class=\"field\">\n                      <label class=\"label\">Aircraft ID</label>\n                      <div class=\"control\">\n                        <input class=\"input\" type=\"text\" name=\"aircraftId\" [(ngModel)]=\"aircraftId\">\n                      </div>\n                    </div>\n  \n                    <div class=\"field\">\n                      <label class=\"label\">Photo</label>\n                      <div class=\"control\">\n                        <progress *ngIf=\"currentFileUpload\" class=\"progress is-primary\" value=\"{{progress.percentage}}\"\n                          max=\"100\"></progress>\n                        <div class=\"file has-name\">\n                          <label class=\"file-label\"> <input type=\"file\" class=\"file-input\" (change)=\"selectFile($event)\">\n                            <span class=\"file-cta\">\n                              <span class=\"file-icon\">\n                                <i class=\"fas fa-upload\"></i>\n                              </span>\n                              <span class=\"file-label\">\n                                Choose an image…\n                              </span>\n                            </span>\n                            <span class=\"file-name\">\n                              .jpg, .png, .gif\n                            </span>\n                          </label>\n                        </div>\n  \n                        <button class=\"button is-success\" [disabled]=\"!selectedFiles\" (click)=\"upload()\">Upload</button>\n                      </div>\n                    </div>\n  \n                    <div class=\"field\">\n                      <label class=\"label\">Max Take Off Weight</label>\n                      <div class=\"control\">\n                        <input class=\"input\" type=\"text\" [(ngModel)]=\"tow\" name=\"tow\">\n                      </div>\n                    </div>\n                    <div class=\"field\">\n                      <label class=\"label\">Max Fuel Capacity</label>\n                      <div class=\"control\">\n                        <input class=\"input\" type=\"text\" [(ngModel)]=\"fuel\" name=\"fuel\">\n                      </div>\n                    </div>\n                    <div class=\"field\">\n                      <label class=\"label\">Max PAX</label>\n                      <div class=\"control\">\n                        <input class=\"input\" type=\"text\" [(ngModel)]=\"pax\" name=\"pax\">\n                      </div>\n                    </div>\n                    <div class=\"field\">\n                      <label class=\"label\">Max Cargo</label>\n                      <div class=\"control\">\n                        <input class=\"input\" type=\"text\" [(ngModel)]=\"cargo\" name=\"cargo\">\n                      </div>\n                    </div>\n                    <div class=\"field\">\n                      <label class=\"label\">ICAO 24</label>\n                      <div class=\"control\">\n                        <input class=\"input\" type=\"text\" [(ngModel)]=\"icao24\" name=\"icao24\">\n                      </div>\n                    </div>\n                    <div class=\"field\">\n                      <label class=\"label\">Base Location</label>\n                      <div class=\"control\">\n                        <div class=\"select\">\n                          <select [(ngModel)]=\"base\" name=\"base\">\n                            <option *ngFor=\"let airport of airports\" [value]=\"airport.icao\">{{airport.icao}}\n                            </option>\n                          </select>\n                        </div>\n                      </div>\n                    </div>\n  \n  \n                  </section>\n                  <footer class=\"modal-card-foot\">\n                    <button class=\"button is-success\" id=\"addBtn\" (click)=\"addAircraft()\" *ngIf=\"!update\">Add</button>\n                    <button class=\"button is-success\" id=\"addBtn\" (click)=\"updateAircraft()\"\n                      *ngIf=\"update\">Update</button>\n                    <button class=\"button\" (click)=\"close()\">Cancel</button>\n                  </footer>\n                </form>\n              </div>\n            </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/aircrafts/aircrafts.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/admin/aircrafts/aircrafts.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".aircraft-img {\n  width: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZXgvRG9jdW1lbnRzL0dpdEh1Yi9mbGlnaHRvcHMvc3JjL2FwcC9hZG1pbi9haXJjcmFmdHMvYWlyY3JhZnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWlyY3JhZnRzL2FpcmNyYWZ0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5haXJjcmFmdC1pbWcge1xuICAgIHdpZHRoOiA1MHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin/aircrafts/aircrafts.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/aircrafts/aircrafts.component.ts ***!
  \********************************************************/
/*! exports provided: AircraftsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AircraftsComponent", function() { return AircraftsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin.service */ "./src/app/admin/admin.service.ts");
/* harmony import */ var _fileupload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fileupload */ "./src/app/admin/fileupload.ts");
/* harmony import */ var bulma_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bulma-toast */ "./node_modules/bulma-toast/dist/bulma-toast.min.js");
/* harmony import */ var bulma_toast__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bulma_toast__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AircraftsComponent = /** @class */ (function () {
    function AircraftsComponent(adminService) {
        this.adminService = adminService;
        this.progress = { percentage: 0 };
        this.update = false;
        this.responses = [];
    }
    AircraftsComponent.prototype.ngOnInit = function () {
        this.doRun = true;
        jquery__WEBPACK_IMPORTED_MODULE_1__('#btn-add-aircraft').on('click', function () {
            jquery__WEBPACK_IMPORTED_MODULE_1__('#add-aircraft').addClass('is-active');
        });
        jquery__WEBPACK_IMPORTED_MODULE_1__('.delete').on('click', function () {
            jquery__WEBPACK_IMPORTED_MODULE_1__('#add-aircraft').removeClass('is-active');
        });
        this.getAirports();
        this.getAircrafts();
    };
    AircraftsComponent.prototype.selectFile = function (event) {
        this.selectedFiles = event.target.files;
    };
    AircraftsComponent.prototype.close = function () {
        this.update = false;
        jquery__WEBPACK_IMPORTED_MODULE_1__('#add-aircraft').removeClass('is-active');
        this.registration = '';
        this.image = '';
        this.tow = '';
        this.fuel = '';
        this.pax = '';
        this.cargo = '';
        this.icao24 = '';
        this.base = '';
        this.aircraftId = '';
    };
    AircraftsComponent.prototype.upload = function () {
        var _this = this;
        var file = this.selectedFiles.item(0);
        this.selectedFiles = undefined;
        this.currentFileUpload = new _fileupload__WEBPACK_IMPORTED_MODULE_3__["FileUpload"](file);
        this.adminService.pushFileToStorage(this.currentFileUpload, this.progress).subscribe(function (data) {
            _this.image = data.data;
            console.log('file uploaded ', _this.image);
        });
    };
    AircraftsComponent.prototype.getAircrafts = function () {
        var _this = this;
        this.adminService.getAircrafts().subscribe(function (data) {
            _this.aircrafts = data.data;
            console.log('aircrafts ', _this.aircrafts);
        });
    };
    AircraftsComponent.prototype.getAirports = function () {
        var _this = this;
        this.adminService.getAirports(1, 20).subscribe(function (data) {
            _this.airports = data.data;
            console.log('airports ', _this.airports);
        });
    };
    AircraftsComponent.prototype.addAircraft = function () {
        console.log('add start');
        jquery__WEBPACK_IMPORTED_MODULE_1__('#addBtn').addClass('is-loading');
        if (this.doRun === true) {
            // this.adminService.addAircraft(this.registration, this.aircraftId, this.image, this.tow, this.fuel, this.pax, this.cargo, this.icao24, this.base)
            //   .subscribe(data => {
            //     console.log('Aircraft Added ', data)
            //     this.getAircrafts();
            //     $('form').trigger("reset");
            //     $('#addBtn').removeClass('is-loading');
            //     // $('#add-aircraft').removeClass('is-active');
            //     this.doRun = false
            //   },
            //     error => {
            //       $('#addBtn').removeClass('is-loading');
            //       console.log(error)
            //     })
        }
    };
    AircraftsComponent.prototype.updateAircraft = function () {
        var _this = this;
        console.log('update start');
        this.adminService.updateAircraft(this.id, this.registration, this.aircraftId, this.image, this.tow, this.fuel, this.pax, this.cargo, this.icao24, this.base)
            .subscribe(function (data) {
            console.log('Crew Updated ', data);
            _this.getAircrafts();
            Object(bulma_toast__WEBPACK_IMPORTED_MODULE_4__["toast"])({
                message: "Aircraft Updated",
                type: "is-success",
                dismissible: true,
                pauseOnHover: true
            });
            jquery__WEBPACK_IMPORTED_MODULE_1__('form').trigger("reset");
            jquery__WEBPACK_IMPORTED_MODULE_1__('#addBtn').removeClass('is-loading');
            jquery__WEBPACK_IMPORTED_MODULE_1__('#add-aircraft').removeClass('is-active');
        });
    };
    AircraftsComponent.prototype.delete = function (aircraft) {
        var _this = this;
        console.log('update start');
        this.adminService.deleteCrew(aircraft)
            .subscribe(function (data) {
            if (data.data === "deleted") {
                console.log('Crew Deleted ', data);
                _this.getAircrafts();
                Object(bulma_toast__WEBPACK_IMPORTED_MODULE_4__["toast"])({
                    message: "Aircraft Deleted",
                    type: "is-success",
                    dismissible: true,
                    pauseOnHover: true
                });
            }
        });
    };
    AircraftsComponent.prototype.edit = function (aircraft) {
        this.id = aircraft._id;
        this.registration = aircraft.registration;
        this.tow = aircraft.tow;
        this.aircraftId = aircraft.aircraftId;
        this.image = aircraft.img_url;
        this.fuel = aircraft.fuel;
        this.pax = aircraft.pax;
        this.cargo = aircraft.cargo;
        this.icao24 = aircraft.icao24;
        this.base = aircraft.base;
        jquery__WEBPACK_IMPORTED_MODULE_1__('#add-aircraft').addClass('is-active');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], AircraftsComponent.prototype, "responses", void 0);
    AircraftsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-aircrafts',
            template: __webpack_require__(/*! ./aircrafts.component.html */ "./src/app/admin/aircrafts/aircrafts.component.html"),
            styles: [__webpack_require__(/*! ./aircrafts.component.scss */ "./src/app/admin/aircrafts/aircrafts.component.scss")]
        }),
        __metadata("design:paramtypes", [_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]])
    ], AircraftsComponent);
    return AircraftsComponent;
}());



/***/ }),

/***/ "./src/app/admin/airport/airport.component.html":
/*!******************************************************!*\
  !*** ./src/app/admin/airport/airport.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container\">\n  <div class=\"columns\">\n    <div class=\"column is-3\">\n      <app-side-nav></app-side-nav>\n    </div>\n    <div class=\"column is-9\">\n      <h3 class=\"title is-pulled-left\">Airport Handlers</h3>\n      <button class=\"button is-primary is-outlined is-pulled-right\" routerLink=\"/admin/new-handler/{{id}}\">Add Handler</button>\n      <table class=\"table is-fullwidth\">\n        <thead>\n          <th></th>\n          <th>Name</th>\n          <th>ICAO</th>\n          <th>Local Phone</th>\n          <th>Local Email</th>\n          <th>Type</th>\n          <th>Items</th>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let handler of handlers\">\n            <td>\n                <img src=\"{{handler.logo}}\" class=\"aircraft-img\" alt=\"\">\n            </td>\n            <td>\n                {{handler.name}}\n            </td>\n            <td>{{handler.icao}}</td>\n            <td>{{handler.local_telephone}}</td>\n            <td>{{handler.local_email}}</td>\n            <td>{{handler.type}}</td>\n            <td>{{handler.items}}</td>\n          </tr>\n        </tbody>\n      </table>\n      <app-chat></app-chat>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/airport/airport.component.scss":
/*!******************************************************!*\
  !*** ./src/app/admin/airport/airport.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FpcnBvcnQvYWlycG9ydC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/airport/airport.component.ts":
/*!****************************************************!*\
  !*** ./src/app/admin/airport/airport.component.ts ***!
  \****************************************************/
/*! exports provided: AirportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirportComponent", function() { return AirportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../admin.service */ "./src/app/admin/admin.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AirportComponent = /** @class */ (function () {
    function AirportComponent(adminService, route) {
        this.adminService = adminService;
        this.route = route;
    }
    AirportComponent.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.paramMap.get("id");
        this.getHandlers(this.id);
    };
    AirportComponent.prototype.getHandlers = function (airport) {
        var _this = this;
        this.adminService.getHandler(airport).subscribe(function (data) {
            _this.handlers = data.data;
            console.log('handlers ', _this.handlers);
        });
    };
    AirportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-airport',
            template: __webpack_require__(/*! ./airport.component.html */ "./src/app/admin/airport/airport.component.html"),
            styles: [__webpack_require__(/*! ./airport.component.scss */ "./src/app/admin/airport/airport.component.scss")]
        }),
        __metadata("design:paramtypes", [_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], AirportComponent);
    return AirportComponent;
}());



/***/ }),

/***/ "./src/app/admin/airports/airports.component.html":
/*!********************************************************!*\
  !*** ./src/app/admin/airports/airports.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container-fluid page-body-wrapper\">\n  <app-side-nav></app-side-nav>\n  <!-- Main Content -->\n  <div class=\"main-panel\">\n    <div class=\"content-wrapper\">\n      <div class=\"page_header p_header_two d-flex\">\n        <h4><strong>Airports Overview</strong></h4>\n        <div class=\"ml-auto\">\n          <a href=\"#\" class=\"btn bg_blue\">Add Airport</a>\n        </div>\n      </div>\n      <div class=\"block table_block\">\n        <div class=\"table-responsive\">\n          <table class=\"table\">\n            <thead>\n              <tr>\n                <th class=\"c_l_name\">Name</th>\n                <th class=\"c_l_movement\">ICAO</th>\n                <th class=\"c_l_action\">Actions</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let airport of airports\">\n                <td class=\"c_l_name\">\n                  <!-- <a routerLink=\"/admin/airport/{{airport.icao}}\"> -->\n                    {{airport.name}}\n                  <!-- </a> -->\n                </td>\n                <td class=\"c_l_movement\">{{airport.icao}}</td>\n                <td class=\"c_l_action\">\n                  <div class=\"action_btns\">\n                    <a class=\"edit_btn\" routerLink=\"/admin/edit-airport/{{airport.icao}}\"><i\n                        class=\"fa fa-edit\"></i><span>Edit</span></a>\n                    <a href=\"#\" class=\"delete_btn\" (click)=\"delete(airport._id)\"><i\n                        class=\"fa fa-trash\"></i><span>Delete</span></a>\n                  </div>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n      <a (click)=\"prev()\" class=\"is-link\" *ngIf=\"pageNo > 1\">&lt;&lt;&lt; Previous</a> -\n      <a (click)=\"next()\" class=\"is-link\">Next &gt;&gt;&gt;</a>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/airports/airports.component.scss":
/*!********************************************************!*\
  !*** ./src/app/admin/airports/airports.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".aircraft-img {\n  width: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZXgvRG9jdW1lbnRzL0dpdEh1Yi9mbGlnaHRvcHMvc3JjL2FwcC9hZG1pbi9haXJwb3J0cy9haXJwb3J0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FpcnBvcnRzL2FpcnBvcnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFpcmNyYWZ0LWltZyB7XG4gICAgd2lkdGg6IDUwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/admin/airports/airports.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin/airports/airports.component.ts ***!
  \******************************************************/
/*! exports provided: AirportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirportsComponent", function() { return AirportsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin.service */ "./src/app/admin/admin.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var bulma_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bulma-toast */ "./node_modules/bulma-toast/dist/bulma-toast.min.js");
/* harmony import */ var bulma_toast__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bulma_toast__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AirportsComponent = /** @class */ (function () {
    function AirportsComponent(adminService, router, route) {
        this.adminService = adminService;
        this.router = router;
        this.route = route;
        this.responses = [];
    }
    AirportsComponent.prototype.ngOnInit = function () {
        this.doRun = true;
        this.pageNo = this.route.snapshot.paramMap.get("pageNo");
        jquery__WEBPACK_IMPORTED_MODULE_1__('#btn-add-aircraft').on('click', function () {
            jquery__WEBPACK_IMPORTED_MODULE_1__('#add-aircraft').addClass('is-active');
        });
        jquery__WEBPACK_IMPORTED_MODULE_1__('.delete').on('click', function () {
            jquery__WEBPACK_IMPORTED_MODULE_1__('#add-aircraft').removeClass('is-active');
        });
        this.getAirports();
    };
    AirportsComponent.prototype.getAirports = function () {
        var _this = this;
        this.adminService.getAirports(this.pageNo, 20).subscribe(function (data) {
            _this.airports = data.data;
            console.log('airports ', _this.airports);
        });
    };
    AirportsComponent.prototype.next = function () {
        this.pageNo = parseInt(this.pageNo) + 1;
        console.log(this.pageNo);
        this.getAirports();
    };
    AirportsComponent.prototype.prev = function () {
        this.pageNo = parseInt(this.pageNo) - 1;
        console.log(this.pageNo);
        this.getAirports();
    };
    AirportsComponent.prototype.navigate = function (link) {
        this.router.navigate([link]);
    };
    AirportsComponent.prototype.delete = function (aircraft) {
        var _this = this;
        console.log('update start');
        this.adminService.deleteCrew(aircraft)
            .subscribe(function (data) {
            if (data.data === "deleted") {
                console.log('Airport Deleted ', data);
                _this.getAirports();
                Object(bulma_toast__WEBPACK_IMPORTED_MODULE_4__["toast"])({
                    message: "Airport Deleted",
                    type: "is-success",
                    dismissible: true,
                    pauseOnHover: true
                });
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], AirportsComponent.prototype, "responses", void 0);
    AirportsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-airports',
            template: __webpack_require__(/*! ./airports.component.html */ "./src/app/admin/airports/airports.component.html"),
            styles: [__webpack_require__(/*! ./airports.component.scss */ "./src/app/admin/airports/airports.component.scss")]
        }),
        __metadata("design:paramtypes", [_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], AirportsComponent);
    return AirportsComponent;
}());



/***/ }),

/***/ "./src/app/admin/chat/chat.component.html":
/*!************************************************!*\
  !*** ./src/app/admin/chat/chat.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"notice_board operations_notice_board\">\n  <div class=\"n_b_head\">\n    <strong>Operations Notice Board</strong>\n    <!-- <span class=\"notice_count\">5</span> -->\n    <a (click)=\"hideOpsChat()\" class=\"n_b_closer\">\n      <i class=\"flaticon-close\"></i>\n      <i class=\"flaticon-arrow-down-sign-to-navigate\"></i>\n    </a>\n  </div>\n  <div class=\"n_b_main\">\n    <div *ngFor=\"let c of opsChats\">\n      <div class=\"m_div m_sender\" *ngIf=\"c.email!==user.email; else rightchat\">\n        <div class=\"m_user_info d-flex\">\n          <span>{{c.name}}</span>\n        </div>\n        <div class=\"m_body\">{{c.message}}</div>\n        <div class=\"m_time\">{{ c.updated_at | date: 'medium' }}</div>\n      </div>\n      <ng-template #rightchat>\n        <div class=\"m_div m_receiver\">\n          <div class=\"m_body\">{{ c.message }}</div>\n          <div class=\"m_time\">{{ c.updated_at | date: 'medium' }}</div>\n        </div>\n      </ng-template>\n      <ng-template #movementCard>\n        <div class=\"m_body\">\n          <b>EDDS</b> handling quote recieved.\n          <div class=\"m_o_destinations\">EDDS <i class=\"flaticon-right-arrow\"></i> EDLV</div>\n          <div class=\"text-center my-2\">11/06/2019, 13:20:00</div>\n          Pickup at 12:30 from EDDS and drop at EDLV as soon as possible. Contains Explosives.Beware fire.<br>\n          <div class=\"text-center my-2\">View Items <b>| $2495</b></div>\n          <div class=\"m_actions\">\n            <a href=\"#\" class=\"o_accept\">Accept</a>\n            <a href=\"#\" class=\"o_reject\">Reject</a>\n          </div>\n        </div>\n      </ng-template>\n    </div>\n  </div>\n  <div class=\"n_b_message_box\">\n    <input type=\"text\" placeholder=\"Add message here\" class=\"message_input\" [(ngModel)]=\"opsMsg\">\n    <button type=\"button\" (click)=\"sendOpsMessage()\" class=\"send_msg\"><i class=\"flaticon-sent-mail\"></i></button>\n  </div>\n</div>\n<div class=\"notice_board crew_notice_board\">\n  <div class=\"n_b_head\">\n    <strong>Crew Notice Board</strong>\n    <!-- <span class=\"notice_count\">7</span> -->\n    <a (click)=\"hideCrewChat()\" class=\"n_b_closer\">\n      <i class=\"flaticon-close\"></i>\n      <i class=\"flaticon-arrow-down-sign-to-navigate\"></i>\n    </a>\n  </div>\n  <div class=\"n_b_main\">\n    <div *ngFor=\"let c of crewChats\">\n      <div class=\"m_div m_sender\" *ngIf=\"c.email!==user.email; else rightchat\">\n        <div class=\"m_user_info d-flex\">\n          <img src=\"../../../assets/images/user.png\" alt=\"user\">\n          <span>{{c.name}}</span>\n        </div>\n        <div class=\"m_body\">{{c.message}}</div>\n        <div class=\"m_time\">{{ c.updated_at | date: 'medium' }}</div>\n      </div>\n\n      <ng-template #rightchat>\n        <div class=\"m_div m_receiver\">\n          <div class=\"m_body\">{{ c.message }}</div>\n          <div class=\"m_time\">{{ c.updated_at | date: 'medium' }}</div>\n        </div>\n      </ng-template>\n      <ng-template #movementCard>\n        <div class=\"m_body\">\n          <b>EDDS</b> handling quote recieved.\n          <div class=\"m_o_destinations\">EDDS <i class=\"flaticon-right-arrow\"></i> EDLV</div>\n          <div class=\"text-center my-2\">11/06/2019, 13:20:00</div>\n          Pickup at 12:30 from EDDS and drop at EDLV as soon as possible. Contains Explosives.Beware fire.<br>\n          <div class=\"text-center my-2\">View Items <b>| $2495</b></div>\n          <div class=\"m_actions\">\n            <a href=\"#\" class=\"o_accept\">Accept</a>\n            <a href=\"#\" class=\"o_reject\">Reject</a>\n          </div>\n        </div>\n      </ng-template>\n    </div>\n  </div>\n\n  <div class=\"n_b_message_box\">\n    <input type=\"text\" placeholder=\"Add message here\" class=\"message_input\" [(ngModel)]=\"crewMsg\">\n    <button type=\"button\" (click)=\"sendCrewMessage()\" class=\"send_msg\"><i class=\"flaticon-sent-mail\"></i></button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/chat/chat.component.scss":
/*!************************************************!*\
  !*** ./src/app/admin/chat/chat.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#chatCon {\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  background: #ffffff; }\n\n#chatBtn {\n  position: fixed;\n  bottom: 15px;\n  right: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZXgvRG9jdW1lbnRzL0dpdEh1Yi9mbGlnaHRvcHMvc3JjL2FwcC9hZG1pbi9jaGF0L2NoYXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFlO0VBQ2YsU0FBUztFQUNULFFBQVE7RUFDUixtQkFDSixFQUFBOztBQUNBO0VBQ0ksZUFBZTtFQUNmLFlBQVk7RUFDWixXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9jaGF0L2NoYXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY2hhdENvbiB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmXG59XG4jY2hhdEJ0biB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMTVweDtcbiAgICByaWdodDogMTVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin/chat/chat.component.ts":
/*!**********************************************!*\
  !*** ./src/app/admin/chat/chat.component.ts ***!
  \**********************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../admin.service */ "./src/app/admin/admin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChatComponent = /** @class */ (function () {
    function ChatComponent(authService, adminService, router) {
        this.authService = authService;
        this.adminService = adminService;
        this.router = router;
        this.joinned = false;
        this.newUser = { email: '', room: '' };
        this.msgData = { room: '', email: '', message: '' };
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_3__('http://104.238.148.111:4000');
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.me().subscribe(function (userL) {
            _this.user = userL.user;
            _this.opsChats = [];
            _this.crewChats = [];
            if (_this.user !== null) {
                _this.getOpsChat();
                _this.getCrewChat();
                _this.scrollToBottom();
            }
            _this.socket.on('new-message', function (data) {
                console.log('new message', data);
                var user = JSON.parse(localStorage.getItem('user'));
                if (data.message.data.room === 'operations') {
                    this.opsChats.push(data.message);
                    this.scrollToBottom();
                }
                else {
                    this.crewChats.push(data.message);
                    this.scrollToBottom();
                }
            }.bind(_this));
        });
    };
    ChatComponent.prototype.sendOpsMessage = function () {
        var _this = this;
        var msgData = {
            room: 'operations',
            name: this.user.fullname,
            email: this.user.email,
            message: this.opsMsg
        };
        this.adminService.saveChat(msgData).subscribe(function (data) {
            console.log('savee ', data);
            _this.socket.emit('save-message', data);
            _this.opsMsg = '';
        });
    };
    ChatComponent.prototype.sendCrewMessage = function () {
        var _this = this;
        var msgData = {
            room: 'crew',
            name: this.user.fullname,
            email: this.user.email,
            message: this.crewMsg
        };
        this.adminService.saveChat(msgData).subscribe(function (data) {
            console.log('savee ', data);
            _this.socket.emit('save-message', data);
            _this.crewMsg = '';
        });
    };
    ChatComponent.prototype.getChatByRoom = function (room) {
        var _this = this;
        this.adminService.getChatByRoom(room).subscribe(function (data) {
            _this.chats = data.data;
            console.log('chats ', _this.chats);
        });
    };
    ChatComponent.prototype.getOpsChat = function () {
        var _this = this;
        this.adminService.getChatByRoom('operations').subscribe(function (data) {
            _this.opsChats = data.data;
            console.log('chats ', _this.opsChats);
        });
    };
    ChatComponent.prototype.getCrewChat = function () {
        var _this = this;
        this.adminService.getChatByRoom('crew').subscribe(function (data) {
            _this.crewChats = data.data;
            console.log('chats ', _this.crewChats);
        });
    };
    ChatComponent.prototype.hideOpsChat = function () {
        jquery__WEBPACK_IMPORTED_MODULE_4__('.operations_notice_board').toggleClass('down');
    };
    ChatComponent.prototype.hideCrewChat = function () {
        jquery__WEBPACK_IMPORTED_MODULE_4__('.crew_notice_board').toggleClass('down');
    };
    ChatComponent.prototype.showChat = function () {
        jquery__WEBPACK_IMPORTED_MODULE_4__('#chatCon').removeClass('is-hidden');
        jquery__WEBPACK_IMPORTED_MODULE_4__('#chatBtn').addClass('is-hidden');
    };
    ChatComponent.prototype.ngAfterViewChecked = function () {
        this.scrollToBottom();
    };
    ChatComponent.prototype.scrollToBottom = function () {
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        }
        catch (err) { }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('scrollMe'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ChatComponent.prototype, "myScrollContainer", void 0);
    ChatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/admin/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.scss */ "./src/app/admin/chat/chat.component.scss")]
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/admin/crew/crew.component.html":
/*!************************************************!*\
  !*** ./src/app/admin/crew/crew.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container-fluid page-body-wrapper\">\n  <app-side-nav></app-side-nav>\n  <!-- Main Content -->\n  <div class=\"main-panel\">\n    <div class=\"content-wrapper\">\n      <div class=\"crew_page_header\" *ngIf=\"crew\">\n        <div class=\"banner_img\">\n          <img src=\"../../../assets/images/crew-banner.jpg\" alt=\"crew member\">\n        </div>\n        <div class=\"c_member_info\">\n          <div class=\"crew_member_img\">\n            <img src=\"{{crew.img_url}}\" alt=\"crew-member\">\n          </div>\n          <div class=\"c_m_name\">\n            <h4>{{crew.name}}</h4>\n            <span class=\"c_position\">{{crew.occupation}}</span>\n          </div>\n          <a href=\"#\" class=\"btn send_msg ml-auto\">Send Message</a>\n        </div>\n      </div>\n      <div class=\"row\">\n\n        <!-- Main Panel left -->\n        <div class=\"col-xl-7 main_panel_left\" *ngIf=\"crew\">\n\n\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"block seat_car_block\">\n                <div class=\"block_head\">\n                  <h3>Upcoming Movements</h3>\n                </div>\n                <ul class=\"movement_list\">\n                  <li *ngFor=\"let schedule of upMove; let i=index\">\n                    <div class=\"m_i_destinations\">\n                      <span>{{schedule.departure_airport}}</span><i\n                        class=\"flaticon-right-arrow\"></i><span>{{schedule.arrival_airport}}</span>\n                    </div>\n                    <div class=\"m_i_date\">{{ schedule.departuretime*1000 | date : \"short\" }}</div>\n                    <a href=\"#\" class=\"btn btn-small-bordered\">View</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"block document_block\">\n                <div class=\"block_head\">\n                  <h3>Previous Movements</h3>\n                </div>\n                <ul class=\"movement_list\">\n                  <li *ngFor=\"let schedule of pastMove; let i=index\">\n                    <div class=\"m_i_destinations\">\n                      <span>{{schedule.departure_airport}}</span><i\n                        class=\"flaticon-right-arrow\"></i><span>{{schedule.arrival_airport}}</span>\n                    </div>\n                    <div class=\"m_i_date\">{{ schedule.departuretime*1000 | date : \"short\" }}</div>\n                    <a href=\"#\" class=\"btn btn-small-bordered\">View</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n          <div class=\"modal\">\n            <div class=\"modal-background\"></div>\n            <div class=\"modal-card\">\n              <header class=\"modal-card-head\">\n                <p class=\"modal-card-title\">Modal title</p>\n                <button class=\"delete\" aria-label=\"close\"></button>\n              </header>\n              <section class=\"modal-card-body\">\n                <div>\n                  Event:\n                  <pre>{{ modalData?.event | json }}</pre>\n                </div>\n                <!-- Content ... -->\n              </section>\n              <footer class=\"modal-card-foot\">\n                <button class=\"button is-success\">Save changes</button>\n                <button class=\"button\">Cancel</button>\n              </footer>\n            </div>\n          </div>\n\n          <div *ngIf=\"events.length != 0\" class=\"block full_calender_wrap\">\n            <!-- <div id=\"calendar\"></div> -->\n            <full-calendar defaultView=\"dayGridMonth\" [events]=\"events\" [header]=\"calendarHeaders\" navLinks=\"true\"\n              eventLimit=\"true\" [plugins]=\"calendarPlugins\"></full-calendar>\n          </div>\n\n        </div>\n\n        <div class=\"col-xl-5 main_panel_right\">\n\n            <div class=\"row\">\n              <div class=\"col-xl-12 col-lg-6 col-md-6\">\n                  <div class=\"block document_block\">\n                    <div class=\"block_head\">\n                      <h3>Documents</h3>\n                    </div>\n                    <ul class=\"documents_list\">\n                      <li><a href=\"#\">Contact Information <i class=\"flaticon-download\"></i></a></li>\n                      <li><a href=\"#\">Contact Information <i class=\"flaticon-download\"></i></a></li>\n                      <li><a href=\"#\">Contact Information <i class=\"flaticon-download\"></i></a></li>\n                      <li><a href=\"#\">Contact Information <i class=\"flaticon-download\"></i></a></li>\n                    </ul>\n                  </div>\n                </div>\n                \n            </div>\n\n          </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/crew/crew.component.scss":
/*!************************************************!*\
  !*** ./src/app/admin/crew/crew.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NyZXcvY3Jldy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/crew/crew.component.ts":
/*!**********************************************!*\
  !*** ./src/app/admin/crew/crew.component.ts ***!
  \**********************************************/
/*! exports provided: CrewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrewComponent", function() { return CrewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin.service */ "./src/app/admin/admin.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fullcalendar/daygrid */ "./node_modules/@fullcalendar/daygrid/main.js");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fullcalendar/timegrid */ "./node_modules/@fullcalendar/timegrid/main.js");
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fullcalendar_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fullcalendar/list */ "./node_modules/@fullcalendar/list/main.js");
/* harmony import */ var _fullcalendar_list__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_list__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var colors = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
    }
};
var CrewComponent = /** @class */ (function () {
    function CrewComponent(adminService, route) {
        this.adminService = adminService;
        this.route = route;
        this.events = [];
        this.pastMove = [];
        this.upMove = [];
    }
    CrewComponent.prototype.ngOnInit = function () {
        this.doRun = true;
        this.currentTime = new Date().getTime();
        this.calendarPlugins = [_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_4___default.a, _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_5___default.a, _fullcalendar_list__WEBPACK_IMPORTED_MODULE_6___default.a];
        this.calendarHeaders = {
            right: 'prev,title,next',
            center: '',
            left: 'dayGridMonth,dayGridWeek'
        };
        this.status = 'On Ground';
        console.log('click');
        jquery__WEBPACK_IMPORTED_MODULE_1__('#btn-add-licence').on('click', function () {
            console.log('click');
            jquery__WEBPACK_IMPORTED_MODULE_1__('#add-licence').addClass('is-active');
        });
        jquery__WEBPACK_IMPORTED_MODULE_1__('.delete').on('click', function () {
            jquery__WEBPACK_IMPORTED_MODULE_1__('#add-licence').removeClass('is-active');
        });
        this.id = this.route.snapshot.paramMap.get('id');
        console.log(this.id);
        this.getCrew();
        this.getLicences();
    };
    CrewComponent.prototype.showAddLicence = function () {
        jquery__WEBPACK_IMPORTED_MODULE_1__('#add-licence').addClass('is-active');
    };
    CrewComponent.prototype.hideAddLicence = function () {
        jquery__WEBPACK_IMPORTED_MODULE_1__('#add-licence').removeClass('is-active');
    };
    CrewComponent.prototype.getCrew = function () {
        var _this = this;
        this.adminService.getCrew(this.id).subscribe(function (data) {
            _this.crew = data.data;
            if (_this.crew.occupation === 'OPS') {
                _this.getOPSSchedule();
            }
            if (_this.crew.occupation === 'PIC') {
                _this.getPICSchedule();
            }
            if (_this.crew.occupation === 'FO') {
                _this.getFOSchedule();
            }
            console.log('crew ', _this.crew);
        });
    };
    CrewComponent.prototype.getLicences = function () {
        var _this = this;
        this.adminService.getLicences(this.id).subscribe(function (data) {
            _this.licences = data.data;
            console.log('licences ', _this.licences);
        });
    };
    CrewComponent.prototype.getFOSchedule = function () {
        var _this = this;
        this.adminService.getFOSchedule(this.id).subscribe(function (data) {
            _this.schedule = data.data;
            _this.schedule.forEach(function (element) {
                if (_this.status === 'On Ground') {
                    if (element.departuretime * 1000 < _this.currentTime && element.arrivaltime > _this.currentTime) {
                        _this.status = 'In Progress';
                    }
                }
                if (element.departuretime * 1000 < _this.currentTime) {
                    if (_this.pastMove.length < 4) {
                        _this.pastMove.push(element);
                    }
                }
                else {
                    if (_this.upMove.length < 4) {
                        _this.upMove.push(element);
                    }
                }
                _this.addEvent(element.departure_airport + ' ->' + element.arrival_airport, element.departuretime, element.arrivaltime);
            });
            console.log('schedule ', _this.schedule);
        });
    };
    CrewComponent.prototype.getOPSSchedule = function () {
        var _this = this;
        this.adminService.getOPSSchedule(this.id).subscribe(function (data) {
            _this.schedule = data.data;
            _this.schedule.forEach(function (element) {
                if (_this.status === 'On Ground') {
                    if (element.departuretime * 1000 < _this.currentTime && element.arrivaltime > _this.currentTime) {
                        _this.status = 'In Progress';
                    }
                }
                if (element.departuretime * 1000 < _this.currentTime) {
                    if (_this.pastMove.length < 4) {
                        _this.pastMove.push(element);
                    }
                }
                else {
                    if (_this.upMove.length < 4) {
                        _this.upMove.push(element);
                    }
                }
                _this.addEvent(element.departure_airport + ' -> ' + element.arrival_airport, element.departuretime, element.arrivaltime);
            });
            console.log('schedule ', _this.schedule);
        });
    };
    CrewComponent.prototype.getPICSchedule = function () {
        var _this = this;
        this.adminService.getPICSchedule(this.id).subscribe(function (data) {
            _this.schedule = data.data;
            _this.schedule.forEach(function (element) {
                if (_this.status === 'On Ground') {
                    if (element.departuretime * 1000 < _this.currentTime && element.arrivaltime > _this.currentTime) {
                        _this.status = 'In Progress';
                    }
                }
                if (element.departuretime * 1000 < _this.currentTime) {
                    if (_this.pastMove.length < 4) {
                        _this.pastMove.push(element);
                    }
                }
                else {
                    if (_this.upMove.length < 4) {
                        _this.upMove.push(element);
                    }
                }
                _this.addEvent(element.departure_airport + ' -> ' + element.arrival_airport, element.departuretime, element.arrivaltime);
            });
            console.log('schedule ', _this.schedule);
        });
    };
    CrewComponent.prototype.addLicence = function () {
        var _this = this;
        console.log('add start');
        jquery__WEBPACK_IMPORTED_MODULE_1__('#addBtn').addClass('is-loading');
        if (this.doRun === true) {
            this.adminService.addLicence(this.id, this.licence, this.expiry)
                .subscribe(function (data) {
                console.log('Licence Added ', data);
                _this.getLicences();
                jquery__WEBPACK_IMPORTED_MODULE_1__('form').trigger('reset');
                jquery__WEBPACK_IMPORTED_MODULE_1__('#addBtn').removeClass('is-loading');
                // $('#add-licence').removeClass('is-active');
                _this.doRun = false;
            }, function (error) {
                jquery__WEBPACK_IMPORTED_MODULE_1__('#addBtn').removeClass('is-loading');
                console.log(error);
            });
        }
    };
    CrewComponent.prototype.addEvent = function (title, start, end) {
        this.events.push({
            title: title + ' (' + new Date(start * 1000) + ' - ' + new Date(end * 1000) + ')',
            start: new Date(start * 1000),
            end: new Date(end * 1000),
            color: colors.red,
            draggable: false,
            resizable: {
                beforeStart: true,
                afterEnd: true
            }
        });
    };
    CrewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-crew',
            template: __webpack_require__(/*! ./crew.component.html */ "./src/app/admin/crew/crew.component.html"),
            styles: [__webpack_require__(/*! ./crew.component.scss */ "./src/app/admin/crew/crew.component.scss")]
        }),
        __metadata("design:paramtypes", [_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], CrewComponent);
    return CrewComponent;
}());



/***/ }),

/***/ "./src/app/admin/crews/crews.component.html":
/*!**************************************************!*\
  !*** ./src/app/admin/crews/crews.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container-fluid page-body-wrapper\">\n  <app-side-nav></app-side-nav>\n  <!-- Main Content -->\n  <div class=\"main-panel\">\n    <div class=\"content-wrapper\">\n\n      <div class=\"page_header p_header_two d-flex\">\n        <h4><strong>Crews</strong></h4>\n        <div class=\"ml-auto\">\n          <a href=\"#\" class=\"btn bg_blue\">Add Crew</a>\n        </div>\n      </div>\n\n      <div class=\"block table_block\">\n        <div class=\"table-responsive\">\n          <table class=\"table\">\n            <thead>\n              <tr>\n                <th class=\"c_l_img\"></th>\n                <th class=\"c_l_name\">Name</th>\n                <th class=\"c_l_movement\">Upcoming Movement</th>\n                <th class=\"c_l_status\">Current Status</th>\n                <th class=\"c_l_action\">Actions</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let crew of crews\">\n                <td class=\"c_l_img\">\n                  <div class=\"c_i_img\"><img src=\"{{crew.img_url}}\" alt=\"{{crew.name}}\"></div>\n                </td>\n                <td class=\"c_l_name\">\n                  <a routerLink=\"/admin/crew/{{crew._id}}\">\n                    {{crew.name}}\n                  </a>\n                </td>\n                <td class=\"c_l_movement\">-</td>\n                <td class=\"c_l_status\">On-Duty</td>\n                <td class=\"c_l_action\">\n                  <div class=\"action_btns\">\n                    <a href=\"#\" class=\"edit_btn\"><i class=\"fa fa-edit\"\n                        (click)=\"edit(crew);update=true\"></i><span>Edit</span></a>\n                    <a href=\"#\" class=\"delete_btn\"><i class=\"fa fa-trash\"\n                        (click)=\"deleteCrew(crew._id)\"></i><span>Delete</span></a>\n                  </div>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n          <div class=\"modal\" id=\"add-crew\">\n            <div class=\"modal-background\"></div>\n            <div class=\"modal-card\">\n              <form>\n                <header class=\"modal-card-head\">\n                  <p class=\"modal-card-title\" *ngIf=\"!update\">Add Crew Member</p>\n                  <p class=\"modal-card-title\" *ngIf=\"update\">Update Crew Member</p>\n                  <button class=\"delete\" aria-label=\"close\" (click)=\"close()\"></button>\n                </header>\n                <section class=\"modal-card-body\">\n                  <div class=\"field\">\n                    <label class=\"label\">Name</label>\n                    <div class=\"control\">\n                      <input class=\"input\" type=\"text\" name=\"name\" [(ngModel)]=\"name\">\n                    </div>\n                  </div>\n                  <div class=\"columns\">\n                    <div class=\"column is-8\">\n                      <div class=\"field\">\n                        <label class=\"label\">Photo</label>\n                        <div class=\"control\">\n                          <progress *ngIf=\"currentFileUpload\" class=\"progress is-primary\"\n                            value=\"{{progress.percentage}}\" max=\"100\"></progress>\n                          <div class=\"file has-name\">\n                            <label class=\"file-label\"> <input type=\"file\" class=\"file-input\"\n                                (change)=\"selectFile($event)\">\n                              <span class=\"file-cta\">\n                                <span class=\"file-icon\">\n                                  <i class=\"fas fa-upload\"></i>\n                                </span>\n                                <span class=\"file-label\">\n                                  Choose an image…\n                                </span>\n                              </span>\n                              <span class=\"file-name\">\n                                .jpg, .png, .gif\n                              </span>\n                            </label>\n                          </div>\n\n                          <button class=\"button is-success\" [disabled]=\"!selectedFiles\"\n                            (click)=\"upload()\">Upload</button>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"column is-4\">\n                      <div class=\"field\">\n                        <label class=\"label\">Occupation</label>\n                        <div class=\"control\">\n                          <div class=\"select\">\n                            <select name=\"occupation\" [(ngModel)]=\"occupation\">\n                              <option></option>\n                              <option>PIC</option>\n                              <option>FO</option>\n                              <option>OPS</option>\n                            </select>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"columns\">\n                    <div class=\"column is-6\" *ngIf=\"!update\">\n                      <div class=\"field\">\n                        <label class=\"label\">Primary Email</label>\n                        <div class=\"control\">\n                          <input class=\"input\" type=\"text\" name=\"p_email\" [(ngModel)]=\"p_email\">\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"column is-6\">\n                      <div class=\"field\">\n                        <label class=\"label\">Secondary Email</label>\n                        <div class=\"control\">\n                          <input class=\"input\" type=\"text\" name=\"s_email\" [(ngModel)]=\"s_email\">\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"columns\" *ngIf=\"!update\">\n\n                    <div class=\"column is-6\">\n                      <div class=\"field\">\n                        <label class=\"label\">Password</label>\n                        <div class=\"control\">\n                          <input placeholder=\"Password\" class=\"input\" type=\"password\" [(ngModel)]=\"password\"\n                            name=\"password\" required>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"column is-6\">\n                      <div class=\"field\">\n                        <label class=\"label\">Repeat Password</label>\n                        <div class=\"control\">\n                          <input placeholder=\"Reapet Password\" class=\"input\" [(ngModel)]=\"repeatPassword\"\n                            type=\"password\" name=\"repeatPassword\" required>\n\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"columns\">\n                    <div class=\"column is-6\">\n                      <div class=\"field\">\n                        <label class=\"label\">Primary Phone Number</label>\n                        <div class=\"control\">\n                          <input class=\"input\" type=\"text\" name=\"p_phone\" [(ngModel)]=\"p_phone\">\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"column is-6\">\n                      <div class=\"field\">\n                        <label class=\"label\">Secondary Phone Number</label>\n                        <div class=\"control\">\n                          <input class=\"input\" type=\"text\" name=\"s_phone\" [(ngModel)]=\"s_phone\">\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n\n\n                </section>\n                <footer class=\"modal-card-foot\">\n                  <button class=\"button is-success\" id=\"addBtn\" (click)=\"register()\" *ngIf=\"!update\">Add</button>\n                  <button class=\"button is-success\" id=\"addBtn\" (click)=\"updateCrew()\" *ngIf=\"update\">Update</button>\n                  <button class=\"button\" (click)=\"close()\">Cancel</button>\n                </footer>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/crews/crews.component.scss":
/*!**************************************************!*\
  !*** ./src/app/admin/crews/crews.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crew-img {\n  width: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZXgvRG9jdW1lbnRzL0dpdEh1Yi9mbGlnaHRvcHMvc3JjL2FwcC9hZG1pbi9jcmV3cy9jcmV3cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NyZXdzL2NyZXdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNyZXctaW1nIHtcbiAgICB3aWR0aDogNTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin/crews/crews.component.ts":
/*!************************************************!*\
  !*** ./src/app/admin/crews/crews.component.ts ***!
  \************************************************/
/*! exports provided: CrewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrewsComponent", function() { return CrewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin.service */ "./src/app/admin/admin.service.ts");
/* harmony import */ var _fileupload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fileupload */ "./src/app/admin/fileupload.ts");
/* harmony import */ var bulma_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bulma-toast */ "./node_modules/bulma-toast/dist/bulma-toast.min.js");
/* harmony import */ var bulma_toast__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bulma_toast__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CrewsComponent = /** @class */ (function () {
    function CrewsComponent(adminService) {
        this.adminService = adminService;
        this.progress = { percentage: 0 };
        this.update = false;
        this.responses = [];
    }
    CrewsComponent.prototype.selectFile = function (event) {
        this.selectedFiles = event.target.files;
    };
    CrewsComponent.prototype.upload = function () {
        var _this = this;
        var file = this.selectedFiles.item(0);
        this.selectedFiles = undefined;
        this.currentFileUpload = new _fileupload__WEBPACK_IMPORTED_MODULE_3__["FileUpload"](file);
        this.adminService.pushFileToStorage(this.currentFileUpload, this.progress).subscribe(function (data) {
            _this.img_url = data.data;
            console.log('file uploaded ', _this.img_url);
        });
    };
    CrewsComponent.prototype.ngOnInit = function () {
        this.doRun = true;
        jquery__WEBPACK_IMPORTED_MODULE_1__('#btn-add-crew').on('click', function () {
            jquery__WEBPACK_IMPORTED_MODULE_1__('#add-crew').addClass('is-active');
        });
        jquery__WEBPACK_IMPORTED_MODULE_1__('.delete').on('click', function () {
        });
        this.getCrews();
    };
    CrewsComponent.prototype.close = function () {
        this.update = false;
        jquery__WEBPACK_IMPORTED_MODULE_1__('#add-crew').removeClass('is-active');
        this.name = '';
        this.img_url = '';
        this.occupation = '';
        this.p_email = '';
        this.s_email = '';
        this.p_phone = '';
        this.s_phone = '';
    };
    CrewsComponent.prototype.getCrews = function () {
        var _this = this;
        this.adminService.getCrews().subscribe(function (data) {
            _this.crews = data.data;
            console.log('crews ', _this.crews);
        });
    };
    CrewsComponent.prototype.edit = function (crew) {
        this.crewid = crew._id;
        this.name = crew.name;
        this.img_url = crew.img_url;
        this.occupation = crew.occupation;
        this.p_email = crew.p_email;
        this.s_email = crew.s_email;
        this.p_phone = crew.p_phone;
        this.s_phone = crew.s_phone;
        jquery__WEBPACK_IMPORTED_MODULE_1__('#add-crew').addClass('is-active');
    };
    CrewsComponent.prototype.addCrew = function (userID) {
        var _this = this;
        console.log('add start');
        this.adminService.addCrew(this.name, this.img_url, this.occupation, 0, 0, this.p_email, this.s_email, this.p_phone, this.s_phone, this.licence, this.expiry, userID)
            .subscribe(function (data) {
            console.log('Crew Added ', data);
            _this.getCrews();
            _this.doRun = false;
            jquery__WEBPACK_IMPORTED_MODULE_1__('form').trigger("reset");
            jquery__WEBPACK_IMPORTED_MODULE_1__('#addBtn').removeClass('is-loading');
        }, function (error) {
            jquery__WEBPACK_IMPORTED_MODULE_1__('#addBtn').removeClass('is-loading');
            console.log(error);
        });
    };
    CrewsComponent.prototype.updateCrew = function () {
        var _this = this;
        console.log('update start');
        this.adminService.updateCrewData(this.crewid, this.name, this.img_url, this.occupation, this.p_email, this.s_email, this.p_phone, this.s_phone)
            .subscribe(function (data) {
            console.log('Crew Updated ', data);
            _this.getCrews();
            jquery__WEBPACK_IMPORTED_MODULE_1__('form').trigger("reset");
            jquery__WEBPACK_IMPORTED_MODULE_1__('#add-crew').removeClass('is-active');
            jquery__WEBPACK_IMPORTED_MODULE_1__('#addBtn').removeClass('is-loading');
            Object(bulma_toast__WEBPACK_IMPORTED_MODULE_4__["toast"])({
                message: "Crew Member Updated",
                type: "is-success",
                dismissible: true,
                pauseOnHover: true
            });
        }, function (error) {
            jquery__WEBPACK_IMPORTED_MODULE_1__('#addBtn').removeClass('is-loading');
            console.log(error);
        });
    };
    CrewsComponent.prototype.deleteCrew = function (crewid) {
        var _this = this;
        console.log('update start');
        this.adminService.deleteCrew(crewid)
            .subscribe(function (data) {
            if (data.data === "deleted") {
                console.log('Crew Deleted ', data);
                _this.getCrews();
                Object(bulma_toast__WEBPACK_IMPORTED_MODULE_4__["toast"])({
                    message: "Crew Member Deleted",
                    type: "is-success",
                    dismissible: true,
                    pauseOnHover: true
                });
            }
        });
    };
    CrewsComponent.prototype.register = function () {
        var _this = this;
        jquery__WEBPACK_IMPORTED_MODULE_1__('#addBtn').addClass('is-loading');
        if (this.doRun === true) {
            if (this.password === this.repeatPassword) {
                this.adminService.addUser(this.name, this.p_email, this.password, this.repeatPassword, "crew", this.occupation)
                    .subscribe(function (data) {
                    console.log('new user ', data);
                    _this.addCrew(data.data._id);
                });
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], CrewsComponent.prototype, "responses", void 0);
    CrewsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-crews',
            template: __webpack_require__(/*! ./crews.component.html */ "./src/app/admin/crews/crews.component.html"),
            styles: [__webpack_require__(/*! ./crews.component.scss */ "./src/app/admin/crews/crews.component.scss")]
        }),
        __metadata("design:paramtypes", [_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]])
    ], CrewsComponent);
    return CrewsComponent;
}());



/***/ }),

/***/ "./src/app/admin/dashboard/dashboard.component.html":
/*!**********************************************************!*\
  !*** ./src/app/admin/dashboard/dashboard.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container-fluid page-body-wrapper\">\n  <app-side-nav></app-side-nav>\n  <!-- Main Content -->\n  <div class=\"main-panel\">\n    <div class=\"content-wrapper dashboard_page_wrap\">\n\n      <div class=\"row\">\n\n        <!-- Main Panel left -->\n        <div class=\"col-xl-7 main_panel_left\">\n          <div class=\"page_header\">\n            <h4><strong>Good Morning, John Smith</strong></h4>\n            <h6>11 Movements Today, 3 Aircraft active</h6>\n          </div>\n          <!-- Sales list Block -->\n          <div class=\"row text-center dash_card_list\">\n            <div class=\"col-6 col-sm-6 col-md-3\">\n              <a href=\"#\">\n                <div class=\"card\">\n                  <div class=\"card_icon blue_theme\"><i class=\"menu-icon flaticon-plane\"></i></div>\n                  <div class=\"count_value\">12</div>\n                  <div class=\"card_name\">Aircrafts</div>\n                </div>\n              </a>\n            </div>\n            <div class=\"col-6 col-sm-6 col-md-3\">\n              <a href=\"#\">\n                <div class=\"card\">\n                  <div class=\"card_icon green_theme\"><i class=\"menu-icon flaticon-man\"></i></div>\n                  <div class=\"count_value\">40</div>\n                  <div class=\"card_name\">Crew</div>\n                </div>\n              </a>\n            </div>\n            <div class=\"col-6 col-sm-6 col-md-3\">\n              <a href=\"#\">\n                <div class=\"card\">\n                  <div class=\"card_icon orange_theme\"><i class=\"menu-icon flaticon-money-bag-with-dollar-symbol\"></i>\n                  </div>\n                  <div class=\"count_value\">150</div>\n                  <div class=\"card_name\">Sales</div>\n                </div>\n              </a>\n            </div>\n            <div class=\"col-6 col-sm-6 col-md-3\">\n              <a href=\"#\">\n                <div class=\"card\">\n                  <div class=\"card_icon purple_theme\"><i class=\"menu-icon flaticon-box\"></i></div>\n                  <div class=\"count_value\">400</div>\n                  <div class=\"card_name\">Movements</div>\n                </div>\n              </a>\n            </div>\n\n          </div><!-- /. Sales list Block -->\n\n          <div *ngIf=\"events.length != 0\" class=\"block full_calender_wrap\">\n            <!-- <div id=\"calendar\"></div> -->\n            <full-calendar defaultView=\"dayGridMonth\" [events]=\"events\" [header]=\"calendarHeaders\" navLinks=\"true\" eventLimit=\"true\" [plugins]=\"calendarPlugins\"></full-calendar>\n\n          </div>\n\n          <div class=\"popup_btns\">\n            <!-- Button to Open the Movement list popup -->\n            <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#movementList\">\n              Movement List Popup\n            </button>\n\n            <!-- Button to Open the Quote Request popup -->\n            <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#quoteRequest\">\n              Quote Request Popup\n            </button>\n          </div>\n\n        </div>\n        <!-- /. Main Panel left -->\n\n        <!-- Main Panel right -->\n        <div class=\"col-xl-5 main_panel_right\">\n\n          <!--  D News list -->\n          <div class=\"d_news_list\">\n            <div class=\"d_news_block\">\n              <div class=\"d_n_head d-flex\">\n                <h5><i class=\"menu-icon flaticon-plane\"></i> D-EPHH Airborne</h5>\n                <span class=\"d_n_time\">12/12/2019,07:15z</span>\n              </div>\n              <div class=\"d_n_foot d-flex\">\n                <div class=\"m_i_destinations\">\n                  <span>EDDS</span><i class=\"flaticon-right-arrow\"></i><span>EDDV</span>\n                </div>\n                <span class=\"d_n_time\">12/12/2019,07:15z</span>\n                <a href=\"#\" class=\"btn btn-small-bordered\">View</a>\n              </div>\n            </div>\n\n            <div class=\"today_news_head\"><span>Today</span></div>\n\n            <div class=\"d_news_block\">\n              <div class=\"d_n_head d-flex\">\n                <h5><img src=\"images/crew1.png\" alt=\"crew\">John Smith Junior |||</h5>\n                <span class=\"d_n_time\">12/12/2019,07:15z</span>\n              </div>\n              <div class=\"d_n_content\">\n                <p>Who's ready for today? Pickup at 12:30 from EDDS and drop at EDLV as soon as possible.Contains\n                  Explosives.Beware fire.</p>\n              </div>\n              <div class=\"d_n_foot d-flex\">\n                <div class=\"m_i_destinations\">\n                  <span>EDDS</span><i class=\"flaticon-right-arrow\"></i><span>EDDV</span>\n                </div>\n                <span class=\"d_n_time\">12/12/2019,07:15z</span>\n                <a href=\"#\" class=\"btn btn-small-bordered\">View</a>\n              </div>\n            </div>\n\n            <div class=\"d_news_block\">\n              <div class=\"d_n_head d-flex\">\n                <a href=\"#\" class=\"avi_btn\">Aviation Services Ltd</a>\n                <h5>New Handler Quote</h5>\n                <span class=\"d_n_time\">12/12/2019,07:15z</span>\n              </div>\n              <div class=\"d_n_content\">\n                <ul class=\"quote_items\">\n                  <li>\n                    <span>Catering</span><span>2</span><span>$33.25</span>\n                  </li>\n                  <li>\n                    <span>Catering</span><span>2</span><span>$33.25</span>\n                  </li>\n                  <li>\n                    <a href=\"#\" class=\"btn btn-small-bordered bg_blue\">Accept</a>\n                    <a href=\"#\" class=\"btn btn-small-bordered bg_gray\">Reject</a>\n                  </li>\n                </ul>\n              </div>\n              <div class=\"d_n_foot d-flex\">\n                <div class=\"m_i_destinations\">\n                  <span>EDDS</span><i class=\"flaticon-right-arrow\"></i><span>EDDV</span>\n                </div>\n                <span class=\"d_n_time\">12/12/2019,07:15z</span>\n                <a href=\"#\" class=\"btn btn-small-bordered\">View</a>\n              </div>\n            </div>\n\n            <div class=\"d_news_block\">\n              <div class=\"d_n_head d-flex\">\n                <h5>Flightplan can now be filled</h5>\n                <span class=\"d_n_time\">12/12/2019,07:15z</span>\n              </div>\n              <div class=\"d_n_content\">\n                <div class=\"flight_plan_content d-flex\">\n                  <p>EDDS 301100Z 30/12/0112 32007KT 9999 BKN013 BECMG 3012/3013 SCT0515 BECMG 3017/3019 VRB03KT<p>\n                      <a href=\"#\" class=\"btn btn-small-bordered bg_blue\">File</a>\n                </div>\n              </div>\n              <div class=\"d_n_foot d-flex\">\n                <div class=\"m_i_destinations\">\n                  <span>EDDS</span><i class=\"flaticon-right-arrow\"></i><span>EDDV</span>\n                </div>\n                <span class=\"d_n_time\">12/12/2019,07:15z</span>\n                <a href=\"#\" class=\"btn btn-small-bordered\">View</a>\n              </div>\n            </div>\n\n            <div class=\"d_news_block\">\n              <div class=\"d_n_head d-flex\">\n                <h5>New movement created </h5>\n                <span class=\"d_n_time\">12/12/2019,07:15z</span>\n              </div>\n              <div class=\"d_n_foot d-flex\">\n                <div class=\"m_i_destinations\">\n                  <span>EDDS</span><i class=\"flaticon-right-arrow\"></i><span>EDDV</span>\n                </div>\n                <span class=\"d_n_time\">12/12/2019,07:15z</span>\n                <a href=\"#\" class=\"btn btn-small-bordered\">View</a>\n              </div>\n            </div>\n\n            <div class=\"d_news_block\">\n              <div class=\"d_n_head d-flex\">\n                <h5>Flightplan can now be filled</h5>\n                <span class=\"d_n_time\">12/12/2019,07:15z</span>\n              </div>\n              <div class=\"d_n_content\">\n                <ul class=\"flight_plans\">\n                  <li>\n                    <span>EDDS</span><span>Stutgard Fuel Gmbh.</span><span>Fuel(500 litres)</span>\n                    <a href=\"#\" class=\"btn btn-small-bordered\">View</a>\n                  </li>\n                </ul>\n              </div>\n              <div class=\"d_n_foot d-flex\">\n                <div class=\"m_i_destinations\">\n                  <span>EDDS</span><i class=\"flaticon-right-arrow\"></i><span>EDDV</span>\n                </div>\n                <span class=\"d_n_time\">12/12/2019,07:15z</span>\n                <a href=\"#\" class=\"btn btn-small-bordered\">View</a>\n              </div>\n            </div>\n          </div>\n          <!-- /. D News list -->\n\n\n        </div>\n        <!-- /. Main Panel right -->\n\n\n      </div>\n\n\n\n\n\n\n\n      <!-- search sidebar -->\n      <div class=\"search_sidebar\">\n        <div class=\"search_sidebar_inner\">\n\n          <div class=\"search_div\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search Downwind.io here...\">\n            <span class=\"flaticon-magnifying-glass search_icon\"></span>\n          </div>\n          <ul class=\"search_suggestions\">\n            <li>\n              <div class=\"s_s_item d-flex\">\n                <span class=\"ss_item_icon flaticon-plane\"></span>\n                <div class=\"ss_i_main\">\n                  <div class=\"m_i_destinations\">\n                    <span>EDDS</span><i class=\"flaticon-right-arrow\"></i><span>EDDV</span>\n                  </div>\n                  <div class=\"ss_date\">05-12-2020,07:15Z</div>\n                </div>\n                <div class=\"ss_item_type\">Movement</div>\n              </div>\n            </li>\n            <li>\n              <div class=\"s_s_item d-flex\">\n                <span class=\"ss_item_icon flaticon-man\"></span>\n                <div class=\"ss_i_main\">\n                  Mr. James Johnson\n                </div>\n                <div class=\"ss_item_type\">Pilot</div>\n              </div>\n            </li>\n            <li>\n              <div class=\"s_s_item d-flex\">\n                <span class=\"ss_item_icon flaticon-plane\"></span>\n                <div class=\"ss_i_main\">\n                  D-EPHH\n                  <div class=\"ss_item_sub\">ATR 72-500</div>\n                </div>\n                <div class=\"ss_item_type\">Aircraft</div>\n              </div>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"search_overlay\"></div>\n      <!-- /. search sidebar -->\n    </div>\n  </div>\n  <!-- <div class=\"column is-9\">\n      <div class=\"container\">\n        <div class=\"columns is-multiline\">\n          <div class=\"column is-9\">\n\n            <div class=\"columns\">\n              <div class=\"column is-4\">\n                <div class=\"field has-addons\">\n                  <p class=\"control\">\n                    <a class=\"button is-primary\" mwlCalendarPreviousView [view]=\"view\" [(viewDate)]=\"viewDate\"\n                      (viewDateChange)=\"activeDayIsOpen = false\">\n                      Previous\n                    </a>\n                  </p>\n                  <p class=\"control\">\n                    <a class=\"button is-primary is-outlined\" mwlCalendarToday [(viewDate)]=\"viewDate\">\n                      Today\n                    </a>\n                  </p>\n                  <p class=\"control\">\n                    <a class=\"button is-primary\" mwlCalendarNextView [view]=\"view\" [(viewDate)]=\"viewDate\"\n                      (viewDateChange)=\"activeDayIsOpen = false\">\n                      Next\n                    </a>\n                  </p>\n                </div>\n              </div>\n              <div class=\"column is-4\">\n                <h3 class=\"title has-text-centered\">{{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}</h3>\n              </div>\n              <div class=\"column is-4\">\n                <div class=\"field has-addons is-pulled-right\">\n                  <p class=\"control\">\n                    <a class=\"button is-primary\" (click)=\"view = CalendarView.Month\"\n                      [class.active]=\"view === CalendarView.Month\">\n                      Month\n                    </a>\n                  </p>\n                  <p class=\"control\">\n                    <a class=\"button is-primary\" (click)=\"view = CalendarView.Week\"\n                      [class.active]=\"view === CalendarView.Week\">\n                      Week\n                    </a>\n                  </p>\n                  <p class=\"control\">\n                    <a class=\"button is-primary\" (click)=\"view = CalendarView.Day\"\n                      [class.active]=\"view === CalendarView.Day\">\n                      Day\n                    </a>\n                  </p>\n                </div>\n              </div>\n            </div>\n            <div [ngSwitch]=\"view\">\n              <mwl-calendar-month-view *ngSwitchCase=\"CalendarView.Month\" [viewDate]=\"viewDate\" [events]=\"events\"\n                [refresh]=\"refresh\" [activeDayIsOpen]=\"activeDayIsOpen\" (dayClicked)=\"dayClicked($event.day)\"\n                (eventClicked)=\"handleEvent('Clicked', $event.event)\" (eventTimesChanged)=\"eventTimesChanged($event)\">\n              </mwl-calendar-month-view>\n              <mwl-calendar-week-view *ngSwitchCase=\"CalendarView.Week\" [viewDate]=\"viewDate\" [events]=\"events\"\n                [refresh]=\"refresh\" (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n                (eventTimesChanged)=\"eventTimesChanged($event)\">\n              </mwl-calendar-week-view>\n              <mwl-calendar-day-view *ngSwitchCase=\"CalendarView.Day\" [viewDate]=\"viewDate\" [events]=\"events\"\n                [refresh]=\"refresh\" (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n                (eventTimesChanged)=\"eventTimesChanged($event)\">\n              </mwl-calendar-day-view>\n            </div>\n          </div>\n<app-chat></app-chat>\n        </div>\n      </div>\n    </div> -->\n</div>\n<app-chat></app-chat>\n"

/***/ }),

/***/ "./src/app/admin/dashboard/dashboard.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/admin/dashboard/dashboard.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../admin.service */ "./src/app/admin/admin.service.ts");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fullcalendar/daygrid */ "./node_modules/@fullcalendar/daygrid/main.js");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fullcalendar/timegrid */ "./node_modules/@fullcalendar/timegrid/main.js");
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fullcalendar_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fullcalendar/list */ "./node_modules/@fullcalendar/list/main.js");
/* harmony import */ var _fullcalendar_list__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_list__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var colors = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
    }
};
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(authService, adminService, router) {
        this.authService = authService;
        this.adminService = adminService;
        this.router = router;
        this.events = [];
        if (!this.authService.loggedIn()) {
            this.navigate('/auth/login');
        }
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.calendarPlugins = [_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_4___default.a, _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_5___default.a, _fullcalendar_list__WEBPACK_IMPORTED_MODULE_6___default.a];
        this.calendarHeaders = {
            right: 'prev,title,next',
            center: '',
            left: 'dayGridMonth,dayGridWeek'
        };
        // init this.user on startup
        this.authService.me().subscribe(function (user) {
            _this.user = user.user;
            _this.id = _this.user._id;
            console.log('user ', _this.user);
            if (_this.user.role === 'admin') {
                _this.getAdminSchedule();
            }
            else {
                _this.adminService.getCrewByUser(_this.id).subscribe(function (data) {
                    console.log(data.data);
                    if (data.data[0]) {
                        _this.crew_id = data.data[0]._id;
                        console.log('crew_id ', _this.crew_id);
                        if (_this.user.occupation === 'PIC') {
                            _this.getPICSchedule();
                        }
                        if (_this.user.occupation === 'OPS') {
                            _this.getOPSSchedule();
                        }
                        if (_this.user.occupation === 'FO') {
                            _this.getFOSchedule();
                        }
                    }
                });
            }
        });
        // update this.user after login/register/logout
        this.userSubscription = this.authService.$userSource.subscribe(function (user) {
            _this.user = user;
        });
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        if (this.userSubscription) {
            this.userSubscription.unsubscribe();
        }
    };
    DashboardComponent.prototype.navigate = function (link) {
        this.router.navigate([link]);
    };
    DashboardComponent.prototype.getAdminSchedule = function () {
        var _this = this;
        this.adminService.getAdminSchedule().subscribe(function (data) {
            _this.schedule = data.data;
            _this.schedule.forEach(function (element) {
                _this.addEvent(element.departure_airport + ' ->' + element.arrival_airport, element.departuretime, element.arrivaltime);
            });
            console.log('schedule ', _this.schedule);
        });
    };
    DashboardComponent.prototype.getFOSchedule = function () {
        var _this = this;
        this.adminService.getFOSchedule(this.crew_id).subscribe(function (data) {
            _this.schedule = data.data;
            _this.schedule.forEach(function (element) {
                _this.addEvent(element.departure_airport + ' ->' + element.arrival_airport, element.departuretime, element.arrivaltime);
            });
            console.log('schedule ', _this.schedule);
        });
    };
    DashboardComponent.prototype.getOPSSchedule = function () {
        var _this = this;
        this.adminService.getOPSSchedule(this.crew_id).subscribe(function (data) {
            _this.schedule = data.data;
            _this.schedule.forEach(function (element) {
                _this.addEvent(element.departure_airport + ' -> ' + element.arrival_airport, element.departuretime, element.arrivaltime);
            });
            console.log('schedule ', _this.schedule);
        });
    };
    DashboardComponent.prototype.getPICSchedule = function () {
        var _this = this;
        this.adminService.getPICSchedule(this.crew_id).subscribe(function (data) {
            _this.schedule = data.data;
            _this.schedule.forEach(function (element) {
                _this.addEvent(element.departure_airport + ' -> ' + element.arrival_airport, element.departuretime, element.arrivaltime);
            });
            console.log('schedule ', _this.schedule);
        });
    };
    DashboardComponent.prototype.addEvent = function (title, start, end) {
        this.events.push({
            title: title + ' (' + new Date(start * 1000) + ' - ' + new Date(end * 1000) + ')',
            start: new Date(start * 1000),
            end: new Date(end * 1000)
        });
    };
    DashboardComponent.prototype.logout = function () {
        this.authService.signOut();
        this.navigate('/auth/login');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('scrollMe'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], DashboardComponent.prototype, "myScrollContainer", void 0);
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/admin/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/admin/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/admin/edit-airport/edit-airport.component.html":
/*!****************************************************************!*\
  !*** ./src/app/admin/edit-airport/edit-airport.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container\">\n  <div class=\"columns\">\n    <div class=\"column is-3\">\n      <app-side-nav></app-side-nav>\n    </div>\n    <div class=\"column is-9\">\n      <h3 class=\"title\">Edit Airport</h3>\n\n      <form>\n        <div class=\"columns\">\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Name</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"name\" [(ngModel)]=\"name\">\n              </div>\n            </div>\n          </div>\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">ICAO Code</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"icao\" [(ngModel)]=\"icao\">\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"columns\">\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Longitude</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"longitude\" [(ngModel)]=\"longitude\">\n              </div>\n            </div>\n          </div>\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Latitude</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"latitude\" [(ngModel)]=\"latitude\">\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"columns\">\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Elevation</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"elevation\" [(ngModel)]=\"elevation\">\n              </div>\n            </div>\n          </div>\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Longest Runway</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"longest_runway\" [(ngModel)]=\"longest_runway\">\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"columns\">\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Magnetic Variation</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"magnetic_variation\" [(ngModel)]=\"magnetic_variation\">\n              </div>\n            </div>\n          </div>\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Airport Type</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"airport_type\" [(ngModel)]=\"airport_type\">\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"columns\">\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Beacon</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"beacon\" [(ngModel)]=\"beacon\">\n              </div>\n            </div>\n          </div>\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Fuel Types</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"fuel_types\" [(ngModel)]=\"fuel_types\">\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"columns\">\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Landing Fee</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"landing_fee\" [(ngModel)]=\"landing_fee\">\n              </div>\n            </div>\n          </div>\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Oxygen</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"oxygen\" [(ngModel)]=\"oxygen\">\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"columns\">\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Repairs</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"repairs\" [(ngModel)]=\"repairs\">\n              </div>\n            </div>\n          </div>\n          \n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Country</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"country\" [(ngModel)]=\"country\">\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"columns\">\n          <div class=\"column is-6\">\n            <div class=\"field is-grouped\">\n              <div class=\"control\">\n                <button class=\"button is-link\" id=\"addBtn\" (click)=\"updateAirport()\">Submit</button>\n              </div>\n              <div class=\"control\">\n                <button class=\"button is-text\" type=\"reset\">Reset</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n<app-chat></app-chat>"

/***/ }),

/***/ "./src/app/admin/edit-airport/edit-airport.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/admin/edit-airport/edit-airport.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2VkaXQtYWlycG9ydC9lZGl0LWFpcnBvcnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/edit-airport/edit-airport.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/edit-airport/edit-airport.component.ts ***!
  \**************************************************************/
/*! exports provided: EditAirportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAirportComponent", function() { return EditAirportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../admin.service */ "./src/app/admin/admin.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var bulma_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bulma-toast */ "./node_modules/bulma-toast/dist/bulma-toast.min.js");
/* harmony import */ var bulma_toast__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bulma_toast__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditAirportComponent = /** @class */ (function () {
    function EditAirportComponent(adminService, route, router) {
        this.adminService = adminService;
        this.route = route;
        this.router = router;
    }
    EditAirportComponent.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.paramMap.get("id");
        this.doRun = true;
        this.getAirport();
    };
    EditAirportComponent.prototype.getAirport = function () {
        var _this = this;
        console.log('getting airport');
        this.adminService.getAirportDetails(this.id).subscribe(function (data) {
            var airport = data.data;
            _this._id = airport._id;
            _this.name = airport.name;
            _this.country = airport.country;
            _this.icao = airport.icao;
            _this.latitude = airport.latitude;
            _this.longitude = airport.longitude;
            _this.elevation = airport.elevation;
            _this.longest_runway = airport.longest_runway;
            _this.magnetic_variation = airport.magnetic_variation;
            _this.airport_type = airport.airport_type;
            _this.beacon = airport.beacon;
            _this.fuel_types = airport.fuel_types;
            _this.landing_fee = airport.landing_fee;
            _this.oxygen = airport.oxygen;
            _this.repairs = airport.repairs;
            console.log('airport got', airport);
        });
    };
    EditAirportComponent.prototype.updateAirport = function () {
        console.log('update start');
        this.adminService.updateAirport(this._id, this.name, this.country, this.icao, this.latitude, this.longitude, this.elevation, this.longest_runway, this.magnetic_variation, this.airport_type, this.beacon, this.fuel_types, this.landing_fee, this.oxygen, this.repairs)
            .subscribe(function (data) {
            console.log('Crew Updated ', data);
            Object(bulma_toast__WEBPACK_IMPORTED_MODULE_3__["toast"])({
                message: "Airport Updated",
                type: "is-success",
                dismissible: true,
                pauseOnHover: true
            });
        });
    };
    EditAirportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-airport',
            template: __webpack_require__(/*! ./edit-airport.component.html */ "./src/app/admin/edit-airport/edit-airport.component.html"),
            styles: [__webpack_require__(/*! ./edit-airport.component.scss */ "./src/app/admin/edit-airport/edit-airport.component.scss")]
        }),
        __metadata("design:paramtypes", [_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EditAirportComponent);
    return EditAirportComponent;
}());



/***/ }),

/***/ "./src/app/admin/edit-sales/edit-sales.component.html":
/*!************************************************************!*\
  !*** ./src/app/admin/edit-sales/edit-sales.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  edit-sales works!\n</p>\n"

/***/ }),

/***/ "./src/app/admin/edit-sales/edit-sales.component.scss":
/*!************************************************************!*\
  !*** ./src/app/admin/edit-sales/edit-sales.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2VkaXQtc2FsZXMvZWRpdC1zYWxlcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/edit-sales/edit-sales.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/admin/edit-sales/edit-sales.component.ts ***!
  \**********************************************************/
/*! exports provided: EditSalesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditSalesComponent", function() { return EditSalesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../admin.service */ "./src/app/admin/admin.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var EditSalesComponent = /** @class */ (function () {
    function EditSalesComponent(adminService, renderer, route, document) {
        this.adminService = adminService;
        this.renderer = renderer;
        this.route = route;
        this.document = document;
        this.exampleOptions = {
            enableTime: true,
            mode: "single"
        };
    }
    EditSalesComponent.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.paramMap.get("id");
        this.getAirports();
        this.doRun = true;
    };
    EditSalesComponent.prototype.ngAfterViewInit = function () {
        // addClass hack until ng2-flatpickr takes my PR
        this.renderer.addClass(this.document.getElementsByClassName('ng2-flatpickr-input flatpickr-input')[0], 'input');
    };
    EditSalesComponent.prototype.getAirports = function () {
        var _this = this;
        this.adminService.getAirports(1, 20).subscribe(function (data) {
            _this.airports = data.data;
            console.log('airports ', _this.airports);
        });
    };
    EditSalesComponent.prototype.getSale = function () {
        var _this = this;
        console.log('getting airport');
        this.adminService.getSale(this.id).subscribe(function (data) {
            var sale = data.data;
            _this._id = sale._id;
            _this.company_name = sale.company_name;
            _this.contact_name = sale.contact_name;
            _this.contact_email = sale.contact_email;
            _this.contact_phone = sale.contact_phone;
            _this.weight = sale.weight;
            _this.description = sale.description;
            _this.instructions = sale.instructions;
            _this.origin_airport = sale.origin_airport;
            _this.destination_airport = sale.destination_airport;
            _this.departure = sale.departure;
            _this.estimated_cost = sale.estimated_cost;
            _this.price_charged = sale.price_charged;
            console.log('airport got', sale);
        });
    };
    EditSalesComponent.prototype.updateSale = function () {
        var _this = this;
        console.log('add start');
        jquery__WEBPACK_IMPORTED_MODULE_2__('#addBtn').addClass('is-loading');
        if (this.doRun === true) {
            this.adminService.updateSale(this.id, this.company_name, this.contact_name, this.contact_email, this.contact_phone, this.weight, this.dangerous, this.instructions, this.description, this.origin_airport, this.destination_airport, Date.parse(this.departure) / 1000, this.reference_id, this.estimated_cost, this.price_charged)
                .subscribe(function (data) {
                console.log('Aircraft Updated ', data);
                // this.getAircrafts();
                jquery__WEBPACK_IMPORTED_MODULE_2__('form').trigger("reset");
                jquery__WEBPACK_IMPORTED_MODULE_2__('#addBtn').removeClass('is-loading');
                _this.doRun = false;
            }, function (error) {
                jquery__WEBPACK_IMPORTED_MODULE_2__('#addBtn').removeClass('is-loading');
                console.log(error);
            });
        }
    };
    EditSalesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-sales',
            template: __webpack_require__(/*! ./edit-sales.component.html */ "./src/app/admin/edit-sales/edit-sales.component.html"),
            styles: [__webpack_require__(/*! ./edit-sales.component.scss */ "./src/app/admin/edit-sales/edit-sales.component.scss")]
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])),
        __metadata("design:paramtypes", [_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], Object])
    ], EditSalesComponent);
    return EditSalesComponent;
}());



/***/ }),

/***/ "./src/app/admin/fileupload.ts":
/*!*************************************!*\
  !*** ./src/app/admin/fileupload.ts ***!
  \*************************************/
/*! exports provided: FileUpload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUpload", function() { return FileUpload; });
var FileUpload = /** @class */ (function () {
    function FileUpload(file) {
        this.file = file;
    }
    return FileUpload;
}());



/***/ }),

/***/ "./src/app/admin/handlers/handlers.component.html":
/*!********************************************************!*\
  !*** ./src/app/admin/handlers/handlers.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container-fluid page-body-wrapper\">\n  <app-side-nav></app-side-nav>\n  <!-- Main Content -->\n  <div class=\"main-panel\">\n    <div class=\"content-wrapper\">\n\n      <div class=\"page_header p_header_two d-flex\">\n        <h4><strong>Airport Handlers</strong></h4>\n        <div class=\"ml-auto\">\n          <a routerLink=\"/admin/new-handler\" class=\"btn bg_blue\">Add Handler</a>\n        </div>\n      </div>\n\n      <div class=\"block table_block\">\n        <div class=\"table-responsive\">\n          <table class=\"table\">\n            <thead>\n              <tr>\n                <th class=\"h_l_name tu\">Name</th>\n                <th class=\"h_l_icao\">ICAO</th>\n                <th class=\"h_l_phone\">Local Phone</th>\n                <th class=\"h_l_email\">Local Email</th>\n                <th class=\"h_l_type\">Type</th>\n                <th class=\"h_l_item\">Items</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let handler of handlers\">\n                <td class=\"h_l_name tu\">{{handler.name}}</td>\n                <td class=\"h_l_icao\">{{handler.icao}}</td>\n                <td class=\"h_l_phone\">{{handler.local_telephone}}</td>\n                <td class=\"h_l_email\">{{handler.local_email}}</td>\n                <td class=\"h_l_type\">{{handler.type}}</td>\n                <td class=\"h_l_item\">{{handler.items}}</td>\n              </tr>\n\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<app-chat></app-chat>\n"

/***/ }),

/***/ "./src/app/admin/handlers/handlers.component.scss":
/*!********************************************************!*\
  !*** ./src/app/admin/handlers/handlers.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".aircraft-img {\n  width: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZXgvRG9jdW1lbnRzL0dpdEh1Yi9mbGlnaHRvcHMvc3JjL2FwcC9hZG1pbi9oYW5kbGVycy9oYW5kbGVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2hhbmRsZXJzL2hhbmRsZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFpcmNyYWZ0LWltZyB7XG4gICAgd2lkdGg6IDUwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/admin/handlers/handlers.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin/handlers/handlers.component.ts ***!
  \******************************************************/
/*! exports provided: HandlersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandlersComponent", function() { return HandlersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin.service */ "./src/app/admin/admin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HandlersComponent = /** @class */ (function () {
    function HandlersComponent(adminService) {
        this.adminService = adminService;
        this.responses = [];
    }
    HandlersComponent.prototype.ngOnInit = function () {
        jquery__WEBPACK_IMPORTED_MODULE_1__('#btn-add-aircraft').on('click', function () {
            jquery__WEBPACK_IMPORTED_MODULE_1__('#add-aircraft').addClass('is-active');
        });
        jquery__WEBPACK_IMPORTED_MODULE_1__('.delete').on('click', function () {
            jquery__WEBPACK_IMPORTED_MODULE_1__('#add-aircraft').removeClass('is-active');
        });
        this.getHandlers();
    };
    HandlersComponent.prototype.getHandlers = function () {
        var _this = this;
        this.adminService.getHandlers().subscribe(function (data) {
            _this.handlers = data.data;
            console.log('handlers ', _this.handlers);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], HandlersComponent.prototype, "responses", void 0);
    HandlersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-handlers',
            template: __webpack_require__(/*! ./handlers.component.html */ "./src/app/admin/handlers/handlers.component.html"),
            styles: [__webpack_require__(/*! ./handlers.component.scss */ "./src/app/admin/handlers/handlers.component.scss")]
        }),
        __metadata("design:paramtypes", [_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]])
    ], HandlersComponent);
    return HandlersComponent;
}());



/***/ }),

/***/ "./src/app/admin/header/header.component.html":
/*!****************************************************!*\
  !*** ./src/app/admin/header/header.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <!-- header -->\n    <nav class=\"navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row\">\n      <div class=\"navbar-brand-wrapper d-flex justify-content-center\">\n        <div class=\"navbar-brand-inner-wrapper d-flex justify-content-between align-items-center w-100\">\n          <button class=\"navbar-toggler navbar-toggler align-self-center\" type=\"button\" data-toggle=\"minimize\">\n            <span class=\"c-icon-menu-icon\"></span>\n          </button>          \n          <a class=\"navbar-brand brand-logo\" href=\"index.html\"><img src=\"../../../assets/images/logo.png\" alt=\"logo\"/></a>\n      </div>  \n    </div>\n\n    <div class=\"navbar-menu-wrapper d-flex align-items-center justify-content-end pl-0\">\n      <ul class=\"navbar-nav navbar-nav-right\">\n        <li class=\"nav-item search_toggle\">\n          <a class=\"nav-link\" href=\"#\">\n            <i class=\"flaticon-magnifying-glass\"></i>\n          </a>\n        </li>\n        <li class=\"nav-item nav-profile dropdown\">\n          <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" id=\"profileDropdown\">\n            <span>Elina G</span><img src=\"../../../assets/images/user.png\" alt=\"profile\"/>\n          </a>\n          <div class=\"dropdown-menu dropdown-menu-right navbar-dropdown\" aria-labelledby=\"profileDropdown\">\n            <a class=\"dropdown-item\">\n              <i class=\"mdi mdi-settings text-primary\"></i>\n              Settings\n            </a>\n            <a class=\"dropdown-item\" (click)=\"logout()\">\n              <i class=\"mdi mdi-logout text-primary\"></i>\n              Logout\n            </a>\n          </div>\n        </li>\n        <li class=\"nav-item mr-0\">\n          <button class=\"navbar-toggler navbar-toggler-right d-lg-none align-self-center\" type=\"button\" data-toggle=\"offcanvas\">\n            <span class=\"c-icon-menu-icon\"></span>\n          </button>\n        </li>\n      </ul>        \n    </div>\n  </nav>\n  <!-- /. header -->"

/***/ }),

/***/ "./src/app/admin/header/header.component.scss":
/*!****************************************************!*\
  !*** ./src/app/admin/header/header.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\n  margin-bottom: 1rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZXgvRG9jdW1lbnRzL0dpdEh1Yi9mbGlnaHRvcHMvc3JjL2FwcC9hZG1pbi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2IHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin/header/header.component.ts":
/*!**************************************************!*\
  !*** ./src/app/admin/header/header.component.ts ***!
  \**************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.logout = function () {
        this.authService.signOut();
        this.navigate('/auth/login');
    };
    HeaderComponent.prototype.navigate = function (link) {
        this.router.navigate([link]);
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/admin/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/admin/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/admin/movement/movement.component.html":
/*!********************************************************!*\
  !*** ./src/app/admin/movement/movement.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container-fluid page-body-wrapper\">\n  <app-side-nav></app-side-nav>\n  <!-- Main Content -->\n  <div class=\"main-panel\">\n    <div class=\"content-wrapper\" *ngIf=\"movement\">\n      <div class=\"page_header d-flex\">\n        <h4><span>Movement :</span> <strong>{{movement.departure_airport}}</strong><i\n            class=\"flaticon-right-arrow\"></i><strong>{{movement.arrival_airport}}</strong></h4>\n        <div class=\"select_Date ml-auto\">\n          <input class=\"datePicker\" type=\"text\" placeholder=\"e.g. 05/12/2020\" value=\"\">\n          <i class=\"flaticon-calendar\"></i>\n        </div>\n      </div>\n      <div class=\"row\">\n\n        <!-- Main Panel left -->\n        <div class=\"col-xl-7 main_panel_left\">\n          <!-- movements crews -->\n          <div class=\"movement_members_list\">\n            <div class=\"row\">\n              <div class=\"col-sm-4\" *ngIf=\"pic\">\n                <div class=\"crew_member card\">\n                  <div class=\"d-flex\">\n                    <div class=\"c_m_img\">\n                      <i class=\"menu-icon flaticon-plane\"></i>\n                    </div>\n                    <div class=\"c_m_info\">\n                      <h5>{{movement.aircraft}}</h5>\n                      <div class=\"c_m_role\">Aircraft</div>\n                    </div>\n                  </div>\n                  <div class=\"c_m_footer\">\n                    <a href=\"#\">View Aircraft <i class=\"flaticon-right-arrow\"></i></a>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-sm-4\" *ngIf=\"pic\">\n                <div class=\"crew_member card\">\n                  <div class=\"d-flex\">\n                    <div class=\"c_m_img\">\n                      <img src=\"{{pic.img_url}}\" alt=\"PIC\">\n                    </div>\n                    <div class=\"c_m_info\">\n                      <h5>{{pic.name}}</h5>\n                      <div class=\"c_m_role\">PIC</div>\n                    </div>\n                  </div>\n                  <div class=\"c_m_footer\">\n                    <a href=\"#\">View Profile <i class=\"flaticon-right-arrow\"></i></a>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-sm-4\" *ngIf=\"fo\">\n                <div class=\"crew_member card\">\n                  <div class=\"d-flex\">\n                    <div class=\"c_m_img\">\n                      <img src=\"{{fo.img_url}}\" alt=\"FO\">\n                    </div>\n                    <div class=\"c_m_info\">\n                      <h5>{{fo.name}}</h5>\n                      <div class=\"c_m_role\">FO</div>\n                    </div>\n                  </div>\n                  <div class=\"c_m_footer\">\n                    <a href=\"#\">View Profile <i class=\"flaticon-right-arrow\"></i></a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div><!-- /. movements crews -->\n\n          <!-- movement servies Block -->\n          <div class=\"block movement_services\">\n            <div class=\"block_head\">\n              <h3>Movement Services</h3>\n            </div>\n            <div class=\"table-responsive\">\n              <table class=\"table\">\n                <thead>\n                  <tr>\n                    <th>Airport</th>\n                    <th>Provider</th>\n                    <th>Service Requested</th>\n                    <th>status</th>\n                    <th>Cost</th>\n                    <th></th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>EDDS</td>\n                    <td>Avia Service Ltd.</td>\n                    <td>Catering, Cleaning</td>\n                    <td><strong class=\"c_orange\">Requested</strong></td>\n                    <td><b>$1599.95</b></td>\n                    <td><a href=\"#\" class=\"btn btn-small\">View</a></td>\n                  </tr>\n                  <tr>\n                    <td>EDDS</td>\n                    <td>Stutgard Fuel Gmbh</td>\n                    <td>Fuel(500 litres)</td>\n                    <td><strong class=\"c_orange\">Requested</strong></td>\n                    <td></td>\n                    <td><a href=\"#\" class=\"btn btn-small\">View</a></td>\n                  </tr>\n                  <tr>\n                    <td>EDDS</td>\n                    <td>Blue Qcean Ltd.</td>\n                    <td>Catering</td>\n                    <td><strong class=\"c_green\">Confirmed</strong></td>\n                    <td></td>\n                    <td><a href=\"#\" class=\"btn btn-small\">View</a></td>\n                  </tr>\n                  <tr>\n                    <td>EDDS</td>\n                    <td>Avia Service Ltd.</td>\n                    <td>Flight Support</td>\n                    <td><strong class=\"c_red\">Cancelled</strong></td>\n                    <td></td>\n                    <td><a href=\"#\" class=\"btn btn-small\">View</a></td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n            <div class=\"actions_btn\">\n              <a href=\"#\" class=\"btn btn_bordered\">View All</a>\n              <a href=\"#\" class=\"btn btn_bordered\">Request More</a>\n            </div>\n          </div><!-- /. movement services Block -->\n\n\n          <!-- Sales list Block -->\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"block seat_car_block\">\n                <div class=\"block_head\">\n                  <h3><span>Customer :</span> Seat Cars Inc.</h3>\n                </div>\n                <ul class=\"sales_items_list\">\n                  <li>\n                    <a href=\"#\">Contact Information <i class=\"flaticon-arrow-point-to-right\"></i></a>\n                  </li>\n                  <li>\n                    <a href=\"#\">Documents <i class=\"flaticon-arrow-point-to-right\"></i></a>\n                  </li>\n                  <li>\n                    <a href=\"#\">Payload Information <i class=\"flaticon-arrow-point-to-right\"></i></a>\n                  </li>\n                </ul>\n                <div class=\"view_all_sales\"><a href=\"#\">View Sales record</a></div>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"block document_block\">\n                <div class=\"block_head\">\n                  <h3>Documents</h3>\n                </div>\n                <ul class=\"documents_list\">\n                  <li><a href=\"#\">Contact Information <i class=\"flaticon-download\"></i></a></li>\n                  <li><a href=\"#\">Contact Information <i class=\"flaticon-download\"></i></a></li>\n                  <li><a href=\"#\">Contact Information <i class=\"flaticon-download\"></i></a></li>\n                  <li><a href=\"#\">Contact Information <i class=\"flaticon-download\"></i></a></li>\n                </ul>\n              </div>\n            </div>\n          </div><!-- /. Sales list Block -->\n\n\n          <!-- <div class=\"columns is-mobile is-multiline\">\n            <div class=\"column is-7\">\n              <div class=\"columns\">\n                <div class=\"column is-6\">\n                  <h3 class=\"title is-size-6\">Notes (Operations):</h3>\n                  <div class=\"message-board\">\n                    <div *ngFor=\"let message of messages\">\n                      <div *ngIf=\"message.usergroup === 'handler'\">\n                        {{message.message}}\n                        <hr>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"field\">\n                    <div class=\"control\">\n                      <textarea name=\"handler_message\" [(ngModel)]=\"handler_message\" class=\"textarea\"></textarea>\n                    </div>\n                  </div>\n                  <button class=\"button is-link\" (click)=\"addMessage('handler')\">Save</button>\n\n                </div>\n                <div class=\"column is-6\">\n                  <h3 class=\"title is-size-6\">Notes (Flight Crew)</h3>\n                  <div class=\"message-board\">\n                    <div *ngFor=\"let message of messages\">\n                      <div *ngIf=\"message.usergroup === 'crew'\">\n                        {{message.message}}\n                        <hr>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"field\">\n                    <div class=\"control\">\n                      <textarea name=\"crew_message\" class=\"textarea\" [(ngModel)]=\"crew_message\"></textarea>\n                    </div>\n                  </div>\n                  <button class=\"button is-link\" (click)=\"addMessage('crew')\">Save</button>\n\n                </div>\n              </div>\n            </div>\n            <div class=\"column is-6\">\n              <table class=\"table is-fullwidth\">\n                <thead>\n\n                  <th>Departure NOTAM</th>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let notam of departureNOTAM\">\n                    <td>{{notam.iteme}}</td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n            <div class=\"column is-6\">\n              <table class=\"table is-fullwidth\">\n                <thead>\n\n                  <th>Arrival NOTAM</th>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let notam of arrivalNOTAM\">\n                    <td>{{notam.iteme}}</td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div> -->\n        </div>\n\n\n        <div class=\"col-xl-5 main_panel_right\">\n\n          <div class=\"row\">\n            <div class=\"col-xl-12 col-lg-6 col-md-6\">\n              <div class=\"block map_block\">\n                <!-- <div class=\"block_head\">\n                    <h3>Movement Services</h3>\n                  </div> -->\n                <div class=\"map_div\">\n                  <aol-map [width]=\"'100%'\" [height]=\"'238px'\" *ngIf=\"arriveLat && departLat\">\n                    <aol-interaction-default></aol-interaction-default>\n                    <aol-control-defaults></aol-control-defaults>\n                    <aol-control-fullscreen></aol-control-fullscreen>\n\n                    <aol-view [zoom]=\"4\">\n                      <aol-coordinate [x]=\"viewLat\" [y]=\"viewLon\" [srid]=\"'EPSG:4326'\"></aol-coordinate>\n                    </aol-view>\n\n                    <aol-layer-tile [opacity]=\"1\">\n                      <aol-source-osm></aol-source-osm>\n                    </aol-layer-tile>\n                    <aol-layer-vector>\n                      <aol-source-vector>\n                        <aol-feature>\n                          <aol-geometry-polygon>\n                            <aol-collection-coordinates [coordinates]=\"[[departLat, departLon], [arriveLat, arriveLon]]\"\n                              [srid]=\"'EPSG:4326'\">\n                            </aol-collection-coordinates>\n                          </aol-geometry-polygon>\n                          <aol-style>\n                            <aol-style-stroke [color]=\"'red'\" [width]=\"3\"></aol-style-stroke>\n                            <aol-style-fill [color]=\"[255,0,0,0.1]\"></aol-style-fill>\n                          </aol-style>\n                        </aol-feature>\n\n                      </aol-source-vector>\n                    </aol-layer-vector>\n                  </aol-map>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-xl-12 col-lg-6 col-md-6\">\n              <div class=\"block departure_block\">\n                <div class=\"block_head\">\n                  <h3><span>Departure Airport :</span> {{movement.departure_airport}}</h3>\n                </div>\n                <div class=\"a_d_block_inner\">\n                  <ul class=\"\">\n                    <li>\n                      <b>Local time : </b> 03:30z\n                    </li>\n                    <li>\n                      <b>TAF :</b> EDDS 301100Z 30/12/0112 32007KT 9999\n                      BKN013 BECMG 3012/3013 SCT0515 BECMG\n                      3017/3019 VRB03KT\n                    </li>\n                    <li>\n                      <b>TAF :</b> EDDS 301100Z 30/12/0112 32007KT 9999\n                      BKN013 BECMG 3012/3013 SCT0515 BECMG\n                      3017/3019 VRB03KT\n                    </li>\n                  </ul>\n                  <div class=\"a_d_b_actions d-flex\">\n                    <a href=\"#\" class=\"btn\">View</a>\n                    <a href=\"#\" class=\"btn\">Charts</a>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-xl-12 col-lg-6 col-md-6\">\n              <div class=\"block arrival_block\">\n                <div class=\"block_head\">\n                  <h3><span>Arrival Airport :</span> {{movement.arrival_airport}}</h3>\n                </div>\n                <div class=\"a_d_block_inner\">\n                  <ul class=\"\">\n                    <li>\n                      <b>Local time : </b> 03:30z\n                    </li>\n                    <li>\n                      <b>TAF :</b> EDDS 301100Z 30/12/0112 32007KT 9999\n                      BKN013 BECMG 3012/3013 SCT0515 BECMG\n                      3017/3019 VRB03KT\n                    </li>\n                    <li>\n                      <b>TAF :</b> EDDS 301100Z 30/12/0112 32007KT 9999\n                      BKN013 BECMG 3012/3013 SCT0515 BECMG\n                      3017/3019 VRB03KT\n                    </li>\n                  </ul>\n                  <div class=\"a_d_b_actions d-flex\">\n                    <a href=\"#\" class=\"btn\">View</a>\n                    <a href=\"#\" class=\"btn\">Charts</a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n<app-chat></app-chat>\n"

/***/ }),

/***/ "./src/app/admin/movement/movement.component.scss":
/*!********************************************************!*\
  !*** ./src/app/admin/movement/movement.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".message-board {\n  height: 200px;\n  overflow-y: scroll;\n  overflow-x: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZXgvRG9jdW1lbnRzL0dpdEh1Yi9mbGlnaHRvcHMvc3JjL2FwcC9hZG1pbi9tb3ZlbWVudC9tb3ZlbWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9tb3ZlbWVudC9tb3ZlbWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZXNzYWdlLWJvYXJkIHtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG59Il19 */"

/***/ }),

/***/ "./src/app/admin/movement/movement.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin/movement/movement.component.ts ***!
  \******************************************************/
/*! exports provided: MovementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovementComponent", function() { return MovementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin.service */ "./src/app/admin/admin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MovementComponent = /** @class */ (function () {
    function MovementComponent(route, adminService) {
        this.route = route;
        this.adminService = adminService;
    }
    MovementComponent.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.paramMap.get("id");
        this.currentTime = new Date().getTime();
        this.getMovement();
        this.getMessages();
    };
    MovementComponent.prototype.getMovement = function () {
        var _this = this;
        this.adminService.getMovement(this.id).subscribe(function (data) {
            _this.movement = data.data;
            _this.getDepartureNOTAM(_this.movement.departure_airport);
            _this.getArrivalNOTAM(_this.movement.arrival_airport);
            _this.getPIC();
            _this.getFO();
            _this.getOPS();
            _this.getHandler();
            _this.getDepartAirport();
            _this.getArriveAirport();
            console.log('movement ', _this.movement);
        });
    };
    MovementComponent.prototype.getDepartAirport = function () {
        var _this = this;
        this.adminService.getAirport(this.movement.departure_airport).subscribe(function (data) {
            console.log('depart airport ', data.data);
            _this.departLat = data.data[0].latitude;
            _this.departLon = data.data[0].longitude;
        });
    };
    MovementComponent.prototype.getArriveAirport = function () {
        var _this = this;
        this.adminService.getAirport(this.movement.arrival_airport).subscribe(function (data) {
            console.log('arrival airport ', data.data);
            _this.arriveLat = data.data[0].latitude;
            _this.arriveLon = data.data[0].longitude;
            if (_this.arriveLat && _this.departLat) {
                _this.viewLat = (_this.departLat + _this.arriveLat) / 2;
                _this.viewLon = (_this.departLon + _this.arriveLon) / 2;
                console.log('paaic ', _this.viewLat);
                console.log('paaic ', _this.viewLon);
            }
        });
    };
    MovementComponent.prototype.getPIC = function () {
        var _this = this;
        this.adminService.getCrew(this.movement.pic_crew).subscribe(function (data) {
            _this.pic = data.data;
            console.log('pic ', _this.pic);
        });
    };
    MovementComponent.prototype.getFO = function () {
        var _this = this;
        this.adminService.getCrew(this.movement.fo_crew).subscribe(function (data) {
            _this.fo = data.data;
            console.log('fo ', _this.fo);
        });
    };
    MovementComponent.prototype.getOPS = function () {
        var _this = this;
        this.adminService.getCrew(this.movement.ops_crew).subscribe(function (data) {
            _this.ops = data.data;
            console.log('ops ', _this.ops);
        });
    };
    MovementComponent.prototype.getHandler = function () {
        var _this = this;
        this.adminService.getHandlerDetails(this.movement.handler).subscribe(function (data) {
            _this.handler = data.data;
            console.log('handler ', _this.handler);
        });
    };
    MovementComponent.prototype.getDepartureNOTAM = function (id) {
        var _this = this;
        this.adminService.getNOTAM(id).subscribe(function (data) {
            _this.departureNOTAM = data.data.rows;
            console.log('departureNOTAM ', _this.departureNOTAM);
        });
    };
    MovementComponent.prototype.getArrivalNOTAM = function (id) {
        var _this = this;
        this.adminService.getNOTAM(id).subscribe(function (data) {
            _this.arrivalNOTAM = data.data.rows;
            console.log('arrivalNOTAM ', _this.arrivalNOTAM);
        });
    };
    MovementComponent.prototype.addMessage = function (type) {
        var _this = this;
        if (type === 'crew') {
            var message = this.crew_message;
            this.adminService.sendMail(this.pic.p_email, 'Message Board - Crew ' + this.id, message).subscribe(function (data) {
                console.log('pic mail ', data);
            });
            this.adminService.sendMail(this.ops.p_email, 'Message Board - Crew ' + this.id, message).subscribe(function (data) {
                console.log('ops mail ', data);
            });
            this.adminService.sendMail(this.fo.p_email, 'Message Board - Crew ' + this.id, message).subscribe(function (data) {
                console.log('fo mail ', data);
            });
        }
        else {
            var message = this.handler_message;
            this.adminService.sendMail(this.handler.email_primary, 'Message Board - Handler ' + this.id, message).subscribe(function (data) {
                console.log('handler mail ', data);
            });
        }
        this.adminService.addMboard(this.id, message, type).subscribe(function (data) {
            console.log('added ', data);
            _this.getMessages();
            _this.crew_message = '';
            _this.handler_message = '';
        });
    };
    MovementComponent.prototype.getMessages = function () {
        var _this = this;
        this.adminService.getMboard(this.id).subscribe(function (data) {
            console.log('get messages ', data);
            _this.messages = data.data;
        });
    };
    MovementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-movement',
            template: __webpack_require__(/*! ./movement.component.html */ "./src/app/admin/movement/movement.component.html"),
            styles: [__webpack_require__(/*! ./movement.component.scss */ "./src/app/admin/movement/movement.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]])
    ], MovementComponent);
    return MovementComponent;
}());



/***/ }),

/***/ "./src/app/admin/movements/movements.component.html":
/*!**********************************************************!*\
  !*** ./src/app/admin/movements/movements.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container-fluid page-body-wrapper\">\n  <app-side-nav></app-side-nav>\n  <!-- Main Content -->\n  <div class=\"main-panel\">\n    <div class=\"content-wrapper\">\n      <div class=\"page_header p_header_two d-flex\">\n        <h4><strong>Movements</strong></h4>\n      </div>\n\n      <div class=\"block table_block\">\n        <div class=\"table-responsive\">\n          <table class=\"table\">\n            <thead>\n              <tr>\n                <th class=\"c_l_name\">Reference</th>\n                <th class=\"c_l_name\">Aircraft</th>\n                <th class=\"c_l_movement\">Route</th>\n                <th class=\"c_l_status\">Flight Time</th>\n                <th class=\"c_l_action\">Actions</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let movement of movements\">\n                <td class=\"c_l_name\">\n                  <a routerLink=\"/admin/crew/{{movement._id}}\">\n                    {{movement.reference_id}}\n                  </a>\n                </td>\n                <td class=\"c_l_name\">\n                  {{movement.aircraft}}\n                </td>\n                <td class=\"c_l_movement\">{{movement.departure_airport}} <i class=\"flaticon-right-arrow\"></i>\n                  {{movement.arrival_airport}}</td>\n                <td class=\"c_l_status\">{{movement.departuretime*1000 | date : \"short\"}} --\n                  {{movement.arrivaltime*1000 | date : \"short\"}}</td>\n                <td class=\"c_l_action\">\n                  <div class=\"action_btns\">\n                    <a href=\"#\" class=\"edit_btn\"><i class=\"fa fa-download\"\n                        (click)=\"download(movement.route)\"></i><span>Download</span></a>\n                    <a href=\"#\" class=\"delete_btn\"\n                      *ngIf=\"movement.filed !== true && next3Days > movement.departuretime*1000 && today < movement.departuretime*1000\"><i\n                        class=\"fa fa-file\" (click)=\"fileFPL(movement)\"></i><span>File Flight Plan</span></a>\n                  </div>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<app-chat></app-chat>\n"

/***/ }),

/***/ "./src/app/admin/movements/movements.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/admin/movements/movements.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL21vdmVtZW50cy9tb3ZlbWVudHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/movements/movements.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/movements/movements.component.ts ***!
  \********************************************************/
/*! exports provided: MovementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovementsComponent", function() { return MovementsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../admin.service */ "./src/app/admin/admin.service.ts");
/* harmony import */ var bulma_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bulma-toast */ "./node_modules/bulma-toast/dist/bulma-toast.min.js");
/* harmony import */ var bulma_toast__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bulma_toast__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MovementsComponent = /** @class */ (function () {
    function MovementsComponent(adminService) {
        this.adminService = adminService;
    }
    MovementsComponent.prototype.ngOnInit = function () {
        this.getFlight();
        this.today = new Date();
        this.addDays(this.today, 3);
        Object(bulma_toast__WEBPACK_IMPORTED_MODULE_2__["toast"])({
            message: "Hello There",
            type: "is-success",
            dismissible: true,
            pauseOnHover: true
        });
    };
    MovementsComponent.prototype.addDays = function (date, days) {
        var result = new Date(date);
        result.setDate(result.getDate() + days);
        this.next3Days = result;
        console.log(this.next3Days);
    };
    MovementsComponent.prototype.getFlight = function () {
        var _this = this;
        this.adminService.getMovements().subscribe(function (data) {
            _this.movements = data.data;
            console.log('movements ', _this.movements);
        });
    };
    MovementsComponent.prototype.fileFPL = function (movement) {
        var _this = this;
        this.subFileFPL = this.adminService.fileFPL(movement.route).subscribe(function (data) {
            console.log('fileFPL ', data);
            if (data.data.error) {
                Object(bulma_toast__WEBPACK_IMPORTED_MODULE_2__["toast"])({
                    message: data.data.error,
                    type: "is-danger",
                    dismissible: true,
                    pauseOnHover: true
                });
            }
            else {
                _this.flightID = data.data.flightid;
                if (_this.flightID) {
                    _this.adminService.updateFiled(movement._id, true).subscribe(function (data) {
                        _this.getFlight();
                        console.log('update filed ', data);
                        Object(bulma_toast__WEBPACK_IMPORTED_MODULE_2__["toast"])({
                            message: "Flight Plan Filed Successfully",
                            type: "is-success",
                            dismissible: true,
                            pauseOnHover: true
                        });
                    });
                    _this.cancelFPL();
                }
            }
        });
    };
    MovementsComponent.prototype.cancelFPL = function () {
        this.adminService.cancelFPL(this.flightID).subscribe(function (data) {
            console.log('cancelFPL ', data);
            Object(bulma_toast__WEBPACK_IMPORTED_MODULE_2__["toast"])({
                message: "Flight Plan Cancelled Successfully",
                type: "is-success",
                dismissible: true,
                pauseOnHover: true
            });
        });
    };
    MovementsComponent.prototype.download = function (id) {
        console.log(id);
        this.adminService.downloadBriefing(id).subscribe();
    };
    MovementsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-movements',
            template: __webpack_require__(/*! ./movements.component.html */ "./src/app/admin/movements/movements.component.html"),
            styles: [__webpack_require__(/*! ./movements.component.scss */ "./src/app/admin/movements/movements.component.scss")]
        }),
        __metadata("design:paramtypes", [_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"]])
    ], MovementsComponent);
    return MovementsComponent;
}());



/***/ }),

/***/ "./src/app/admin/new-aircraft/new-aircraft.component.html":
/*!****************************************************************!*\
  !*** ./src/app/admin/new-aircraft/new-aircraft.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container\">\n  <div class=\"columns\">\n    <div class=\"column is-3\">\n      <app-side-nav></app-side-nav>\n    </div>\n    <div class=\"column is-9\">\n      <h3 class=\"title\">Add Aircraft</h3>\n      <ul class=\"steps\">\n        <li class=\"steps-segment is-active\" data-step=\"1\">\n          <span class=\"steps-marker\"></span>\n        </li>\n        <li class=\"steps-segment\" data-step=\"2\">\n          <span class=\"steps-marker\"></span>\n        </li>\n        <li class=\"steps-segment\" data-step=\"3\">\n          <span class=\"steps-marker\"></span>\n        </li>\n        <li class=\"steps-segment\" data-step=\"4\">\n          <span class=\"steps-marker\"></span>\n        </li>\n        <li class=\"steps-segment\" data-step=\"5\">\n          <span class=\"steps-marker\"></span>\n        </li>\n        <li class=\"steps-segment\" data-step=\"6\">\n          <span class=\"steps-marker\"></span>\n        </li>\n      </ul>\n      <form action=\"#\">\n        <section class=\"\" id=\"step-1\">\n          <!-- <h3 class=\"title\">Live Leg</h3> -->\n          <div class=\"columns\">\n            <div class=\"column is-4\">\n              <div class=\"field\">\n                <label class=\"label\">Registration Mark</label>\n                <div class=\"control\">\n                  <input class=\"input\" type=\"text\" [(ngModel)]=\"callsign\" name=\"callsign\">\n                </div>\n              </div>\n            </div>\n            <div class=\"column is-4\">\n              <div class=\"field\">\n                <label class=\"label\">Aircraft Manufacturer</label>\n                <div class=\"control\">\n                  <div class=\"select\">\n                    <select [(ngModel)]=\"manufacturer\" name=\"manufacturer\" (change)=\"getAircraftTypes()\">\n                      <option *ngFor=\"let manufacturer of manufacturers\" [ngValue]=\"manufacturer\">{{manufacturer.name}}</option>\n                    </select>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"column is-4\">\n              <div class=\"field\">\n                <label class=\"label\">Aircraft Type</label>\n                <div class=\"control\">\n                  <div class=\"select\">\n                    <select [(ngModel)]=\"icaotype\" name=\"icaotype\">\n                      <option>Aircraft Type</option>\n                      <option *ngFor=\"let aircraftType of aircraftTypes\" [ngValue]=\"aircraftType\">{{aircraftType.type}}\n                      </option>\n                    </select>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"columns\">\n            <div class=\"column is-4\">\n              <div class=\"field\">\n                <label class=\"label\">Aircraft Model</label>\n                <div class=\"control\">\n                  <input type=\"text\" [(ngModel)]=\"modelname\" class=\"input\" name=\"modelname\">\n                </div>\n              </div>\n            </div>\n            <div class=\"column is-4\">\n              <div class=\"field\">\n                <label class=\"label\">Year of Construction</label>\n                <div class=\"control\">\n                  <input type=\"text\" [(ngModel)]=\"year\" class=\"input\" name=\"year\">\n\n                </div>\n              </div>\n            </div>\n            <div class=\"column is-4\">\n              <div class=\"field\">\n                <label class=\"label\">Homebase</label>\n                <div class=\"control\">\n                  <div class=\"dropdown\" id=\"base\">\n                    <div class=\"dropdown-trigger\">\n                      <input class=\"input\" name=\"homebase\" autocomplete=\"off\" [(ngModel)]=\"homebase.name\"\n                        (input)=\"getAirports($event.target.value, 'base')\" type=\"text\"\n                        placeholder=\"Enter Homebase\" aria-haspopup=\"true\">\n                    </div>\n                    <div class=\"dropdown-menu\" role=\"menu\">\n                      <div class=\"dropdown-content\">\n                        <a (click)=\"homebase = airport;hideSearch()\" class=\"dropdown-item\" *ngFor=\"let airport of airports\">\n                          {{airport.name}} ({{airport.icao}})\n                        </a>\n                        <span *ngIf=\"!airports\">Loading...</span>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"columns is-multiline\">\n            <div class=\"column is-6\">\n              <div class=\"field\">\n                <label class=\"label\">Fuel Type</label>\n                <div class=\"control\">\n                  <label class=\"radio\">\n                    <input type=\"radio\" name=\"answer\" [(ngModel)]=\"fueltype\" value=\"AVGAS 100LL\" name=\"fueltype\">\n                    AVGAS 100LL\n                  </label>\n                  <label class=\"radio\">\n                    <input type=\"radio\" name=\"answer\" [(ngModel)]=\"fueltype\" value=\"Jet A-1\" name=\"fueltype\">\n                    Jet A-1\n                  </label>\n                </div>\n              </div>\n            </div>\n            <div class=\"column is-6\">\n              <div class=\"field\">\n                <label class=\"label\">Aircraft Mass Unit</label>\n                <div class=\"control\">\n                  <label class=\"radio\">\n                    <input type=\"radio\" name=\"answer\" [(ngModel)]=\"wb.massunitname\" value=\"kg\" name=\"massunitname\">\n                    kg\n                  </label>\n                  <label class=\"radio\">\n                    <input type=\"radio\" name=\"answer\" [(ngModel)]=\"wb.massunitname\" value=\"lb\" name=\"massunitname\">\n                    lb\n                  </label>\n                </div>\n              </div>\n            </div>\n            <div class=\"column is-6\">\n              <div class=\"field\">\n                <label class=\"label\">Aircraft Mass ARM Unit</label>\n                <div class=\"control\">\n                  <label class=\"radio\">\n                    <input type=\"radio\" name=\"answer\" [(ngModel)]=\"wb.armunitname\" value=\"in\" name=\"armunitname\">\n                    in\n                  </label>\n                  <label class=\"radio\">\n                    <input type=\"radio\" name=\"answer\" [(ngModel)]=\"wb.armunitname\" value=\"cm\" name=\"armunitname\">\n                    cm\n                  </label>\n                </div>\n              </div>\n            </div>\n            <div class=\"column is-6\">\n              <div class=\"field\">\n                <label class=\"label\">Speed Unit</label>\n                <div class=\"control\">\n                  <label class=\"radio\">\n                    <input type=\"radio\" name=\"answer\" [(ngModel)]=\"speedunit\" value=\"kts\" name=\"speedunit\">\n                    kts\n                  </label>\n                  <label class=\"radio\">\n                    <input type=\"radio\" name=\"answer\" [(ngModel)]=\"speedunit\" value=\"kph\" name=\"speedunit\">\n                    kph\n                  </label>\n                  <label class=\"radio\">\n                    <input type=\"radio\" name=\"answer\" [(ngModel)]=\"speedunit\" value=\"mph\" name=\"speedunit\">\n                    mph\n                  </label>\n                </div>\n              </div>\n            </div>\n            <div class=\"column is-6\">\n              <div class=\"field\" id=\"fuel_unit\">\n                <label class=\"label\">Fuel Unit</label>\n                <div class=\"control\">\n                  <label class=\"radio\">\n                    <input type=\"radio\" name=\"answer\" [(ngModel)]=\"fuelunit\" value=\"l\" name=\"fuelunit\">\n                    liter\n                  </label>\n                  <label class=\"radio\">\n                    <input type=\"radio\" name=\"answer\" [(ngModel)]=\"fuelunit\" value=\"usgal\" name=\"fuelunit\">\n                    US gal\n                  </label>\n                  <label class=\"radio\">\n                    <input type=\"radio\" name=\"answer\" [(ngModel)]=\"fuelunit\" value=\"lb\" name=\"fuelunit\">\n                    lb\n                  </label>\n                  <label class=\"radio\">\n                    <input type=\"radio\" name=\"answer\" [(ngModel)]=\"fuelunit\" value=\"kg\" name=\"fuelunit\">\n                    kg\n                  </label>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"column is-12\">\n            <div class=\"field\" id=\"cargo\">\n              <label class=\"label\">Comment</label>\n              <div class=\"control\">\n                <textarea name=\"comment\" id=\"comment\" [(ngModel)]=\"comment\" class=\"textarea\"></textarea>\n              </div>\n            </div>\n          </div>\n        </section>\n        <section class=\"is-hidden\" id=\"step-2\">\n          <!-- <h3 class=\"title\">Live Leg</h3> -->\n          <div class=\"columns is-multiline\">\n            <div class=\"column is-6\">\n              <div class=\"field\">\n                <label class=\"label\">Equipment String</label>\n                <div class=\"control\">\n                  <input class=\"input\" type=\"text\" [(ngModel)]=\"equipment\" name=\"equipment\">\n                </div>\n              </div>\n            </div>\n            <div class=\"column is-6\">\n              <div class=\"field\">\n                <label class=\"label\">Transponder</label>\n                <div class=\"control\">\n                  <input class=\"input\" type=\"text\" [(ngModel)]=\"transponder\" name=\"transponder\">\n                </div>\n              </div>\n            </div>\n            <div class=\"column is-6\">\n              <div class=\"field\">\n                <label class=\"label\">Additional Communication Equipment (COM)</label>\n                <div class=\"control\">\n                  <input class=\"input\" type=\"text\" [(ngModel)]=\"com\" name=\"com\">\n                </div>\n              </div>\n            </div>\n            <div class=\"column is-6\">\n              <div class=\"field\">\n                <label class=\"label\">Additional Navigation Equipment (NAV)</label>\n                <div class=\"control\">\n                  <input class=\"input\" type=\"text\" [(ngModel)]=\"nav\" name=\"nav\">\n                </div>\n              </div>\n            </div>\n            <div class=\"column is-6\">\n              <div class=\"field\">\n                <label class=\"label\">Additional Data Equipment (DAT)</label>\n                <div class=\"control\">\n                  <input class=\"input\" type=\"text\" [(ngModel)]=\"dat\" name=\"dat\">\n                </div>\n              </div>\n            </div>\n          </div>\n\n        </section>\n        <section class=\"is-hidden\" id=\"step-3\">\n          <!-- <h3 class=\"title\">Live Leg</h3> -->\n          <div class=\"columns is-multiline\">\n            <div class=\"column is-6\">\n              <div class=\"field\">\n                <label class=\"label\">Pilot in Command (PIC)</label>\n                <div class=\"control\">\n                  <input class=\"input\" type=\"text\" [(ngModel)]=\"picname\" name=\"picname\">\n                </div>\n              </div>\n            </div>\n            <div class=\"column is-6\">\n              <div class=\"field\">\n                <label class=\"label\">Crew Contact Number</label>\n                <div class=\"control\">\n                  <input class=\"input\" type=\"text\" [(ngModel)]=\"crewcontact\" name=\"crewcontact\">\n                </div>\n              </div>\n            </div>\n            <div class=\"column is-6\">\n              <div class=\"field\">\n                <label class=\"label\">Color Markings</label>\n                <div class=\"control\">\n                  <input class=\"input\" type=\"text\" [(ngModel)]=\"colormarking\" name=\"colormarking\">\n                </div>\n              </div>\n            </div>\n\n            <div class=\"column is-6\">\n              <div class=\"field\">\n                <label class=\"label\">Dinghies</label>\n                <div class=\"control\">\n                  <input type=\"text\" [(ngModel)]=\"dinghies\" class=\"input\" name=\"dinghies\">\n                </div>\n              </div>\n            </div>\n            <div class=\"column is-6\">\n              <div class=\"field\">\n                <label class=\"label\">Dinghy Capacity</label>\n                <div class=\"control\">\n                  <input type=\"text\" [(ngModel)]=\"dinghycapacity\" class=\"input\" name=\"dinghycapacity\">\n                </div>\n              </div>\n            </div>\n            <div class=\"column is-6\">\n              <div class=\"field\" id=\"distance_unit\">\n                <label class=\"label\">Dinghy Color</label>\n                <div class=\"control\">\n                  <label class=\"radio\">\n                    <input type=\"radio\" [(ngModel)]=\"dinghycolor\" value=\"yellow\" name=\"dinghycolor\">\n                    Yellow\n                  </label>\n                  <label class=\"radio\">\n                    <input type=\"radio\" [(ngModel)]=\"dinghycolor\" value=\"orange\" name=\"dinghycolor\">\n                    Orange\n                  </label>\n                  <label class=\"radio\">\n                    <input type=\"radio\" [(ngModel)]=\"dinghycolor\" value=\"red\" name=\"dinghycolor\">\n                    Red\n                  </label>\n                  <label class=\"checkbox\">\n                    <input type=\"checkbox\" [(ngModel)]=\"dinghycover\" value=\"true\" name=\"dinghycover\">\n                    With Cover\n                  </label>\n                </div>\n              </div>\n            </div>\n            <div class=\"column is-6\">\n              <div class=\"field\" id=\"distance_unit\">\n                <label class=\"label\">Emergency Radios</label>\n                <div class=\"control\">\n                  <label class=\"checkbox\">\n                    <input type=\"checkbox\" [(ngModel)]=\"uhf\" value=\"yes\" name=\"uhf\">\n                    UHF\n                  </label>\n                  <label class=\"checkbox\">\n                    <input type=\"checkbox\" [(ngModel)]=\"vhf\" value=\"yes\" name=\"vhf\">\n                    VHF\n                  </label>\n                  <label class=\"checkbox\">\n                    <input type=\"checkbox\" [(ngModel)]=\"elt\" value=\"yes\" name=\"elt\">\n                    ELT\n                  </label>\n                </div>\n              </div>\n            </div>\n            <div class=\"column is-6\">\n              <div class=\"field\" id=\"distance_unit\">\n                <label class=\"label\">Survival</label>\n                <div class=\"control\">\n                  <label class=\"checkbox\">\n                    <input type=\"checkbox\" [(ngModel)]=\"standard\" value=\"yes\" name=\"standard\">\n                    Standard\n                  </label>\n                  <label class=\"checkbox\">\n                    <input type=\"checkbox\" [(ngModel)]=\"polar\" value=\"yes\" name=\"polar\">\n                    Polar\n                  </label>\n                  <label class=\"checkbox\">\n                    <input type=\"checkbox\" [(ngModel)]=\"desert\" value=\"yes\" name=\"desert\">\n                    Desert\n                  </label>\n                  <label class=\"checkbox\">\n                    <input type=\"checkbox\" [(ngModel)]=\"maritime\" value=\"yes\" name=\"maritime\">\n                    Maritime\n                  </label>\n                  <label class=\"checkbox\">\n                    <input type=\"checkbox\" [(ngModel)]=\"jungle\" value=\"yes\" name=\"jungle\">\n                    Jungle\n                  </label>\n                </div>\n              </div>\n            </div>\n            <div class=\"column is-6\">\n              <div class=\"field\" id=\"life_jackets\">\n                <label class=\"label\">Life Jackets</label>\n                <div class=\"control\">\n                  <label class=\"checkbox\">\n                    <input type=\"checkbox\" [(ngModel)]=\"standard\" value=\"yes\" name=\"standard\">\n                    Standard\n                  </label>\n                  <label class=\"checkbox\">\n                    <input type=\"checkbox\" [(ngModel)]=\"light\" value=\"yes\" name=\"light\">\n                    Light\n                  </label>\n                  <label class=\"checkbox\">\n                    <input type=\"checkbox\" [(ngModel)]=\"fluorescent\" value=\"yes\" name=\"fluorescent\">\n                    Fluorescent\n                  </label>\n                  <label class=\"checkbox\">\n                    <input type=\"checkbox\" [(ngModel)]=\"life_uhf\" value=\"yes\" name=\"life_uhf\">\n                    UHF\n                  </label>\n                  <label class=\"checkbox\">\n                    <input type=\"checkbox\" [(ngModel)]=\"life_vhf\" value=\"yes\" name=\"life_vhf\">\n                    VHF\n                  </label>\n                </div>\n              </div>\n            </div>\n          </div>\n\n        </section>\n        <section class=\"is-hidden\" id=\"step-4\">\n          <!-- <h3 class=\"title\">Live Leg</h3> -->\n          <div class=\"columns is-multiline\">\n            <div class=\"column is-6\">\n              <div class=\"field\">\n                <label class=\"label\">Maximum Takeoff Mass (kg)</label>\n                <div class=\"control\">\n                  <input class=\"input\" type=\"text\" [(ngModel)]=\"wb.mtom\" name=\"mtom\">\n                </div>\n              </div>\n            </div>\n            <div class=\"column is-6\">\n              <div class=\"field\">\n                <label class=\"label\">Maximum Landing Mass (kg)</label>\n                <div class=\"control\">\n                  <input class=\"input\" type=\"text\" [(ngModel)]=\"wb.mlm\" name=\"mlm\">\n                </div>\n              </div>\n            </div>\n            <div class=\"column is-6\">\n              <div class=\"field\">\n                <label class=\"label\">Maximum Ramp Mass (kg)</label>\n                <div class=\"control\">\n                  <input class=\"input\" type=\"text\" [(ngModel)]=\"wb.mrm\" name=\"mrm\">\n                </div>\n              </div>\n            </div>\n\n            <div class=\"column is-6\">\n              <div class=\"field\">\n                <label class=\"label\">Maximum Zero Fuel Mass (kg)</label>\n                <div class=\"control\">\n                  <input type=\"text\" [(ngModel)]=\"max_zerofuel\" class=\"input\" name=\"max_zerofuel\">\n                </div>\n              </div>\n            </div>\n          </div>\n\n        </section>\n\n        <section class=\"is-hidden\" id=\"step-5\">\n\n          <div class=\"columns is-multiline\">\n\n            <div class=\"column is-6\">\n              <div class=\"field\" id=\"distance_unit\">\n                <label class=\"label\">Distance Unit</label>\n                <div class=\"control\">\n                  <label class=\"radio\">\n                    <input type=\"radio\" name=\"answer\" [(ngModel)]=\"distances.unitname\" value=\"liter\" name=\"unitname\">\n                    feet\n                  </label>\n                  <label class=\"radio\">\n                    <input type=\"radio\" name=\"answer\" [(ngModel)]=\"distances.unitname\" value=\"US gal\" name=\"unitname\">\n                    meter\n                  </label>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"column is-6\">\n              <div class=\"field\">\n                <label class=\"label\">Rotation Speed Vr (kts)</label>\n                <div class=\"control\">\n                  <input type=\"text\" [(ngModel)]=\"distances.vrotate\" class=\"input\" name=\"vrotate\">\n\n                </div>\n              </div>\n            </div>\n            <div class=\"column is-12\">\n              <a class=\"button is-success\" (click)=\"addTakeOff()\">\n                Add TakeOff Entry\n              </a>\n              <table class=\"table is-bordered is-fullwidth is-striped is-hoverable\">\n                <thead>\n                  <tr>\n                    <th>Density Altitude</th>\n                    <th>Ground Roll M</th>\n                    <th>50ft Obstacle M</th>\n                    <th></th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let takeOff of distances.takeoff; let id = index\">\n                    <td>\n                      <span (keyup)=\"changeTakeOffValue(id, 'da', $event)\"\n                        (blur)=\"updateTakeOffList(id, 'da', $event)\"\n                        contenteditable=\"true\">{{takeOff.da}}</span>\n                    </td>\n                    <td>\n                      <span contenteditable=\"true\" (keyup)=\"changeTakeOffValue(id, 'gnddist', $event)\"\n                        (blur)=\"updateTakeOffList(id, 'gnddist', $event)\">{{takeOff.gnddist}}</span>\n                    </td>\n                    <td>\n                      <span contenteditable=\"true\" (keyup)=\"changeTakeOffValue(id, 'obstdist', $event)\"\n                        (blur)=\"updateTakeOffList(id, 'obstdist', $event)\">{{takeOff.obstdist}}</span>\n                    </td>\n                    <td>\n                      <button type=\"button\" class=\"button is-danger\" (click)=\"removeTakeOff(id)\">Remove</button>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n            <div class=\"column is-12\">\n              <a class=\"button is-success\" (click)=\"addLanding()\">\n                Add Landing Entry\n              </a>\n              <table class=\"table is-bordered is-fullwidth is-striped is-hoverable\">\n                <thead>\n                  <tr>\n                    <th>Density Altitude</th>\n                    <th>Ground Roll M</th>\n                    <th>50ft Obstacle M</th>\n                    <th></th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let landing of distances.landing; let id = index\">\n                    <td>\n                      <span (keyup)=\"changeLandingValue(id, 'da', $event)\"\n                        (blur)=\"updateLandingList(id, 'da', $event)\"\n                        contenteditable=\"true\">{{landing.da}}</span>\n                    </td>\n                    <td>\n                      <span contenteditable=\"true\" (keyup)=\"changeLandingValue(id, 'gnddist', $event)\"\n                        (blur)=\"updateLandingList(id, 'gnddist', $event)\">{{landing.gnddist}}</span>\n                    </td>\n                    <td>\n                      <span contenteditable=\"true\" (keyup)=\"changeLandingValue(id, 'obstdist', $event)\"\n                        (blur)=\"updateLandingList(id, 'obstdist', $event)\">{{landing.obstdist}}</span>\n                    </td>\n                    <td>\n                      <button type=\"button\" class=\"button is-danger\" (click)=\"removeLanding(id)\">Remove</button>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n            <div class=\"column is-12\">\n              <div class=\"field\">\n                <label class=\"label\">Runway Visual Range (RVR, meters)</label>\n                <div class=\"control\">\n                  <input type=\"text\" [(ngModel)]=\"rvr\" class=\"input\" name=\"rvr\">\n\n                </div>\n              </div>\n            </div>\n          </div>\n        </section>\n        <section class=\"is-hidden\" id=\"step-6\">\n          <!-- <h3 class=\"title\">Live Leg</h3> -->\n          <div class=\"columns is-multiline\">\n            <div class=\"column is-6\">\n              <div class=\"field\">\n                <label class=\"label\">Default Maximum Flight Level</label>\n                <div class=\"control\">\n                  <input class=\"input\" type=\"text\" [(ngModel)]=\"defaultmaxfl\" name=\"defaultmaxfl\">\n                </div>\n              </div>\n            </div>\n            <div class=\"column is-6\">\n              <div class=\"field\">\n                <label class=\"label\">Horse Power Per Engine (BHP)</label>\n                <div class=\"control\">\n                  <input class=\"input\" type=\"text\" [(ngModel)]=\"maxbhp\" name=\"maxbhp\">\n                </div>\n              </div>\n            </div>\n            <div class=\"column is-6\">\n              <div class=\"field\">\n                <label class=\"label\">Fixed Taxi Fuel</label>\n                <div class=\"control\">\n                  <input class=\"input\" type=\"text\" [(ngModel)]=\"taxifuel\" name=\"taxifuel\">\n                </div>\n              </div>\n            </div>\n            <div class=\"column is-6\">\n              <div class=\"field\">\n                <label class=\"label\">Variable Taxi Fuel</label>\n                <div class=\"control\">\n                  <input class=\"input\" type=\"text\" [(ngModel)]=\"taxifuelflow\" name=\"taxifuelflow\">\n                </div>\n              </div>\n            </div>\n\n            <div class=\"column is-6\">\n              <div class=\"field\">\n                <label class=\"label\">Contingency Fuel</label>\n                <div class=\"control\">\n                  <input type=\"text\" [(ngModel)]=\"contingencyfuel\" class=\"input\" name=\"contingencyfuel\">\n                </div>\n              </div>\n            </div>\n            <div class=\"column is-6\">\n              <div class=\"field\" id=\"distance_unit\">\n                <label class=\"label\">Performance Model</label>\n                <div class=\"control\">\n                  <label class=\"radio\">\n                    <input type=\"radio\" [(ngModel)]=\"performancemodel\" value=\"yellow\" name=\"performancemodel\">\n                    Fixed Pitch\n                  </label>\n                  <label class=\"radio\">\n                    <input type=\"radio\" [(ngModel)]=\"performancemodel\" value=\"orange\" name=\"performancemodel\">\n                    Constant Speed\n                  </label>\n                  <label class=\"radio\">\n                    <input type=\"radio\" [(ngModel)]=\"performancemodel\" value=\"red\" name=\"performancemodel\">\n                    Turboprop\n                  </label>\n                  <label class=\"radio\">\n                    <input type=\"radio\" [(ngModel)]=\"performancemodel\" value=\"red\" name=\"performancemodel\">\n                    Turbojet\n                  </label>\n                </div>\n              </div>\n            </div>\n          </div>\n\n        </section>\n\n        <div class=\"columns\">\n          <div class=\"column is-6\">\n            <div class=\"field is-grouped\">\n              <div class=\"control\" *ngIf=\"!first\">\n                <button class=\"button is-link\" (click)=\"prev()\">Previous</button>\n              </div>\n              <div class=\"control\">\n                <button class=\"button is-link\" (click)=\"next()\" *ngIf=\"!last\">Next</button>\n                <button class=\"button is-link\" (click)=\"addAircraft()\" id=\"addBtn\" *ngIf=\"last\">Submit</button>\n              </div>\n              <div class=\"control\">\n                <button class=\"button is-text\" type=\"reset\" id=\"reset\">Reset</button>\n                <button class=\"button is-text is-hidden\" type=\"button\" id=\"cancel\" (click)=\"cancel()\">Cancel</button>\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </form>\n    </div>\n\n\n\n  </div>\n</div>\n<app-chat></app-chat>"

/***/ }),

/***/ "./src/app/admin/new-aircraft/new-aircraft.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/admin/new-aircraft/new-aircraft.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL25ldy1haXJjcmFmdC9uZXctYWlyY3JhZnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/new-aircraft/new-aircraft.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/new-aircraft/new-aircraft.component.ts ***!
  \**************************************************************/
/*! exports provided: NewAircraftComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewAircraftComponent", function() { return NewAircraftComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../admin.service */ "./src/app/admin/admin.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bulma_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bulma-toast */ "./node_modules/bulma-toast/dist/bulma-toast.min.js");
/* harmony import */ var bulma_toast__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bulma_toast__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewAircraftComponent = /** @class */ (function () {
    function NewAircraftComponent(adminService, router, route) {
        this.adminService = adminService;
        this.router = router;
        this.route = route;
        this.takeOffList = [];
        this.landingList = [];
        this.last = false;
        this.current = 1;
        this.first = true;
        this.takeOffCount = 0;
        this.landingCount = 0;
        this.homebase = {
            name: '',
            icao: ''
        };
        this.wb = {
            massunitname: "",
            mtom: 0,
            mlm: 0,
            mrm: 0,
            armunitname: "",
        };
        this.distances = {
            unitname: "",
            vrotate: 0,
            takeoff: [],
            landing: []
        };
    }
    NewAircraftComponent.prototype.ngOnInit = function () {
        this.getManufacturers();
    };
    NewAircraftComponent.prototype.updateTakeOffList = function (id, property, event) {
        var editField = event.target.textContent;
        this.takeOffList[id][property] = editField;
    };
    NewAircraftComponent.prototype.updateLandingList = function (id, property, event) {
        var editField = event.target.textContent;
        this.landingList[id][property] = editField;
    };
    NewAircraftComponent.prototype.removeTakeOff = function (id) {
        this.distances.takeoff.splice(id, 1);
    };
    NewAircraftComponent.prototype.removeLanding = function (id) {
        this.distances.landing.splice(id, 1);
    };
    NewAircraftComponent.prototype.addTakeOff = function () {
        this.takeOffCount = this.takeOffCount + 1;
        var takeOff = { id: this.takeOffCount, da: '0', gnddist: '0', obstdist: '0' };
        this.distances.takeoff.push(takeOff);
    };
    NewAircraftComponent.prototype.addLanding = function () {
        this.landingCount = this.landingCount + 1;
        var landing = { id: this.landingCount, da: '0', gnddist: '0', obstdist: '0' };
        this.distances.landing.push(landing);
    };
    NewAircraftComponent.prototype.changeTakeOffValue = function (id, property, event) {
        this.editField = event.target.textContent;
        console.log('edit ', this.takeOffList);
    };
    NewAircraftComponent.prototype.changeLandingValue = function (id, property, event) {
        this.editField = event.target.textContent;
        console.log('edit ', this.landingList);
    };
    NewAircraftComponent.prototype.getAirports = function (keyword, type) {
        var _this = this;
        if (keyword.length > 2) {
            this.airports = [];
            jquery__WEBPACK_IMPORTED_MODULE_3__('#' + type).addClass('is-active');
            this.adminService.findAirports(keyword).subscribe(function (data) {
                console.log('search ', data.data);
                _this.airports = data.data;
            });
        }
    };
    NewAircraftComponent.prototype.next = function () {
        this.first = false;
        jquery__WEBPACK_IMPORTED_MODULE_3__(".steps-segment[data-step='" + this.current + "']").removeClass("is-active");
        jquery__WEBPACK_IMPORTED_MODULE_3__("#step-" + this.current).addClass("is-hidden");
        this.current = this.current + 1;
        if (this.current === 6) {
            this.last = true;
        }
        jquery__WEBPACK_IMPORTED_MODULE_3__(".steps-segment[data-step='" + this.current + "']").addClass("is-active");
        jquery__WEBPACK_IMPORTED_MODULE_3__("#step-" + this.current).removeClass("is-hidden");
    };
    NewAircraftComponent.prototype.prev = function () {
        this.last = false;
        jquery__WEBPACK_IMPORTED_MODULE_3__(".steps-segment[data-step='" + this.current + "']").removeClass("is-active");
        jquery__WEBPACK_IMPORTED_MODULE_3__("#step-" + this.current).addClass("is-hidden");
        this.current = this.current - 1;
        if (this.current === 1) {
            this.first = true;
        }
        jquery__WEBPACK_IMPORTED_MODULE_3__(".steps-segment[data-step='" + this.current + "']").addClass("is-active");
        jquery__WEBPACK_IMPORTED_MODULE_3__("#step-" + this.current).removeClass("is-hidden");
    };
    NewAircraftComponent.prototype.addAircraft = function () {
        var _this = this;
        this.adminService.addAircraft(this.callsign, this.manufacturer.name, this.manufacturer.id, this.icaotype.icao, this.icaotype.id, this.modelname, this.modelname, this.year, this.homebase.icao, this.fueltype, this.speedunit, this.fuelunit, this.comment, this.equipment, this.transponder, this.com, this.nav, this.dat, this.picname, this.crewcontact, this.colormarking, this.dinghies, this.dinghycapacity, this.dinghycolor, this.dinghycover, this.emergencyradio, this.survival, this.lifejackets, this.wb, this.distances, this.defaultmaxfl, this.maxbhp, this.taxifuel, this.taxifuelflow, this.contingencyfuel).subscribe(function (data) {
            console.log('Aircraft Added ', data);
            _this.adminService.addAircraftDB(data.data).subscribe(function (data) {
                // this.navigate('/admin/aircrafts')
                jquery__WEBPACK_IMPORTED_MODULE_3__('form').trigger("reset");
                Object(bulma_toast__WEBPACK_IMPORTED_MODULE_4__["toast"])({
                    message: "Aircraft Created",
                    type: "is-success",
                    dismissible: true,
                    pauseOnHover: true
                });
            });
        }, function (error) {
            jquery__WEBPACK_IMPORTED_MODULE_3__('#addBtn').removeClass('is-loading');
            console.log(error);
        });
    };
    NewAircraftComponent.prototype.getManufacturers = function () {
        var _this = this;
        this.adminService.getManufacturers().subscribe(function (data) {
            _this.manufacturers = data.data;
            console.log('Manufacturers ', _this.manufacturers);
        });
    };
    NewAircraftComponent.prototype.getAircraftTypes = function () {
        var _this = this;
        this.adminService.getAircraftTypes(this.manufacturer.id).subscribe(function (data) {
            _this.aircraftTypes = data.data;
            console.log('Aircraft Types ', _this.aircraftTypes);
        });
    };
    NewAircraftComponent.prototype.navigate = function (link) {
        this.router.navigate([link]);
    };
    NewAircraftComponent.prototype.hideSearch = function () {
        console.log(this.homebase);
        jquery__WEBPACK_IMPORTED_MODULE_3__('.dropdown').removeClass('is-active');
    };
    NewAircraftComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-aircraft',
            template: __webpack_require__(/*! ./new-aircraft.component.html */ "./src/app/admin/new-aircraft/new-aircraft.component.html"),
            styles: [__webpack_require__(/*! ./new-aircraft.component.scss */ "./src/app/admin/new-aircraft/new-aircraft.component.scss")]
        }),
        __metadata("design:paramtypes", [_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], NewAircraftComponent);
    return NewAircraftComponent;
}());



/***/ }),

/***/ "./src/app/admin/new-airport/new-airport.component.html":
/*!**************************************************************!*\
  !*** ./src/app/admin/new-airport/new-airport.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container\">\n  <div class=\"columns\">\n    <div class=\"column is-3\">\n      <app-side-nav></app-side-nav>\n    </div>\n    <div class=\"column is-9\">\n      <h3 class=\"title\">Add Airport</h3>\n\n      <form>\n        <div class=\"columns\">\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Name</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"name\" [(ngModel)]=\"name\">\n              </div>\n            </div>\n          </div>\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">ICAO Code</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"icao\" [(ngModel)]=\"icao\">\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"columns\">\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Longitude</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"longitude\" [(ngModel)]=\"longitude\">\n              </div>\n            </div>\n          </div>\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Latitude</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"latitude\" [(ngModel)]=\"latitude\">\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"columns\">\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Elevation</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"elevation\" [(ngModel)]=\"elevation\">\n              </div>\n            </div>\n          </div>\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Longest Runway</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"longest_runway\" [(ngModel)]=\"longest_runway\">\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"columns\">\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Magnetic Variation</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"magnetic_variation\" [(ngModel)]=\"magnetic_variation\">\n              </div>\n            </div>\n          </div>\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Airport Type</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"airport_type\" [(ngModel)]=\"airport_type\">\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"columns\">\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Beacon</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"beacon\" [(ngModel)]=\"beacon\">\n              </div>\n            </div>\n          </div>\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Fuel Types</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"fuel_types\" [(ngModel)]=\"fuel_types\">\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"columns\">\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Landing Fee</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"landing_fee\" [(ngModel)]=\"landing_fee\">\n              </div>\n            </div>\n          </div>\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Oxygen</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"oxygen\" [(ngModel)]=\"oxygen\">\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"columns\">\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Repairs</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"repairs\" [(ngModel)]=\"repairs\">\n              </div>\n            </div>\n          </div>\n          \n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Country</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"country\" [(ngModel)]=\"country\">\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"columns\">\n          <div class=\"column is-6\">\n            <div class=\"field is-grouped\">\n              <div class=\"control\">\n                <button class=\"button is-link\" id=\"addBtn\" (click)=\"addAirport()\">Submit</button>\n              </div>\n              <div class=\"control\">\n                <button class=\"button is-text\" type=\"reset\">Reset</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n<app-chat></app-chat>\n"

/***/ }),

/***/ "./src/app/admin/new-airport/new-airport.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/admin/new-airport/new-airport.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL25ldy1haXJwb3J0L25ldy1haXJwb3J0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/new-airport/new-airport.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admin/new-airport/new-airport.component.ts ***!
  \************************************************************/
/*! exports provided: NewAirportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewAirportComponent", function() { return NewAirportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin.service */ "./src/app/admin/admin.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewAirportComponent = /** @class */ (function () {
    function NewAirportComponent(adminService, route) {
        this.adminService = adminService;
        this.route = route;
    }
    NewAirportComponent.prototype.ngOnInit = function () {
        this.doRun = true;
    };
    NewAirportComponent.prototype.addAirport = function () {
        var _this = this;
        console.log('add start');
        jquery__WEBPACK_IMPORTED_MODULE_1__('#addBtn').addClass('is-loading');
        if (this.doRun === true) {
            this.adminService.addAirport(this.name, this.country, this.icao, this.latitude, this.longitude, this.elevation, this.longest_runway, this.magnetic_variation, this.airport_type, this.beacon, this.fuel_types, this.landing_fee, this.oxygen, this.repairs)
                .subscribe(function (data) {
                console.log('Aircraft Added ', data);
                jquery__WEBPACK_IMPORTED_MODULE_1__('form').trigger("reset");
                jquery__WEBPACK_IMPORTED_MODULE_1__('#addBtn').removeClass('is-loading');
                _this.doRun = false;
            }, function (error) {
                jquery__WEBPACK_IMPORTED_MODULE_1__('#addBtn').removeClass('is-loading');
                console.log(error);
            });
        }
    };
    NewAirportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-airport',
            template: __webpack_require__(/*! ./new-airport.component.html */ "./src/app/admin/new-airport/new-airport.component.html"),
            styles: [__webpack_require__(/*! ./new-airport.component.scss */ "./src/app/admin/new-airport/new-airport.component.scss")]
        }),
        __metadata("design:paramtypes", [_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], NewAirportComponent);
    return NewAirportComponent;
}());



/***/ }),

/***/ "./src/app/admin/new-flight/new-flight.component.html":
/*!************************************************************!*\
  !*** ./src/app/admin/new-flight/new-flight.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container\">\n  <div class=\"columns\">\n    <div class=\"column is-3\">\n      <app-side-nav></app-side-nav>\n    </div>\n    <div class=\"column is-9\">\n      <h3 class=\"title\">Add Flight</h3>\n      <form action=\"#\" *ngIf=\"sale\">\n        <section class=\"\">\n          <!-- <h3 class=\"title\">Live Leg</h3> -->\n          <div class=\"columns\">\n            <div class=\"column is-4\">\n              <div class=\"field\">\n                <label class=\"label\">Reference ID</label>\n                <div class=\"control\">\n                  <input class=\"input\" type=\"text\" [(ngModel)]=\"reference_id\" name=\"reference_id\">\n                </div>\n              </div>\n            </div>\n            <div class=\"column is-4\">\n              <div class=\"field\">\n                <label class=\"label\">OPS Employee</label>\n                <div class=\"control\">\n                  <div class=\"select\">\n                    <select [(ngModel)]=\"ops_crew\" name=\"ops_crew\">\n                      <option>OPS Employees</option>\n                      <option *ngFor=\"let ops_crew of ops_crews\" [ngValue]=\"ops_crew\">{{ops_crew.name}}</option>\n                    </select>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"column is-4\">\n              <div class=\"field\">\n                <label class=\"label\">Aircraft</label>\n                <div class=\"control\">\n                  <div class=\"select\">\n                    <select [(ngModel)]=\"aircraft\" name=\"aircraft\">\n                      <option>Suggested Aircraft</option>\n                      <option *ngFor=\"let aircraft of aircrafts\" [ngValue]=\"aircraft\">{{aircraft.registration}}\n                      </option>\n                    </select>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"columns\">\n            <div class=\"column is-4\">\n              <div class=\"field\">\n                <label class=\"label\">Departure Time</label>\n                <div class=\"control\">\n                  <ng2-flatpickr [config]=\"exampleOptions\" [(ngModel)]=\"departure_time\" name=\"departure_time\">\n                  </ng2-flatpickr>\n                  <!-- <input type=\"text\" [(ngModel)]=\"departure_time\" name=\"departure_time\"> -->\n                </div>\n              </div>\n            </div>\n            <div class=\"column is-4\">\n              <div class=\"field\">\n                <label class=\"label\">Departure Airport</label>\n                <div class=\"control\">\n                  <div class=\"dropdown\" id=\"dptAir\">\n                    <div class=\"dropdown-trigger\">\n                      <input class=\"input\" name=\"departure_airport\" autocomplete=\"off\"\n                        [(ngModel)]=\"departure_airport.name\" (input)=\"getAirports($event.target.value, 'dptAir')\"\n                        type=\"text\" placeholder=\"Enter Departure Airport\" aria-haspopup=\"true\">\n                    </div>\n                    <div class=\"dropdown-menu\" role=\"menu\">\n                      <div class=\"dropdown-content\">\n                        <a (click)=\"departure_airport = airport;hideSearch()\" class=\"dropdown-item\"\n                          *ngFor=\"let airport of airports\">\n                          {{airport.name}} ({{airport.icao}})\n                        </a>\n                        <span *ngIf=\"!airports\">Loading...</span>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"column is-4\">\n              <div class=\"field\">\n                <label class=\"label\">Arrival Airport</label>\n                <div class=\"control\">\n                  <div class=\"dropdown\" id=\"arrAir\">\n                    <div class=\"dropdown-trigger\">\n                      <input class=\"input\" name=\"arrival_airport\" autocomplete=\"off\" [(ngModel)]=\"arrival_airport.name\"\n                        (input)=\"getAirports($event.target.value, 'arrAir')\" type=\"text\"\n                        placeholder=\"Enter Arrival Airport\" aria-haspopup=\"true\">\n                    </div>\n                    <div class=\"dropdown-menu\" role=\"menu\">\n                      <div class=\"dropdown-content\">\n                        <a (click)=\"arrival_airport = airport;getHandler(airport);hideSearch();\" class=\"dropdown-item\"\n                          *ngFor=\"let airport of airports\">\n                          {{airport.name}} ({{airport.icao}})\n                        </a>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"columns\">\n            <div class=\"column is-6\">\n              <div class=\"field\">\n                <label class=\"label\">Handler</label>\n                <div class=\"control\">\n                  <div class=\"select\">\n                    <select [(ngModel)]=\"handler\" name=\"handler\">\n                      <option>Handler Values</option>\n                      <option *ngFor=\"let handler of handlers\" [ngValue]=\"handler\">{{handler.name}}</option>\n                    </select>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"column is-6\">\n              <div class=\"field\">\n                <label class=\"label\">Dangerous Good?</label>\n                <div class=\"control\">\n                  <label class=\"radio\">\n                    <input type=\"radio\" name=\"answer\" [(ngModel)]=\"dangerous\" value=\"yes\" name=\"dangerous\">\n                    Yes\n                  </label>\n                  <label class=\"radio\">\n                    <input type=\"radio\" name=\"answer\" [(ngModel)]=\"dangerous\" value=\"no\" name=\"dangerous\">\n                    No\n                  </label>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"columns\">\n            <div class=\"column is-6\">\n              <div class=\"field\">\n                <label class=\"label\">Pax/Cargo</label>\n                <div class=\"control\">\n                  <div class=\"select\">\n                    <select #paxCargo1 [(ngModel)]=\"type\" name=\"type\" (change)=\"paxCargo(paxCargo1.value)\">\n                      <option value=\"pax\">Pax.</option>\n                      <option value=\"cargo\">Cargo</option>\n                    </select>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"column is-6\">\n              <div class=\"field\" id=\"pax\">\n                <label class=\"label\">Number of Passengers</label>\n                <div class=\"control\">\n                  <input type=\"text\" [(ngModel)]=\"pax\" name=\"pax\" class=\"input\">\n                </div>\n              </div>\n              <div class=\"field\" id=\"cargo\" style=\"display: none;\">\n                <label class=\"label\">Weight of Cargo</label>\n                <div class=\"control\">\n                  <input type=\"text\" [(ngModel)]=\"cargo\" name=\"cargo\" class=\"input\">\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"columns\">\n            <div class=\"column is-6\">\n              <div class=\"field is-grouped\">\n                <div class=\"control\">\n                  <button class=\"button is-link\" (click)=\"doRoute()\" id=\"addBtn\">Submit</button>\n                </div>\n                <div class=\"control\">\n                  <button class=\"button is-text\" type=\"reset\" id=\"reset\">Reset</button>\n                  <button class=\"button is-text is-hidden\" type=\"button\" id=\"cancel\" (click)=\"cancel()\">Cancel</button>\n                </div>\n              </div>\n            </div>\n          </div>\n\n        </section>\n\n\n      </form>\n      <pre>{{result}}</pre>\n    </div>\n  </div>\n  <div class=\"modal\" id=\"flight-overlap\">\n    <div class=\"modal-background\"></div>\n    <div class=\"modal-card\">\n      <form *ngIf=\"overlapFlight\">\n        <header class=\"modal-card-head\">\n          <p class=\"modal-card-title\">Flight Overlap</p>\n        </header>\n        <section class=\"modal-card-body\">\n          <h4>Flight {{overlapFlight.reference_id}}, {{overlapFlight.departure_airport}} to \n            {{overlapFlight.arrival_airport}} on {{overlapFlight.departuretime*1000 | date : \"short\"}}, overlaps \n            with {{reference_id}}, {{departure_airport.icao}} to {{arrival_airport.icao}} on {{departure_time*1000 | date : \"short\"}} \n            at for aircraft {{aircraft.aircraft}}. How would you like to resolve?</h4>\n        </section>\n\n        <footer class=\"modal-card-foot\">\n            <button class=\"button is-success\" id=\"cancelFlight\" (click)=\"cancelFlight(overlapFlight.reference_id)\">Cancel Flight {{overlapFlight.reference_id}}</button>\n            <button class=\"button is-success\" (click)=\"changeAircraft()\">Cancel Flight/Change Aircraft</button>\n        </footer>\n      </form>\n    </div>\n  </div>\n  <div class=\"modal\" id=\"position-from\">\n    <div class=\"modal-background\"></div>\n    <div class=\"modal-card\">\n      <form>\n        <header class=\"modal-card-head\">\n          <p class=\"modal-card-title\">Position From</p>\n        </header>\n        <section class=\"modal-card-body\">\n          <h4 *ngIf=\"lastFlight\">Flight {{lastFlight.reference_id}} arrives at\n            {{lastFlight.arrivaltime*1000 | date :  \"short\"}} at\n            {{lastFlight.arrival_airport}}. Where would you like to plan the positioning flight from?</h4>\n          <div class=\"field\">\n            <div class=\"control\">\n              <label class=\"radio\">\n                <input type=\"radio\" name=\"question\" checked (change)=\"handleLFChange('arrival')\">\n                Arrival Location\n              </label>\n              <label class=\"radio\">\n                <input type=\"radio\" name=\"question\" (change)=\"handleLFChange('choose')\">\n                Choose\n              </label>\n            </div>\n          </div>\n          <div class=\"columns\" id=\"choose\" *ngIf=\"currentLoc\">\n            <div class=\"column is-5\">\n              <div class=\"field\">\n                <label class=\"label\">Position From</label>\n                <div class=\"control\">\n                  <div class=\"dropdown\" id=\"dptFromAir\">\n                    <div class=\"dropdown-trigger\">\n                      <input class=\"input\" name=\"currentLoc\" id=\"currentLoc\" autocomplete=\"off\"\n                        [(ngModel)]=\"currentLoc.name\" (input)=\"getAirports($event.target.value, 'dptFromAir')\"\n                        type=\"text\" placeholder=\"Enter Departure Airport\" aria-haspopup=\"true\">\n                    </div>\n                    <div class=\"dropdown-menu\" role=\"menu\">\n                      <div class=\"dropdown-content\">\n                        <a (click)=\"currentLoc = airport;getHandler(airport);hideSearch()\" class=\"dropdown-item\"\n                          *ngFor=\"let airport of airports\">\n                          {{airport.name}} ({{airport.icao}})\n                        </a>\n                        <span *ngIf=\"!airports\">Loading...</span>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"column is-5\">\n              <div class=\"field\">\n                <label class=\"label\">Handler</label>\n                <div class=\"control\">\n                  <div class=\"select\">\n                    <select [(ngModel)]=\"fromHandler\" name=\"fromHandler\" id=\"fromHandler\">\n                      <option>Handler Values</option>\n                      <option *ngFor=\"let handler of handlers\" [ngValue]=\"handler\">{{handler.name}}</option>\n                    </select>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"column is-2\">\n              <div class=\"field\">\n                <label class=\"label\">Layover Time</label>\n                <div class=\"control\">\n                  <input class=\"input\" type=\"text\" name=\"fromLayOver\" [(ngModel)]=\"fromLayOver\">\n                </div>\n              </div>\n            </div>\n          </div>\n\n\n\n        </section>\n\n        <footer class=\"modal-card-foot\">\n          <button class=\"button is-success\" id=\"positionBtn\" (click)=\"doPositionFrom()\">Position</button>\n          <button class=\"button is-text\" type=\"reset\" id=\"resetFrom\">Reset</button>\n          <button class=\"button is-text is-hidden\" type=\"button\" id=\"cancelFrom\" (click)=\"cancelFrom()\">Cancel</button>\n        </footer>\n      </form>\n    </div>\n  </div>\n  <div class=\"modal\" id=\"position-to\">\n    <div class=\"modal-background\"></div>\n    <div class=\"modal-card\">\n      <form>\n        <header class=\"modal-card-head\">\n          <p class=\"modal-card-title\">Position To</p>\n        </header>\n        <section class=\"modal-card-body\">\n          <h4 *ngIf=\"nextFlight\">Next flight will be on {{nextFlight.departuretime*1000 | date :  \"short\"}} for aircraft {{nextFlight.reference_id}}, where would you\n                  like to position the aircraft to?</h4>\n          <div class=\"field\">\n            <div class=\"control\">\n              <label class=\"radio\">\n                <input type=\"radio\" name=\"question\" checked (change)=\"handleNFChange('arrival')\">\n                Arrival Location\n              </label>\n              <label class=\"radio\">\n                <input type=\"radio\" name=\"question\" (change)=\"handleNFChange('choose')\">\n                Choose\n              </label>\n            </div>\n          </div>\n          <div class=\"columns\" id=\"chooseTo\" *ngIf=\"baseLoc\">\n            <div class=\"column is-5\">\n              <div class=\"field\">\n                <label class=\"label\">Base Location</label>\n                <div class=\"control\">\n                  <div class=\"dropdown\" id=\"dptToAir\">\n                    <div class=\"dropdown-trigger\">\n                      <input class=\"input\" name=\"baseLoc\" id=\"baseLoc\" autocomplete=\"off\" [(ngModel)]=\"baseLoc.name\"\n                        (input)=\"getAirports($event.target.value, 'dptToAir')\" type=\"text\"\n                        placeholder=\"Enter Departure Airport\" aria-haspopup=\"true\">\n                    </div>\n                    <div class=\"dropdown-menu\" role=\"menu\">\n                      <div class=\"dropdown-content\">\n                        <a (click)=\"baseLoc = airport;getHandler(airport);hideSearch()\" class=\"dropdown-item\"\n                          *ngFor=\"let airport of airports\">\n                          {{airport.name}} ({{airport.icao}})\n                        </a>\n                        <span *ngIf=\"!airports\">Loading...</span>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"column is-5\">\n              <div class=\"field\">\n                <label class=\"label\">Handler</label>\n                <div class=\"control\">\n                  <div class=\"select\">\n                    <select [(ngModel)]=\"toHandler\" id=\"toHandler\" name=\"toHandler\">\n                      <option>Handler Values</option>\n                      <option *ngFor=\"let handler of handlers\" [ngValue]=\"handler\">{{handler.name}}</option>\n                    </select>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"column is-2\">\n              <div class=\"field\">\n                <label class=\"label\">Layover Time</label>\n                <div class=\"control\">\n                  <input class=\"input\" type=\"text\" name=\"toLayOver\" [(ngModel)]=\"toLayOver\">\n                </div>\n              </div>\n            </div>\n          </div>\n\n\n\n        </section>\n        <footer class=\"modal-card-foot\">\n          <button class=\"button is-success\" id=\"positionToBtn\" (click)=\"doPositionTo()\">Position</button>\n          <button class=\"button is-text\" type=\"reset\" id=\"resetTo\">Reset</button>\n          <button class=\"button is-text is-hidden\" type=\"button\" id=\"cancelTo\" (click)=\"cancelTo()\">Cancel</button>\n        </footer>\n      </form>\n    </div>\n  </div>\n  <div class=\"modal\" id=\"suggested\">\n    <div class=\"modal-background\"></div>\n    <div class=\"modal-card\">\n      <form>\n        <header class=\"modal-card-head\">\n          <p class=\"modal-card-title\">Suggested Actions</p>\n          <button class=\"delete\" aria-label=\"close\"></button>\n        </header>\n        <section class=\"modal-card-body\">\n\n          <button class=\"button is-success is-block\" (click)=\"createMail()\">Send Crew Notification</button>\n          <button class=\"button is-success is-block\" (click)=\"createHandlerMail()\">Send Handling Request</button>\n\n\n\n        </section>\n      </form>\n    </div>\n  </div>\n</div>\n<script type=\"text/javascript\"\n  src=\"/node_modules/bulma-extensions/bulma-accordion/dist/bulma-accordion.min.js\"></script>\n<script type=\"text/javascript\">\n  var accordions = bulmaAccordion.attach();\n</script>\n<app-chat></app-chat>"

/***/ }),

/***/ "./src/app/admin/new-flight/new-flight.component.scss":
/*!************************************************************!*\
  !*** ./src/app/admin/new-flight/new-flight.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#tab-content .container_item {\n  display: none; }\n\n#tab-content .container_item.is-active {\n  display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZXgvRG9jdW1lbnRzL0dpdEh1Yi9mbGlnaHRvcHMvc3JjL2FwcC9hZG1pbi9uZXctZmxpZ2h0L25ldy1mbGlnaHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhLEVBQUE7O0FBR2Y7RUFDRSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9uZXctZmxpZ2h0L25ldy1mbGlnaHQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdGFiLWNvbnRlbnQgLmNvbnRhaW5lcl9pdGVtIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIFxuICAjdGFiLWNvbnRlbnQgLmNvbnRhaW5lcl9pdGVtLmlzLWFjdGl2ZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/admin/new-flight/new-flight.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/admin/new-flight/new-flight.component.ts ***!
  \**********************************************************/
/*! exports provided: NewFlightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewFlightComponent", function() { return NewFlightComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../admin.service */ "./src/app/admin/admin.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var NewFlightComponent = /** @class */ (function () {
    function NewFlightComponent(adminService, route, renderer, document) {
        this.adminService = adminService;
        this.route = route;
        this.renderer = renderer;
        this.document = document;
        this.routeDet = {
            arrivaltime: 0,
            departuretime: 0,
            fuel: 0,
            distance: 0,
            fplan: {},
        };
        this.exampleOptions = {
            enableTime: true,
            defaultDate: this.departure_time,
            mode: 'single'
        };
        this.replaceArray = function (text, find, replace) {
            var replaceString = text;
            var regex;
            for (var i = 0; i < find.length; i++) {
                regex = new RegExp(find[i], 'g');
                replaceString = replaceString.replace(regex, replace[i]);
            }
            return replaceString;
        };
    }
    NewFlightComponent.prototype.ngOnInit = function () {
        this.departure_airport = {};
        this.departure_airport.name = '';
        this.arrival_airport = {};
        this.arrival_airport.name = '';
        this.id = this.route.snapshot.paramMap.get('id');
        console.log(this.id);
        jquery__WEBPACK_IMPORTED_MODULE_1__('.delete').on('click', function () {
            jquery__WEBPACK_IMPORTED_MODULE_1__('#suggested').removeClass('is-active');
        });
        this.getAircrafts();
        // this.sendMail();
        if (this.id !== 'new') {
            this.getSale();
        }
        else {
            this.sale = 'new';
            jquery__WEBPACK_IMPORTED_MODULE_1__('.ng2-flatpickr-input').addClass('input');
        }
        jquery__WEBPACK_IMPORTED_MODULE_1__('#tabs li').on('click', function () {
            var tab = jquery__WEBPACK_IMPORTED_MODULE_1__(this).data('option');
            jquery__WEBPACK_IMPORTED_MODULE_1__('#tabs li').removeClass('is-active');
            jquery__WEBPACK_IMPORTED_MODULE_1__(this).addClass('is-active');
            jquery__WEBPACK_IMPORTED_MODULE_1__('#tab-content div').removeClass('is-active');
            jquery__WEBPACK_IMPORTED_MODULE_1__('div[data-content="' + tab + '"]').addClass('is-active');
        });
        this.getCrewByOccupation();
    };
    NewFlightComponent.prototype.getAircrafts = function () {
        var _this = this;
        this.adminService.getAircrafts().subscribe(function (data) {
            _this.aircrafts = data.data;
            console.log('aircrafts ', _this.aircrafts);
        });
    };
    NewFlightComponent.prototype.distance = function (lat1, lon1, lat2, lon2, unit) {
        if ((lat1 === lat2) && (lon1 === lon2)) {
            return 0;
        }
        else {
            var radlat1 = Math.PI * lat1 / 180;
            var radlat2 = Math.PI * lat2 / 180;
            var theta = lon1 - lon2;
            var radtheta = Math.PI * theta / 180;
            var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
            if (dist > 1) {
                dist = 1;
            }
            dist = Math.acos(dist);
            dist = dist * 180 / Math.PI;
            dist = dist * 60 * 1.1515;
            if (unit === 'K') {
                dist = dist * 1.609344;
            }
            if (unit === 'N') {
                dist = dist * 0.8684;
            }
            return dist;
        }
    };
    NewFlightComponent.prototype.getAirports = function (keyword, type) {
        var _this = this;
        if (keyword.length > 2) {
            this.airports = [];
            jquery__WEBPACK_IMPORTED_MODULE_1__('#' + type).addClass('is-active');
            this.adminService.findAirports(keyword).subscribe(function (data) {
                console.log('search ', data.data);
                _this.airports = data.data;
            });
        }
    };
    NewFlightComponent.prototype.hideSearch = function () {
        jquery__WEBPACK_IMPORTED_MODULE_1__('.dropdown').removeClass('is-active');
    };
    NewFlightComponent.prototype.getSale = function () {
        var _this = this;
        this.adminService.getSale(this.id).subscribe(function (data) {
            _this.sale = data.data;
            _this.reference_id = data.data.reference_id;
            _this.departure_time = new Date(data.data.departure);
            _this.departure_airport = data.data.origin_airport;
            _this.arrival_airport = data.data.destination_airport;
            console.log('sale ', _this.departure_time);
            jquery__WEBPACK_IMPORTED_MODULE_1__('ng2-flatpickr').addClass('input');
        });
    };
    NewFlightComponent.prototype.lastLiveFlight = function (date) {
        var _this = this;
        this.adminService.lastLiveFlight(this.aircraft.aircraftId, date).subscribe(function (data) {
            _this.lastFlight = data.data[0];
            console.log('last flight', _this.lastFlight);
            _this.handleLFChange('arrival');
        });
    };
    NewFlightComponent.prototype.nextLiveFlight = function (date) {
        var _this = this;
        this.adminService.nextLiveFlight(this.aircraft.aircraftId, date).subscribe(function (data) {
            _this.nextFlight = data.data[0];
            console.log('next flight', _this.nextFlight);
            _this.handleNFChange('arrival');
        });
    };
    NewFlightComponent.prototype.handleLFChange = function (val) {
        if (val === 'arrival') {
            this.currentLoc = {};
            this.currentLoc.icao = this.lastFlight.arrival_airport;
            this.currentLoc.name = this.lastFlight.arrival_airport;
            this.fromHandler = {};
            this.fromHandler._id = this.lastFlight.handler;
            jquery__WEBPACK_IMPORTED_MODULE_1__('#currentLoc').prop('disabled', true);
            jquery__WEBPACK_IMPORTED_MODULE_1__('#fromHandler').prop('disabled', true);
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_1__('#currentLoc').prop('disabled', false);
            jquery__WEBPACK_IMPORTED_MODULE_1__('#fromHandler').prop('disabled', false);
        }
    };
    NewFlightComponent.prototype.handleNFChange = function (val) {
        if (val === 'arrival') {
            this.baseLoc = {};
            this.baseLoc.icao = this.nextFlight.arrival_airport;
            this.baseLoc.name = this.nextFlight.arrival_airport;
            this.toHandler = {};
            this.toHandler._id = this.nextFlight.handler;
            jquery__WEBPACK_IMPORTED_MODULE_1__('#baseLoc').prop('disabled', true);
            jquery__WEBPACK_IMPORTED_MODULE_1__('#toHandler').prop('disabled', true);
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_1__('#baseLoc').prop('disabled', false);
            jquery__WEBPACK_IMPORTED_MODULE_1__('#toHandler').prop('disabled', false);
        }
    };
    NewFlightComponent.prototype.createMail = function () {
        console.log('sending mail');
        this.sendCrewMail(this.ops_crew.name, 'OPS', this.positionFromDep, this.positionFromArr, this.positionFromDepT);
        this.sendCrewMail(this.ops_crew.name, 'OPS', this.LiveDep, this.LiveArr, this.LiveDepT);
        this.sendCrewMail(this.ops_crew.name, 'OPS', this.positionToDep, this.positionToArr, this.positionToDepT);
        this.sendCrewMail(this.pic_crew.name, 'PIC', this.positionFromDep, this.positionFromArr, this.positionFromDepT);
        this.sendCrewMail(this.pic_crew.name, 'PIC', this.LiveDep, this.LiveArr, this.LiveDepT);
        this.sendCrewMail(this.pic_crew.name, 'PIC', this.positionToDep, this.positionToArr, this.positionToDepT);
        this.sendCrewMail(this.fo_crew.name, 'FO', this.positionFromDep, this.positionFromArr, this.positionFromDepT);
        this.sendCrewMail(this.fo_crew.name, 'FO', this.LiveDep, this.LiveArr, this.LiveDepT);
        this.sendCrewMail(this.fo_crew.name, 'FO', this.positionToDep, this.positionToArr, this.positionToDepT);
    };
    NewFlightComponent.prototype.createHandlerMail = function () {
        console.log('sending handler mail');
        this.sendHandlerMail(this.fromHandler.email_primary, this.fromHandler.name, 'Handler', this.positionFromDep, this.positionFromArr, this.positionFromDepT);
        this.sendHandlerMail(this.handler.email_primary, this.handler.name, 'Handler', this.LiveDep, this.LiveArr, this.LiveDepT);
        this.sendHandlerMail(this.toHandler.email_primary, this.toHandler.name, 'Handler', this.positionToDep, this.positionToArr, this.positionToDepT);
    };
    NewFlightComponent.prototype.sendCrewMail = function (name, role, beginning, end, departTime) {
        var _this = this;
        this.adminService.getTemplates().subscribe(function (data) {
            _this.crewTemplate = data.data[0];
            _this.handlerTemplate = data.data[1];
            var find = ['%crewname%', '%role%', '%flightID%', '%aircraftID%', '%aircraftname%', '%date%', '%time%',
                '%airportdeparture%', '%airportarrival%', '%link%'];
            var replace = [name, role, _this.reference_id, _this.aircraft.aircraftId, _this.aircraft.registration,
                new Date(departTime * 1000).getDate() + '-' + new Date(departTime * 1000).getMonth() + '-' +
                    new Date(departTime * 1000).getFullYear(), new Date(departTime * 1000).getHours() + ':' +
                    new Date(departTime * 1000).getMinutes() + ':' + new Date(departTime * 1000).getSeconds(),
                beginning, end, _this.reference_id];
            _this.crewTemplate.subject = _this.replaceArray(_this.crewTemplate.subject, find, replace);
            _this.crewTemplate.message = _this.replaceArray(_this.crewTemplate.message, find, replace);
            _this.adminService.sendMail(_this.ops_crew.p_email, _this.crewTemplate.subject, _this.crewTemplate.message).subscribe(function (data) {
                console.log('hello ', data);
            });
        });
    };
    NewFlightComponent.prototype.sendHandlerMail = function (email, name, role, beginning, end, departTime) {
        var _this = this;
        this.adminService.getTemplates().subscribe(function (data) {
            _this.handlerTemplate = data.data[1];
            var find = ['%handlername%', '%role%', '%flightID%', '%aircraftID%', '%aircraftname%', '%date%',
                '%time%', '%airportdeparture%', '%airportarrival%', '%link%'];
            var replace = [name, role, _this.reference_id, _this.aircraft.aircraftId, _this.aircraft.registration,
                new Date(departTime * 1000).getDate() + '-' + new Date(departTime * 1000).getMonth() + '-' +
                    new Date(departTime * 1000).getFullYear(), new Date(departTime * 1000).getHours() + ':' +
                    new Date(departTime * 1000).getMinutes() + ':' + new Date(departTime * 1000).getSeconds(), beginning,
                end, _this.reference_id];
            _this.handlerTemplate.subject = _this.replaceArray(_this.handlerTemplate.subject, find, replace);
            _this.handlerTemplate.message = _this.replaceArray(_this.handlerTemplate.message, find, replace);
            _this.adminService.sendMail('kininteractivesolutions@gmail.com', _this.handlerTemplate.subject, _this.handlerTemplate.message).subscribe(function (data) {
                console.log('hello ', data);
            });
        });
    };
    NewFlightComponent.prototype.getHandler = function (airport) {
        var _this = this;
        this.adminService.getHandler(airport.icao).subscribe(function (data) {
            _this.handlers = data.data;
            console.log('handlers ', _this.handlers);
        });
    };
    NewFlightComponent.prototype.paxCargo = function (choice) {
        if (choice === 'pax') {
            jquery__WEBPACK_IMPORTED_MODULE_1__('#cargo').hide();
            jquery__WEBPACK_IMPORTED_MODULE_1__('#pax').show();
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_1__('#pax').hide();
            jquery__WEBPACK_IMPORTED_MODULE_1__('#cargo').show();
        }
    };
    NewFlightComponent.prototype.getCrewByOccupation = function () {
        var _this = this;
        this.adminService.getCrewByOccupation('OPS').subscribe(function (data) {
            _this.ops_crews = data.data;
            console.log('crews ', _this.ops_crews);
        });
    };
    NewFlightComponent.prototype.doRoute = function () {
        var _this = this;
        console.log('DISTANCE ', this.distance(this.departure_airport.latitude, this.departure_airport.longitude, this.arrival_airport.latitude, this.arrival_airport.longitude, 'K'));
        jquery__WEBPACK_IMPORTED_MODULE_1__('#addBtn').addClass('is-loading');
        jquery__WEBPACK_IMPORTED_MODULE_1__('#reset').addClass('is-hidden');
        jquery__WEBPACK_IMPORTED_MODULE_1__('#cancel').removeClass('is-hidden');
        var data = {
            aircraftid: this.aircraft.aircraftId,
            departure: this.departure_airport.icao,
            destination: this.arrival_airport.icao,
            departuretime: Date.parse(this.departure_time) / 1000
        };
        this.adminService.route(data).subscribe(function (data) {
            _this.routeId = data.data;
            console.log('response ', _this.routeId);
            _this.result = _this.routeId;
            _this.poll = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["interval"])(15000)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () { return _this.adminService.longPoll(data.data); }))
                .subscribe(function (res) {
                console.log(res.data);
                for (var _i = 0, _a = res.data; _i < _a.length; _i++) {
                    var el = _a[_i];
                    if (el.hasOwnProperty('aircraftid')) {
                        _this.poll.unsubscribe();
                        _this.adminService.getFplan(_this.routeId).subscribe(function (data) {
                            console.log(data);
                            _this.arrival_time = data.data.arrivaltime;
                            _this.departure_time = data.data.departuretime;
                            _this.routeDet.arrivaltime = data.data.arrivaltime;
                            _this.routeDet.departuretime = data.data.departuretime;
                            _this.routeDet.fuel = data.data.fuelcalc.reqdfuel;
                            _this.routeDet.distance = data.data.gcdist;
                            _this.routeDet.fplan = __assign({}, data.data.fplan);
                            console.log('rou', _this.routeDet);
                            _this.result = JSON.stringify(_this.routeDet, undefined, 2);
                            _this.adminService.checkOverlap(_this.aircraft.aircraftId, _this.routeDet.departuretime, _this.routeDet.arrivaltime).subscribe(function (data) {
                                console.log('overlap ', data);
                                if (data.data.length === 0) {
                                    _this.getCrew();
                                    _this.lastLiveFlight(_this.routeDet.departuretime);
                                    _this.nextLiveFlight(_this.routeDet.arrivaltime);
                                    _this.currentLoc = {};
                                    _this.currentLoc.name = '';
                                    _this.LiveDep = _this.departure_airport.icao;
                                    _this.LiveArr = _this.arrival_airport.icao;
                                    _this.LiveDepT = _this.routeDet.departuretime;
                                    _this.LiveArr = _this.routeDet.arrivaltime;
                                    jquery__WEBPACK_IMPORTED_MODULE_1__('#position-from').addClass('is-active');
                                }
                                else {
                                    _this.overlapFlight = data.data[0];
                                    jquery__WEBPACK_IMPORTED_MODULE_1__('#flight-overlap').addClass('is-active');
                                }
                            });
                            // $('#addBtn').removeClass('is-loading');
                        });
                        break;
                    }
                }
                _this.result = JSON.stringify(res.data, undefined, 2);
            });
        });
    };
    NewFlightComponent.prototype.getCrew = function () {
        var _this = this;
        this.adminService.getCrewByOccupation('PIC').subscribe(function (data) {
            console.log('crewPIC', data.data);
            data.data.some(function (element) {
                // console.log(Date.parse(this.departure_time) / 1000 - element.unavailable)
                var subtract = Date.parse(_this.departure_time) / 1000 - element.unavailableTo;
                _this.pic_crew = element;
                return subtract >= 0;
            });
            _this.adminService.getCrewByOccupation('FO').subscribe(function (data) {
                console.log('crewFO', data.data);
                data.data.some(function (element) {
                    // console.log(Date.parse(this.departure_time) / 1000 - element.unavailable)
                    var subtract = Date.parse(_this.departure_time) / 1000 - element.unavailableTo;
                    _this.fo_crew = element;
                    return subtract >= 0;
                });
                _this.addRoute('live', _this.routeId);
            });
        });
    };
    NewFlightComponent.prototype.addRoute = function (type, routeId) {
        var _this = this;
        this.adminService.addRoute(this.reference_id, routeId, this.ops_crew._id, this.pic_crew._id, this.fo_crew._id, this.ops_crew.name, this.pic_crew.name, this.fo_crew.name, this.aircraft.aircraftId, this.departure_airport.icao, this.arrival_airport.icao, this.handler._id, this.dangerous, this.type, this.pax, this.cargo, type, this.routeDet.arrivaltime, this.routeDet.departuretime, this.routeDet.fuel, this.routeDet.distance, this.routeDet.fplan).subscribe(function (data) {
            console.log('ROUTE ADDED ', data);
            _this.adminService.getBriefing(routeId).subscribe(function (data) {
                console.log('briefing', data);
            });
        });
    };
    NewFlightComponent.prototype.doPositionFrom = function () {
        var _this = this;
        jquery__WEBPACK_IMPORTED_MODULE_1__('#positionBtn').addClass('is-loading');
        jquery__WEBPACK_IMPORTED_MODULE_1__('#resetFrom').addClass('is-hidden');
        jquery__WEBPACK_IMPORTED_MODULE_1__('#cancelFrom').removeClass('is-hidden');
        var layToTime = this.fromLayOver * 60;
        var arrivalTime = this.departure_time - layToTime;
        console.log(arrivalTime);
        var data = {
            aircraftid: this.aircraft.aircraftId,
            departure: this.currentLoc.icao,
            destination: this.departure_airport.icao,
            arrivaltime: arrivalTime
        };
        this.adminService.route(data).subscribe(function (data) {
            _this.routeId = data.data;
            console.log('response ', _this.routeId);
            _this.result = _this.routeId;
            _this.poll = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["interval"])(15000)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () { return _this.adminService.longPoll(data.data); }))
                .subscribe(function (res) {
                console.log(res.data);
                for (var _i = 0, _a = res.data; _i < _a.length; _i++) {
                    var el = _a[_i];
                    if (el.hasOwnProperty('aircraftid')) {
                        _this.poll.unsubscribe();
                        _this.adminService.getFplan(_this.routeId).subscribe(function (data) {
                            // console.log(data)
                            _this.routeDet.arrivaltime = data.data.arrivaltime;
                            _this.splitA = _this.departure_time - data.data.arrivaltime;
                            _this.departure_time = data.data.departuretime;
                            _this.rotationStart = data.data.departuretime;
                            _this.routeDet.departuretime = data.data.departuretime;
                            _this.routeDet.fuel = data.data.fuelcalc.reqdfuel;
                            _this.routeDet.distance = data.data.gcdist;
                            _this.routeDet.fplan = __assign({}, data.data.fplan);
                            console.log(_this.routeDet);
                            console.log('split A', _this.splitA);
                            _this.result = JSON.stringify(_this.routeDet, undefined, 2);
                            _this.adminService.checkOverlap(_this.aircraft.aircraftId, _this.routeDet.departuretime, _this.routeDet.arrivaltime).subscribe(function (data) {
                                if (data.data.length === 0) {
                                    _this.addRoute('positionFrom', _this.routeId);
                                    _this.positionFromDep = _this.currentLoc.icao;
                                    _this.positionFromArr = _this.departure_airport.icao;
                                    _this.positionFromDepT = _this.routeDet.departuretime;
                                    _this.positionFromArrT = _this.routeDet.arrivaltime;
                                    _this.adminService.updateCrew(_this.pic_crew._id, _this.routeDet.departuretime, _this.routeDet.arrivaltime).subscribe(function (data) {
                                        console.log('updated', data);
                                    });
                                    _this.adminService.updateCrew(_this.fo_crew._id, _this.routeDet.departuretime, _this.routeDet.arrivaltime).subscribe(function (data) {
                                        console.log('updated', data);
                                    });
                                    jquery__WEBPACK_IMPORTED_MODULE_1__('#positionBtn').removeClass('is-loading');
                                    jquery__WEBPACK_IMPORTED_MODULE_1__('#position-from').removeClass('is-active');
                                    jquery__WEBPACK_IMPORTED_MODULE_1__('#position-to').addClass('is-active');
                                }
                                else {
                                    _this.overlapFlight = data.data[0];
                                    jquery__WEBPACK_IMPORTED_MODULE_1__('#flight-overlap').addClass('is-active');
                                }
                            });
                        });
                        break;
                    }
                }
                _this.result = JSON.stringify(res.data, undefined, 2);
                console.log(res.data.length);
            });
        });
    };
    NewFlightComponent.prototype.doPositionTo = function () {
        var _this = this;
        jquery__WEBPACK_IMPORTED_MODULE_1__('#positionToBtn').addClass('is-loading');
        jquery__WEBPACK_IMPORTED_MODULE_1__('#resetTo').addClass('is-hidden');
        jquery__WEBPACK_IMPORTED_MODULE_1__('#cancelTo').removeClass('is-hidden');
        var layToTime = this.toLayOver * 60;
        var departTime = this.arrival_time + layToTime;
        console.log(departTime);
        var data = {
            aircraftid: this.aircraft.aircraftId,
            departure: this.arrival_airport.icao,
            destination: this.baseLoc.icao,
            departuretime: departTime
        };
        this.adminService.route(data).subscribe(function (data) {
            _this.routeId = data.data;
            console.log('response ', _this.routeId);
            _this.result = _this.routeId;
            _this.poll = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["interval"])(15000)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () { return _this.adminService.longPoll(data.data); }))
                .subscribe(function (res) {
                console.log(res.data);
                for (var _i = 0, _a = res.data; _i < _a.length; _i++) {
                    var el = _a[_i];
                    if (el.hasOwnProperty('aircraftid')) {
                        _this.poll.unsubscribe();
                        _this.adminService.getFplan(_this.routeId).subscribe(function (data) {
                            // console.log(data)
                            _this.routeDet.arrivaltime = data.data.arrivaltime;
                            _this.splitB = data.data.departuretime - _this.arrival_time;
                            console.log('split B', _this.splitB);
                            _this.rotationEnd = data.data.arrivaltime;
                            _this.rotationLength = _this.rotationEnd - _this.rotationStart;
                            var rotationStartHour = new Date(_this.rotationStart * 1000).getHours();
                            var rotationEndHour = new Date(_this.rotationEnd * 1000).getHours();
                            var wocle = _this.wocle(rotationStartHour, rotationEndHour);
                            var splittime = _this.splitA + _this.splitB;
                            var fdt = _this.rotationLength + 3600 + splittime;
                            var actualTOR = _this.rotationLength + (wocle * 2);
                            console.log('rotatStart ', _this.rotationStart);
                            console.log('rotatEnd ', _this.rotationEnd);
                            console.log('wocleS ', rotationStartHour);
                            console.log('wocleE ', rotationEndHour);
                            console.log('wocle ', wocle);
                            console.log('fdt ', fdt);
                            console.log('split ', splittime);
                            console.log('actualTOR ', actualTOR);
                            _this.routeDet.departuretime = data.data.departuretime;
                            _this.routeDet.fuel = data.data.fuelcalc.reqdfuel;
                            _this.routeDet.distance = data.data.gcdist;
                            _this.routeDet.fplan = __assign({}, data.data.fplan);
                            console.log(_this.routeDet);
                            _this.result = JSON.stringify(_this.routeDet, undefined, 2);
                            _this.result = JSON.stringify({
                                'FDT': fdt,
                                'TOR': actualTOR,
                                'WOCLE': wocle,
                                'SPLIT TIME': splittime
                            }, undefined, 2);
                            _this.adminService.checkOverlap(_this.aircraft.aircraftId, _this.routeDet.departuretime, _this.routeDet.arrivaltime).subscribe(function (data) {
                                if (data.data.length === 0) {
                                    _this.addRoute('positionTo', _this.routeId);
                                    _this.positionToDep = _this.arrival_airport.icao;
                                    _this.positionToArr = _this.baseLoc.icao;
                                    _this.positionToDepT = _this.routeDet.departuretime;
                                    _this.positionToArrT = _this.routeDet.arrivaltime;
                                    _this.adminService.updateCrew(_this.pic_crew._id, _this.positionFromDepT, _this.routeDet.arrivaltime).subscribe(function (data) {
                                        console.log('updated', data);
                                    });
                                    _this.adminService.updateCrew(_this.fo_crew._id, _this.positionFromDepT, _this.routeDet.arrivaltime).subscribe(function (data) {
                                        console.log('updated', data);
                                    });
                                    jquery__WEBPACK_IMPORTED_MODULE_1__('#suggested').addClass('is-active');
                                    _this.positionTo = data.data._id;
                                    jquery__WEBPACK_IMPORTED_MODULE_1__('#positionToBtn').removeClass('is-loading');
                                    jquery__WEBPACK_IMPORTED_MODULE_1__('#position-to').removeClass('is-active');
                                }
                                else {
                                    _this.overlapFlight = data.data[0];
                                    jquery__WEBPACK_IMPORTED_MODULE_1__('#flight-overlap').addClass('is-active');
                                }
                            });
                        });
                        break;
                    }
                }
                _this.result = JSON.stringify(res.data, undefined, 2);
                console.log(res.data.length);
            });
        });
    };
    NewFlightComponent.prototype.cancel = function () {
        this.poll.unsubscribe();
        jquery__WEBPACK_IMPORTED_MODULE_1__('#addBtn').removeClass('is-loading');
        jquery__WEBPACK_IMPORTED_MODULE_1__('#reset').removeClass('is-hidden');
        jquery__WEBPACK_IMPORTED_MODULE_1__('#cancel').addClass('is-hidden');
    };
    NewFlightComponent.prototype.cancelTo = function () {
        this.poll.unsubscribe();
        jquery__WEBPACK_IMPORTED_MODULE_1__('#positionToBtn').removeClass('is-loading');
        jquery__WEBPACK_IMPORTED_MODULE_1__('#resetTo').removeClass('is-hidden');
        jquery__WEBPACK_IMPORTED_MODULE_1__('#cancelTo').addClass('is-hidden');
    };
    NewFlightComponent.prototype.cancelFrom = function () {
        this.poll.unsubscribe();
        jquery__WEBPACK_IMPORTED_MODULE_1__('#positionBtn').removeClass('is-loading');
        jquery__WEBPACK_IMPORTED_MODULE_1__('#resetFrom').removeClass('is-hidden');
        jquery__WEBPACK_IMPORTED_MODULE_1__('#cancelFrom').addClass('is-hidden');
    };
    NewFlightComponent.prototype.cancelFlight = function (id, type) {
        var _this = this;
        this.adminService.deleteRoute(id).subscribe(function (data) {
            console.log(data.data);
            jquery__WEBPACK_IMPORTED_MODULE_1__('#cancelFlight').removeClass('is-loading');
            jquery__WEBPACK_IMPORTED_MODULE_1__('#flight-overlap').removeClass('is-active');
            if (type === 'live') {
                _this.getCrew();
                _this.lastLiveFlight(_this.routeDet.departuretime);
                _this.nextLiveFlight(_this.routeDet.arrivaltime);
                _this.currentLoc = {};
                _this.currentLoc.name = '';
                _this.LiveDep = _this.departure_airport.icao;
                _this.LiveArr = _this.arrival_airport.icao;
                _this.LiveDepT = _this.routeDet.departuretime;
                _this.LiveArr = _this.routeDet.arrivaltime;
                jquery__WEBPACK_IMPORTED_MODULE_1__('#position-from').addClass('is-active');
            }
            if (type === 'positionFrom') {
                _this.addRoute(type, _this.routeId);
                _this.positionFromDep = _this.currentLoc.icao;
                _this.positionFromArr = _this.departure_airport.icao;
                _this.positionFromDepT = _this.routeDet.departuretime;
                _this.positionFromArrT = _this.routeDet.arrivaltime;
                _this.adminService.getBriefing(_this.routeId).subscribe(function (data) {
                    console.log('briefing', data);
                });
                _this.adminService.updateCrew(_this.pic_crew._id, _this.routeDet.departuretime, _this.routeDet.arrivaltime).subscribe(function (data) {
                    console.log('updated', data);
                });
                _this.adminService.updateCrew(_this.fo_crew._id, _this.routeDet.departuretime, _this.routeDet.arrivaltime).subscribe(function (data) {
                    console.log('updated', data);
                });
                jquery__WEBPACK_IMPORTED_MODULE_1__('#positionBtn').removeClass('is-loading');
                jquery__WEBPACK_IMPORTED_MODULE_1__('#position-from').removeClass('is-active');
                jquery__WEBPACK_IMPORTED_MODULE_1__('#position-to').addClass('is-active');
            }
            if (type === 'positionTo') {
                _this.addRoute(type, _this.routeId);
                _this.positionToDep = _this.arrival_airport.icao;
                _this.positionToArr = _this.baseLoc.icao;
                _this.positionToDepT = _this.routeDet.departuretime;
                _this.positionToArrT = _this.routeDet.arrivaltime;
                _this.adminService.updateCrew(_this.pic_crew._id, _this.positionFromDepT, _this.routeDet.arrivaltime).subscribe(function (data) {
                    console.log('updated', data);
                });
                _this.adminService.updateCrew(_this.fo_crew._id, _this.positionFromDepT, _this.routeDet.arrivaltime).subscribe(function (data) {
                    console.log('updated', data);
                });
                jquery__WEBPACK_IMPORTED_MODULE_1__('#suggested').addClass('is-active');
                _this.positionTo = data.data._id;
                jquery__WEBPACK_IMPORTED_MODULE_1__('#positionToBtn').removeClass('is-loading');
                jquery__WEBPACK_IMPORTED_MODULE_1__('#position-to').removeClass('is-active');
            }
        });
    };
    NewFlightComponent.prototype.changeAircraft = function () {
        jquery__WEBPACK_IMPORTED_MODULE_1__('#flight-overlap').removeClass('is-active');
        this.cancel();
    };
    NewFlightComponent.prototype.wocle = function (x, y) {
        if (x >= 2 && x <= 6 && y >= 2 && y <= 6) {
            return y - x;
        }
        else if (x >= 2 && x <= 6 && y >= 2 && y > 6) {
            return 6 - x;
        }
        else if (x < 2 || x > 6 && y >= 2 && y <= 6) {
            return y - 2;
        }
        else {
            return 0;
        }
    };
    NewFlightComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-flight',
            template: __webpack_require__(/*! ./new-flight.component.html */ "./src/app/admin/new-flight/new-flight.component.html"),
            styles: [__webpack_require__(/*! ./new-flight.component.scss */ "./src/app/admin/new-flight/new-flight.component.scss")]
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"])),
        __metadata("design:paramtypes", [_admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], Object])
    ], NewFlightComponent);
    return NewFlightComponent;
}());



/***/ }),

/***/ "./src/app/admin/new-handler/new-handler.component.html":
/*!**************************************************************!*\
  !*** ./src/app/admin/new-handler/new-handler.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container\">\n  <div class=\"columns\">\n    <div class=\"column is-3\">\n      <app-side-nav></app-side-nav>\n    </div>\n    <div class=\"column is-9\">\n      <h3 class=\"title\">Add Airport</h3>\n\n      <form>\n        <div class=\"columns\">\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Name</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"name\" [(ngModel)]=\"name\">\n              </div>\n            </div>\n          </div>\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Logo URL</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"logo\" [(ngModel)]=\"logo\">\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"columns\">\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Primary Phone</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"phone_primary\" [(ngModel)]=\"phone_primary\">\n              </div>\n            </div>\n          </div>\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Secondary Phone</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"phone_secondary\" [(ngModel)]=\"phone_secondary\">\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"columns\">\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Primary Email</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"email_primary\" [(ngModel)]=\"email_primary\">\n              </div>\n            </div>\n          </div>\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Secondary Email</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"email_secondary\" [(ngModel)]=\"email_secondary\">\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"columns\">\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Monday Open Hours</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"monday_open\" [(ngModel)]=\"monday_open\">\n              </div>\n            </div>\n          </div>\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Monday Close Hours</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"monday_close\" [(ngModel)]=\"monday_close\">\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"columns\">\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Tuesday Open Hours</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"tuesday_open\" [(ngModel)]=\"tuesday_open\">\n              </div>\n            </div>\n          </div>\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Tuesday Close Hours</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"tuesday_close\" [(ngModel)]=\"tuesday_close\">\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"columns\">\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Wednesday Open Hours</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"wednesday_open\" [(ngModel)]=\"wednesday_open\">\n              </div>\n            </div>\n          </div>\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Wednesday Close Hours</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"wednesday_close\" [(ngModel)]=\"wednesday_close\">\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"columns\">\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Thursday Open Hours</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"thursday_open\" [(ngModel)]=\"thursday_open\">\n              </div>\n            </div>\n          </div>\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Thursday Close Hours</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"thursday_close\" [(ngModel)]=\"thursday_close\">\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"columns\">\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Friday Open Hours</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"friday_open\" [(ngModel)]=\"friday_open\">\n              </div>\n            </div>\n          </div>\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Friday Close Hours</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"friday_close\" [(ngModel)]=\"friday_close\">\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"columns\">\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Saturday Open Hours</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"saturday_open\" [(ngModel)]=\"saturday_open\">\n              </div>\n            </div>\n          </div>\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Saturday Close Hours</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"saturday_close\" [(ngModel)]=\"saturday_close\">\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"columns\">\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Sunday Open Hours</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"sunday_open\" [(ngModel)]=\"sunday_open\">\n              </div>\n            </div>\n          </div>\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Sunday Close Hours</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"sunday_close\" [(ngModel)]=\"sunday_close\">\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"columns\">\n          <div class=\"column is-6\">\n            <div class=\"field is-grouped\">\n              <div class=\"control\">\n                <button class=\"button is-link\" id=\"addBtn\" (click)=\"addHandler()\">Submit</button>\n              </div>\n              <div class=\"control\">\n                <button class=\"button is-text\" type=\"reset\">Reset</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n<app-chat></app-chat>\n"

/***/ }),

/***/ "./src/app/admin/new-handler/new-handler.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/admin/new-handler/new-handler.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL25ldy1oYW5kbGVyL25ldy1oYW5kbGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/new-handler/new-handler.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admin/new-handler/new-handler.component.ts ***!
  \************************************************************/
/*! exports provided: NewHandlerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewHandlerComponent", function() { return NewHandlerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin.service */ "./src/app/admin/admin.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewHandlerComponent = /** @class */ (function () {
    function NewHandlerComponent(adminService, route) {
        this.adminService = adminService;
        this.route = route;
    }
    NewHandlerComponent.prototype.ngOnInit = function () {
        this.doRun = true;
        this.id = this.route.snapshot.paramMap.get("id");
        this.getAirports();
    };
    NewHandlerComponent.prototype.addHandler = function () {
        var _this = this;
        console.log('add start');
        jquery__WEBPACK_IMPORTED_MODULE_1__('#addBtn').addClass('is-loading');
        if (this.doRun === true) {
            this.adminService.addHandler(this.name, this.id, this.logo, this.phone_primary, this.phone_secondary, this.email_primary, this.email_secondary, this.monday_open, this.monday_close, this.tuesday_open, this.tuesday_close, this.wednesday_open, this.wednesday_close, this.thursday_open, this.thursday_close, this.friday_open, this.friday_close, this.saturday_open, this.saturday_close, this.sunday_open, this.sunday_close)
                .subscribe(function (data) {
                console.log('Aircraft Added ', data);
                jquery__WEBPACK_IMPORTED_MODULE_1__('form').trigger("reset");
                jquery__WEBPACK_IMPORTED_MODULE_1__('#addBtn').removeClass('is-loading');
                _this.doRun = false;
            }, function (error) {
                jquery__WEBPACK_IMPORTED_MODULE_1__('#addBtn').removeClass('is-loading');
                console.log(error);
            });
        }
    };
    NewHandlerComponent.prototype.getAirports = function () {
        var _this = this;
        this.adminService.getAirports(1, 20).subscribe(function (data) {
            _this.airports = data.data;
            console.log('airports ', _this.airports);
        });
    };
    NewHandlerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-handler',
            template: __webpack_require__(/*! ./new-handler.component.html */ "./src/app/admin/new-handler/new-handler.component.html"),
            styles: [__webpack_require__(/*! ./new-handler.component.scss */ "./src/app/admin/new-handler/new-handler.component.scss")]
        }),
        __metadata("design:paramtypes", [_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], NewHandlerComponent);
    return NewHandlerComponent;
}());



/***/ }),

/***/ "./src/app/admin/sales/sales.component.html":
/*!**************************************************!*\
  !*** ./src/app/admin/sales/sales.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container\">\n  <div class=\"columns\">\n    <div class=\"column is-3\">\n      <app-side-nav></app-side-nav>\n    </div>\n    <div class=\"column is-9\">\n      <h3 class=\"title is-pulled-left\">Sales Overview</h3>\n      <a routerLink=\"/admin/add-sales\" class=\"button is-primary is-outlined is-pulled-right\">Add Sales</a>\n      <table class=\"table is-fullwidth\">\n        <thead>\n          <th>ID</th>\n          <th>Client Name</th>\n          <th>Date Created</th>\n          <th>Flight Date</th>\n          <th>Flight Origin</th>\n          <th>Flight Destination</th>\n          <th>Action</th>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let sale of sales\">\n            <td>\n              <a routerLink=\"/admin/new-flight/{{sale._id}}\">\n                {{sale._id}}\n              </a>\n            </td>\n            <td>\n                {{sale.contact_name}}\n            </td>\n            <td>\n              2019-02-11 11:00PM\n            </td>\n            <td>\n              {{sale.departure}}\n            </td>\n            <td>{{sale.origin_airport}}</td>\n            <td>{{sale.destination_airport}}</td>\n            <td>\n              <a class=\"is-link\" routerLink=\"/admin/edit-sales/{{sale._id}}\">Edit</a> / \n              <a class=\"is-danger\" (click)=\"delete(sale._id)\">Delete</a>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n      <div class=\"modal\" id=\"add-aircraft\">\n        <div class=\"modal-background\"></div>\n        <div class=\"modal-card\">\n          <header class=\"modal-card-head\">\n            <p class=\"modal-card-title\">Add Aircraft</p>\n            <button class=\"delete\" aria-label=\"close\"></button>\n          </header>\n          <section class=\"modal-card-body\">\n            <div class=\"field\">\n              <label class=\"label\">Registration</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" placeholder=\"\">\n              </div>\n            </div>\n            <div class=\"field\">\n              <label class=\"label\">Photo</label>\n              <div class=\"control\">\n                <div class=\"file has-name\">\n                  <label class=\"file-label\">\n                    <input class=\"file-input\" type=\"file\" name=\"resume\">\n                    <span class=\"file-cta\">\n                      <span class=\"file-icon\">\n                        <i class=\"fas fa-upload\"></i>\n                      </span>\n                      <span class=\"file-label\">\n                        Choose an image…\n                      </span>\n                    </span>\n                    <span class=\"file-name\">\n                      .jpg, .png, .gif\n                    </span>\n                  </label>\n                </div>\n              </div>\n            </div>\n            <div class=\"field\">\n              <label class=\"label\">Max Take Off Weight</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" placeholder=\"\">\n              </div>\n            </div>\n            <div class=\"field\">\n              <label class=\"label\">Max Fuel Capacity</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" placeholder=\"\">\n              </div>\n            </div>\n            <div class=\"field\">\n              <label class=\"label\">Max PAX</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" placeholder=\"\">\n              </div>\n            </div>\n            <div class=\"field\">\n              <label class=\"label\">Max Cargo</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" placeholder=\"\">\n              </div>\n            </div>\n\n\n          </section>\n          <footer class=\"modal-card-foot\">\n            <button class=\"button is-success\">Add</button>\n            <button class=\"button\">Cancel</button>\n          </footer>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<app-chat></app-chat>\n"

/***/ }),

/***/ "./src/app/admin/sales/sales.component.scss":
/*!**************************************************!*\
  !*** ./src/app/admin/sales/sales.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3NhbGVzL3NhbGVzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/sales/sales.component.ts":
/*!************************************************!*\
  !*** ./src/app/admin/sales/sales.component.ts ***!
  \************************************************/
/*! exports provided: SalesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesComponent", function() { return SalesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../admin.service */ "./src/app/admin/admin.service.ts");
/* harmony import */ var bulma_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bulma-toast */ "./node_modules/bulma-toast/dist/bulma-toast.min.js");
/* harmony import */ var bulma_toast__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bulma_toast__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SalesComponent = /** @class */ (function () {
    function SalesComponent(adminService) {
        this.adminService = adminService;
    }
    SalesComponent.prototype.ngOnInit = function () {
        this.getSales();
    };
    SalesComponent.prototype.getSales = function () {
        var _this = this;
        this.adminService.getSales().subscribe(function (data) {
            _this.sales = data.data;
            console.log('sales ', _this.sales);
        });
    };
    SalesComponent.prototype.delete = function (aircraft) {
        var _this = this;
        console.log('update start');
        this.adminService.deleteCrew(aircraft)
            .subscribe(function (data) {
            if (data.data === "deleted") {
                console.log('Airport Deleted ', data);
                _this.getSales();
                Object(bulma_toast__WEBPACK_IMPORTED_MODULE_2__["toast"])({
                    message: "Airport Deleted",
                    type: "is-success",
                    dismissible: true,
                    pauseOnHover: true
                });
            }
        });
    };
    SalesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sales',
            template: __webpack_require__(/*! ./sales.component.html */ "./src/app/admin/sales/sales.component.html"),
            styles: [__webpack_require__(/*! ./sales.component.scss */ "./src/app/admin/sales/sales.component.scss")]
        }),
        __metadata("design:paramtypes", [_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"]])
    ], SalesComponent);
    return SalesComponent;
}());



/***/ }),

/***/ "./src/app/admin/settings/settings.component.html":
/*!********************************************************!*\
  !*** ./src/app/admin/settings/settings.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container-fluid page-body-wrapper\">\n  <app-side-nav></app-side-nav>\n  <!-- Main Content -->\n  <div class=\"main-panel\">\n    <div class=\"content-wrapper\">\n\n      <div class=\"page_header p_header_two d-flex\">\n        <h4><strong>Settings</strong></h4>\n        <div class=\"ml-auto\">\n          <a routerLink=\"/admin/new-handler\" class=\"btn bg_blue\">Add User</a>\n        </div>\n      </div>\n\n      <div class=\"block table_block\">\n        <div class=\"table-responsive\">\n          <table class=\"table\">\n            <thead>\n              <tr>\n                <th class=\"u_l_ID\">ID</th>\n                <th class=\"u_l_name\">FULL Name</th>\n                <th class=\"u_l_email\">Email Address</th>\n                <th class=\"u_l_date\">Date Created</th>\n                <th class=\"u_l_actions\">Actions</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let user of users\">\n                <td class=\"u_l_ID\">{{user._id}}</td>\n                <td class=\"u_l_name\">{{user.fullname}}</td>\n                <td class=\"u_l_email\">{{user.email}}</td>\n                <td class=\"u_l_date\">{{user.createdAt}}</td>\n                <td class=\"u_l_actions\">\n                  <div class=\"action_btns\">\n                    <a (click)=\"getUser(user._id)\" class=\"edit_btn\"><i class=\"fa fa-edit\"></i><span>Edit</span></a>\n                    <a (click)=\"delete(user._id)\" class=\"delete_btn\"><i class=\"fa fa-trash\"></i><span>Delete</span></a>\n                  </div>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n      <div class=\"block mail_templates_block\">\n        <div class=\"row\">\n\n          <div class=\"col-md-6\" *ngIf=\"crewTemplate\">\n            <div class=\"mail_template_div\">\n              <h3>Crew Mail Template</h3>\n              <form>\n                <div class=\"form-group\">\n                  <label>Subject</label>\n                  <input type=\"input\" placeholder=\"Type Subject Here...\" name=\"crew_subject\"\n                    [(ngModel)]=\"crewTemplate.subject\" class=\"form-control\">\n                </div>\n                <div class=\"form-group\">\n                  <label>Message</label>\n                  <textarea placeholder=\"Type Message Here...\" name=\"crew_message\" [(ngModel)]=\"crewTemplate.message\"\n                    class=\"form-control\" (change)=\"handleCrewChange($event.target.value)\"\n                    [(ngModel)]=\"crewTemplate.message\"></textarea>\n                </div>\n                <button class=\"btn bg_blue\" (click)=\"saveCrew()\">Save</button>\n              </form>\n            </div>\n          </div>\n\n          <div class=\"col-md-6\" *ngIf=\"handlerTemplate\">\n            <div class=\"mail_template_div\">\n              <h3>Handler Mail Template</h3>\n              <form>\n                <div class=\"form-group\">\n                  <label>Subject</label>\n                  <input type=\"input\" placeholder=\"Type Subject Here...\" name=\"subject\"\n                    [(ngModel)]=\"handlerTemplate.subject\" class=\"form-control\">\n                </div>\n                <div class=\"form-group\">\n                  <label>Message</label>\n                  <textarea placeholder=\"Type Message Here...\" name=\"message\" class=\"form-control\"\n                    [(ngModel)]=\"handlerTemplate.message\"></textarea>\n                </div>\n                <button class=\"btn bg_blue\" (click)=\"saveHandler()\">Save</button>\n              </form>\n            </div>\n          </div>\n\n        </div>\n      </div>\n      <div class=\"modal\" id=\"add-user\">\n        <div class=\"modal-background\"></div>\n        <div class=\"modal-card\">\n          <header class=\"modal-card-head\">\n            <p class=\"modal-card-title\" *ngIf=\"!update\">Add User</p>\n            <p class=\"modal-card-title\" *ngIf=\"update\">Update User</p>\n            <button class=\"delete\" aria-label=\"close\" (click)=\"close()\"></button>\n          </header>\n          <section class=\"modal-card-body\" [formGroup]=\"userForm\">\n            <div class=\"field\">\n              <label class=\"label\">Fullname</label>\n              <div class=\"control\">\n                <input class=\"input\" placeholder=\"Fullname\" formControlName=\"fullname\" name=\"fullname\" required>\n              </div>\n            </div>\n            <div class=\"field\">\n              <label class=\"label\">Email</label>\n              <div class=\"control\">\n                <input class=\"input\" placeholder=\"Email\" formControlName=\"email\" name=\"email\" required>\n\n              </div>\n            </div>\n            <div class=\"field\">\n              <label class=\"label\">Password</label>\n              <div class=\"control\">\n                <input class=\"input\" placeholder=\"Password\" formControlName=\"password\" type=\"password\" name=\"password\"\n                  required>\n              </div>\n            </div>\n            <div class=\"field\">\n              <label class=\"label\">Repeat Password</label>\n              <div class=\"control\">\n                <input class=\"input\" placeholder=\"Reapet Password\" formControlName=\"repeatPassword\" type=\"password\"\n                  name=\"repeatPassword\" required>\n\n              </div>\n            </div>\n\n\n          </section>\n          <footer class=\"modal-card-foot\">\n            <button class=\"button is-success\" (click)=\"register()\" *ngIf=\"!update\">Add</button>\n            <button class=\"button is-success\" (click)=\"updateUser()\" *ngIf=\"update\">Update</button>\n            <button class=\"button\" (click)=\"close()\">Cancel</button>\n          </footer>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<app-chat></app-chat>"

/***/ }),

/***/ "./src/app/admin/settings/settings.component.scss":
/*!********************************************************!*\
  !*** ./src/app/admin/settings/settings.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/settings/settings.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin/settings/settings.component.ts ***!
  \******************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin.service */ "./src/app/admin/admin.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var bulma_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bulma-toast */ "./node_modules/bulma-toast/dist/bulma-toast.min.js");
/* harmony import */ var bulma_toast__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bulma_toast__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(adminService) {
        this.adminService = adminService;
        this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            fullname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            repeatPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, this.passwordsMatchValidator])
        });
    }
    SettingsComponent.prototype.ngOnInit = function () {
        this.getTemplates();
        jquery__WEBPACK_IMPORTED_MODULE_1__('#btn-add-user').on('click', function () {
            jquery__WEBPACK_IMPORTED_MODULE_1__('#add-user').addClass('is-active');
        });
        this.getUsers();
    };
    SettingsComponent.prototype.getUsers = function () {
        var _this = this;
        this.adminService.getUsers().subscribe(function (data) {
            _this.users = data.data;
            console.log('crews ', _this.users);
        });
    };
    SettingsComponent.prototype.getUser = function (id) {
        var _this = this;
        this.adminService.getUser(id).subscribe(function (data) {
            _this.update = true;
            _this.user = data.data;
            _this.userForm.patchValue({
                fullname: _this.user.fullname,
                email: _this.user.email
            });
            jquery__WEBPACK_IMPORTED_MODULE_1__('#add-user').addClass('is-active');
            console.log('user ', _this.user);
        });
    };
    SettingsComponent.prototype.close = function () {
        this.update = false;
        jquery__WEBPACK_IMPORTED_MODULE_1__('#add-user').removeClass('is-active');
        this.userForm.patchValue({
            fullname: '',
            email: ''
        });
    };
    SettingsComponent.prototype.passwordsMatchValidator = function (control) {
        var password = control.root.get('password');
        return password && control.value !== password.value ? {
            passwordMatch: true
        } : null;
    };
    Object.defineProperty(SettingsComponent.prototype, "fullname", {
        get: function () { return this.userForm.get('fullname'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingsComponent.prototype, "email", {
        get: function () { return this.userForm.get('email'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingsComponent.prototype, "password", {
        get: function () { return this.userForm.get('password'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingsComponent.prototype, "repeatPassword", {
        get: function () { return this.userForm.get('repeatPassword'); },
        enumerable: true,
        configurable: true
    });
    SettingsComponent.prototype.getTemplates = function () {
        var _this = this;
        this.adminService.getTemplates().subscribe(function (data) {
            _this.crewTemplate = data.data[0];
            _this.handlerTemplate = data.data[1];
            console.log('get templates ', _this.crewTemplate);
        });
    };
    SettingsComponent.prototype.saveHandler = function () {
        this.adminService.updateTemplate(this.handlerTemplate._id, this.handlerTemplate.subject, this.handlerTemplate.message).subscribe(function (data) {
            console.log('update ', data);
        });
    };
    SettingsComponent.prototype.saveCrew = function () {
        this.adminService.updateTemplate(this.crewTemplate._id, this.crewTemplate.subject, this.crewTemplate.message).subscribe(function (data) {
            console.log('update ', data);
        });
    };
    SettingsComponent.prototype.handleHandlerChange = function (value) {
        this.handlerTemplate.message = value;
        console.log(value);
        console.log(this.handlerTemplate.message);
    };
    SettingsComponent.prototype.handleCrewChange = function (value) {
        this.crewTemplate.message = value;
    };
    SettingsComponent.prototype.register = function () {
        if (!this.userForm.valid) {
            return;
        }
        var _a = this.userForm.getRawValue(), fullname = _a.fullname, email = _a.email, password = _a.password, repeatPassword = _a.repeatPassword;
        this.adminService.addUser(fullname, email, password, repeatPassword, 'admin', '')
            .subscribe(function (data) {
            console.log('new user ', data);
        });
    };
    SettingsComponent.prototype.updateUser = function () {
        var _this = this;
        console.log('update user', this.passwordsMatchValidator);
        var _a = this.userForm.getRawValue(), fullname = _a.fullname, email = _a.email, password = _a.password, repeatPassword = _a.repeatPassword;
        this.adminService.updateUser(this.user._id, fullname, email, password, repeatPassword, this.user.role, this.user.occupation)
            .subscribe(function (data) {
            jquery__WEBPACK_IMPORTED_MODULE_1__('#add-user').removeClass('is-active');
            _this.getUsers();
            console.log('update user ', data);
            Object(bulma_toast__WEBPACK_IMPORTED_MODULE_4__["toast"])({
                message: 'User Updated',
                type: 'is-success',
                dismissible: true,
                pauseOnHover: true
            });
        });
    };
    SettingsComponent.prototype.delete = function (user) {
        var _this = this;
        console.log('update start');
        this.adminService.deleteUser(user)
            .subscribe(function (data) {
            if (data.data === 'deleted') {
                console.log('User Deleted ', data);
                _this.getUsers();
                Object(bulma_toast__WEBPACK_IMPORTED_MODULE_4__["toast"])({
                    message: 'User Deleted',
                    type: 'is-success',
                    dismissible: true,
                    pauseOnHover: true
                });
            }
        });
    };
    SettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/admin/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.scss */ "./src/app/admin/settings/settings.component.scss")]
        }),
        __metadata("design:paramtypes", [_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/admin/side-nav/side-nav.component.html":
/*!********************************************************!*\
  !*** ./src/app/admin/side-nav/side-nav.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--  Side-nav -->\n<nav class=\"sidebar sidebar-offcanvas\" id=\"sidebar\">\n  <ul class=\"nav\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"/admin/dashboard\" routerLinkActive=\"active\">\n        <i class=\"menu-icon flaticon-dashboard\"></i>\n        <span class=\"menu-title\">Dashboard</span>\n      </a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"/admin/crews\" routerLinkActive=\"active\">\n        <i class=\"menu-icon flaticon-man\"></i>\n        <span class=\"menu-title\">Crews</span>\n      </a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"/admin/aircrafts\" routerLinkActive=\"active\">\n        <i class=\"menu-icon flaticon-plane\"></i>\n        <span class=\"menu-title\">Aircrafts</span>\n      </a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"/admin/airports/1\" routerLinkActive=\"active\">\n        <i class=\"menu-icon flaticon-takeoff-the-plane\"></i>\n        <span class=\"menu-title\">Airports</span>\n      </a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"/admin/handlers\" routerLinkActive=\"active\">\n        <i class=\"menu-icon flaticon-man\"></i>\n        <span class=\"menu-title\">Handlers</span>\n      </a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"/admin/movements\" routerLinkActive=\"active\">\n        <i class=\"menu-icon flaticon-box\"></i>\n        <span class=\"menu-title\">Movements</span>\n      </a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"/admin/sales\" routerLinkActive=\"active\">\n        <i class=\"menu-icon flaticon-money-bag-with-dollar-symbol\"></i>\n        <span class=\"menu-title\">Sales</span>\n      </a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" (click)=\"newFlight()\">\n        <i class=\"menu-icon flaticon-plane\"></i>\n        <span class=\"menu-title\">New Flight</span>\n      </a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"/admin/settings\" routerLinkActive=\"active\">\n        <i class=\"menu-icon flaticon-settings-work-tool\"></i>\n        <span class=\"menu-title\">Settings</span>\n      </a>\n    </li>\n    <li class=\"nav-item logout_item\">\n      <a class=\"nav-link\" (click)=\"logout()\">\n        <i class=\"menu-icon flaticon-logout\"></i>\n        <span class=\"menu-title\">Logout</span>\n      </a>\n    </li>\n  </ul>\n</nav>\n<!-- Side-nav -->\n\n<!-- The Create Flight Modal -->\n<div class=\"modal fade\" id=\"createFlight\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n\n      <!-- Modal body -->\n      <div class=\"modal-body\">\n        <div class=\"modal_head\">\n          <h4 class=\"modal_heading\">Create New Flight</h4>\n          <button type=\"button\" class=\"close\" (click)=\"close()\"><i class=\"flaticon-close\"></i></button>\n        </div>\n        <form class=\"create_flight_process\">\n          <div class=\"blue_box\">\n            <h6>Basic Information</h6>\n            <div class=\"row\">\n              <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                  <label>Reference</label>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"e.g. XXAA11\">\n                </div>\n              </div>\n              <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                  <label>Aircraft</label>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"e.g. ABC123\">\n                </div>\n              </div>\n              <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                  <label>Operations Lead</label>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"e.g.John Smith\">\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <!-- tabs -->\n          <ul class=\"nav nav-tabs\" role=\"tablist\">\n            <li role=\"presentation\">\n              <a href=\"#flightTab\" aria-controls=\"flightTab\" class=\"active\" role=\"tab\" data-toggle=\"tab\"\n                aria-expanded=\"true\"><i class=\"tab-icon flaticon-plane\"></i>Flight</a>\n            </li>\n            <li>\n              <a href=\"#payloadTab\" aria-controls=\"payloadTab\" role=\"tab\" data-toggle=\"tab\" aria-expanded=\"false\"><i\n                  class=\"tab-icon flaticon-box\"></i>Payload</a>\n            </li>\n            <li>\n              <a href=\"#documentTab\" aria-controls=\"documentTab\" role=\"tab\" data-toggle=\"tab\" aria-expanded=\"false\"><i\n                  class=\"tab-icon flaticon-file\"></i>Documents</a>\n            </li>\n          </ul><!-- /.tabs -->\n\n          <!-- tab content -->\n          <div class=\"tab-content blue_box\">\n\n            <div role=\"tabpanel\" class=\"tab-pane active\" id=\"flightTab\">\n              <div class=\"\">\n                <div class=\"row\">\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label>Origin</label>\n                      <input type=\"text\" class=\"form-control\" placeholder=\"e.g. London\">\n                    </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label>Destination</label>\n                      <input type=\"text\" class=\"form-control\" placeholder=\"e.g. New York\">\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label>Datetime</label>\n                      <input type=\"text\" class=\"form-control\" placeholder=\"e.g. 5:30PM IST\">\n                    </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group radio_input_group\">\n                      <label class=\"radio_input\">\n                        <input type=\"radio\" name=\"d_a_daytime\">\n                        <span>Depart daytime</span>\n                      </label>\n                      <label class=\"radio_input\">\n                        <input type=\"radio\" name=\"d_a_daytime\" checked=\"checked\">\n                        <span>Arrival daytime</span>\n                      </label>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"text-center\">\n                  <!-- <button type=\"submit\" class=\"btn bg_blue done_btn\">Next</button> -->\n                  <a class=\"btn bg_blue done_btn continue\">Next</a>\n                </div>\n              </div>\n            </div>\n\n            <div role=\"tabpanel\" class=\"tab-pane\" id=\"payloadTab\">\n              <div class=\"form-group flight_type\">\n                <label class=\"radio_input\">\n                  <input type=\"radio\" name=\"flightType\" checked=\"checked\">\n                  <span>Cargo</span>\n                </label>\n                <label class=\"radio_input\">\n                  <input type=\"radio\" name=\"flightType\">\n                  <span>Passenger</span>\n                </label>\n              </div>\n              <div class=\"items_details\">\n                <div class=\"row\">\n                  <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                      <label>Item</label>\n                      <input type=\"text\" class=\"form-control\" placeholder=\"e.g. Kitchen Appliances\">\n                    </div>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                      <label>Weight</label>\n                      <input type=\"text\" class=\"form-control\" placeholder=\"e.g. 45 tons\">\n                    </div>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                      <label>Amount</label>\n                      <input type=\"text\" class=\"form-control\" placeholder=\"e.g. $4500\">\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                      <label class=\"hidden-md-up\">Item</label>\n                      <input type=\"text\" class=\"form-control\" placeholder=\"e.g. Kitchen Appliances\">\n                    </div>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                      <label class=\"hidden-md-up\">Weight</label>\n                      <input type=\"text\" class=\"form-control\" placeholder=\"e.g. 45 tons\">\n                    </div>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                      <label class=\"hidden-md-up\">Amount</label>\n                      <input type=\"text\" class=\"form-control\" placeholder=\"e.g. $4500\">\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                      <label class=\"hidden-md-up\">Item</label>\n                      <input type=\"text\" class=\"form-control\" placeholder=\"e.g. Kitchen Appliances\">\n                    </div>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                      <label class=\"hidden-md-up\">Weight</label>\n                      <input type=\"text\" class=\"form-control\" placeholder=\"e.g. 45 tons\">\n                    </div>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                      <label class=\"hidden-md-up\">Amount</label>\n                      <input type=\"text\" class=\"form-control\" placeholder=\"e.g. $4500\">\n                    </div>\n                  </div>\n                </div>\n                <a href=\"#\" class=\"btn add_new_item\"><i class=\"flaticon-add\"></i> Add New</a>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-5 order-2\">\n                  <div class=\"total_payload\">\n                    <span>Total Payload</span>\n                    <div class=\"payload_value\">25000 Kg</div>\n                  </div>\n                </div>\n                <div class=\"col-md-7\">\n                  <a class=\"btn btn-primary back\">Back</a>\n                  <a class=\"btn bg_blue done_btn continue\">Next</a>\n                </div>\n\n              </div>\n            </div>\n            <div role=\"tabpanel\" class=\"tab-pane\" id=\"documentTab\">\n              <ul class=\"flight_documents_list\">\n                <li>\n                  <div class=\"form-group\">\n                    <label>Origin</label>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"e.g. London\">\n                  </div>\n                  <div class=\"form-group\">\n                    <label>Type</label>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"e.g. New York\">\n                  </div>\n                  <a href=\"#\" class=\"download_document\"><i class=\"flaticon-download\"></i></a>\n                </li>\n                <li>\n                  <div class=\"form-group\">\n                    <label class=\"hidden-md-up\">Origin</label>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"e.g. London\">\n                  </div>\n                  <div class=\"form-group\">\n                    <label class=\"hidden-md-up\">Type</label>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"e.g. New York\">\n                  </div>\n                  <a href=\"#\" class=\"download_document\"><i class=\"flaticon-download\"></i></a>\n                </li>\n                <li>\n                  <div class=\"form-group\">\n                    <label class=\"hidden-md-up\">Origin</label>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"e.g. London\">\n                  </div>\n                  <div class=\"form-group\">\n                    <label class=\"hidden-md-up\">Type</label>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"e.g. New York\">\n                  </div>\n                  <a href=\"#\" class=\"download_document\"><i class=\"flaticon-download\"></i></a>\n                </li>\n              </ul>\n              <div class=\"text-center\">\n                <!-- <a class=\"btn btn-primary back\">Back</a> -->\n                <a class=\"btn bg_blue done_btn continue\">Next</a>\n              </div>\n            </div>\n          </div><!-- /. tab content -->\n\n        </form>\n\n\n      </div>\n    </div>\n  </div>\n</div><!-- /. create flight popup -->"

/***/ }),

/***/ "./src/app/admin/side-nav/side-nav.component.scss":
/*!********************************************************!*\
  !*** ./src/app/admin/side-nav/side-nav.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal.show {\n  display: block;\n  padding-left: 0; }\n\n.fade {\n  transition: opacity 0.15s linear; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZXgvRG9jdW1lbnRzL0dpdEh1Yi9mbGlnaHRvcHMvc3JjL2FwcC9hZG1pbi9zaWRlLW5hdi9zaWRlLW5hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWM7RUFDZCxlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksZ0NBQWdDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9zaWRlLW5hdi9zaWRlLW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbC5zaG93IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG59XG4uZmFkZSB7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjE1cyBsaW5lYXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/admin/side-nav/side-nav.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin/side-nav/side-nav.component.ts ***!
  \******************************************************/
/*! exports provided: SideNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavComponent", function() { return SideNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SideNavComponent = /** @class */ (function () {
    function SideNavComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    SideNavComponent.prototype.ngOnInit = function () {
        var _this = this;
        setInterval(function () { _this.startTime(); _this.startZuluTime(); }, 1000);
        this.zuluTime = new Date();
    };
    SideNavComponent.prototype.checkTime = function (i) {
        if (i < 10) {
            i = '0' + i;
        }
        return i;
    };
    SideNavComponent.prototype.startTime = function () {
        var today = new Date();
        var d = today.getDate();
        var mm = today.getMonth();
        var y = today.getFullYear();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        // add a zero in front of numbers<10
        d = this.checkTime(d);
        mm = this.checkTime(mm);
        h = this.checkTime(h);
        m = this.checkTime(m);
        s = this.checkTime(s);
        this.localTime = d + '-' + mm + '-' + y + ' ' + h + ':' + m + ':' + s;
    };
    SideNavComponent.prototype.startZuluTime = function () {
        var today = new Date();
        var d = today.getUTCDate();
        var mm = today.getUTCMonth();
        var y = today.getUTCFullYear();
        var h = today.getUTCHours();
        var m = today.getUTCMinutes();
        var s = today.getUTCSeconds();
        // add a zero in front of numbers<10
        d = this.checkTime(d);
        mm = this.checkTime(mm);
        h = this.checkTime(h);
        m = this.checkTime(m);
        s = this.checkTime(s);
        this.zuluTime = d + '-' + mm + '-' + y + ' ' + h + ':' + m + ':' + s;
    };
    SideNavComponent.prototype.logout = function () {
        this.authService.signOut();
        this.navigate('/auth/login');
    };
    SideNavComponent.prototype.newFlight = function () {
        console.log('hello');
        jquery__WEBPACK_IMPORTED_MODULE_1__('#createFlight').addClass('show');
        jquery__WEBPACK_IMPORTED_MODULE_1__('body').addClass('modal-open');
        jquery__WEBPACK_IMPORTED_MODULE_1__('body').append('<div class="modal-backdrop fade show"></div>');
    };
    SideNavComponent.prototype.close = function () {
        jquery__WEBPACK_IMPORTED_MODULE_1__('#createFlight').removeClass('show');
        jquery__WEBPACK_IMPORTED_MODULE_1__('body').removeClass('modal-open');
        jquery__WEBPACK_IMPORTED_MODULE_1__('.modal-backdrop').remove();
    };
    SideNavComponent.prototype.navigate = function (link) {
        this.router.navigate([link]);
    };
    SideNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-side-nav',
            template: __webpack_require__(/*! ./side-nav.component.html */ "./src/app/admin/side-nav/side-nav.component.html"),
            styles: [__webpack_require__(/*! ./side-nav.component.scss */ "./src/app/admin/side-nav/side-nav.component.scss")]
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SideNavComponent);
    return SideNavComponent;
}());



/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth-guard.service */ "./src/app/auth/auth-guard.service.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/login/login.component */ "./src/app/auth/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [{
        path: '',
        component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
        path: 'auth',
        loadChildren: 'app/auth/auth.module#AuthModule'
    }, {
        path: 'admin',
        loadChildren: 'app/admin/admin.module#AdminModule'
    }];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = /** @class */ (function () {
    function AppComponent(authService, router, domSanitizer, matIconRegistry) {
        this.authService = authService;
        this.router = router;
        this.domSanitizer = domSanitizer;
        this.matIconRegistry = matIconRegistry;
        this.registerSvgIcons();
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        // init this.user on startup
        this.authService.me().subscribe(function (data) {
            _this.user = data.user;
        });
        // update this.user after login/register/logout
        this.userSubscription = this.authService.$userSource.subscribe(function (user) {
            _this.user = user;
        });
    };
    AppComponent.prototype.logout = function () {
        this.authService.signOut();
        this.navigate('');
    };
    AppComponent.prototype.navigate = function (link) {
        this.router.navigate([link]);
    };
    AppComponent.prototype.ngOnDestroy = function () {
        if (this.userSubscription) {
            this.userSubscription.unsubscribe();
        }
    };
    AppComponent.prototype.registerSvgIcons = function () {
        var _this = this;
        [
            'close',
            'add',
            'add-blue',
            'airplane-front-view',
            'air-station',
            'balloon',
            'boat',
            'cargo-ship',
            'car',
            'catamaran',
            'clone',
            'convertible',
            'delete',
            'drone',
            'fighter-plane',
            'fire-truck',
            'horseback-riding',
            'motorcycle',
            'railcar',
            'railroad-train',
            'rocket-boot',
            'sailing-boat',
            'segway',
            'shuttle',
            'space-shuttle',
            'steam-engine',
            'suv',
            'tour-bus',
            'tow-truck',
            'transportation',
            'trolleybus',
            'water-transportation',
        ].forEach(function (icon) {
            _this.matIconRegistry.addSvgIcon(icon, _this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/" + icon + ".svg"));
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _admin_admin_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin/admin.module */ "./src/app/admin/admin.module.ts");
/* harmony import */ var _interceptors_header_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./interceptors/header.interceptor */ "./src/app/interceptors/header.interceptor.ts");
/* harmony import */ var _interceptors_http_error_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./interceptors/http-error.interceptor */ "./src/app/interceptors/http-error.interceptor.ts");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _shell_shell_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shell/shell.component */ "./src/app/shell/shell.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _shell_shell_component__WEBPACK_IMPORTED_MODULE_13__["ShellComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__["FileUploadModule"],
                _auth_auth_module__WEBPACK_IMPORTED_MODULE_6__["AuthModule"],
                _admin_admin_module__WEBPACK_IMPORTED_MODULE_9__["AdminModule"],
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
            ],
            providers: [{
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                    useClass: _interceptors_header_interceptor__WEBPACK_IMPORTED_MODULE_10__["AuthHeaderInterceptor"],
                    multi: true,
                }, {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                    useClass: _interceptors_http_error_interceptor__WEBPACK_IMPORTED_MODULE_11__["CatchErrorInterceptor"],
                    multi: true,
                }],
            entryComponents: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth-guard.service.ts":
/*!********************************************!*\
  !*** ./src/app/auth/auth-guard.service.ts ***!
  \********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        var user = window.user;
        if (user)
            return true;
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/auth/login']);
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ "./src/app/auth/register/register.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [{
        path: 'auth',
        children: [{
                path: '',
                redirectTo: '/auth/login',
                pathMatch: 'full'
            }, {
                path: 'login',
                component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
            }, {
                path: 'register',
                component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"]
            }]
    }];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.component.scss":
/*!******************************************!*\
  !*** ./src/app/auth/auth.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-icon {\n  padding: 0 14px; }\n\n.example-spacer {\n  flex: 1 1 auto; }\n\n.example-card {\n  width: 400px;\n  margin: 10% auto; }\n\n.mat-card-title {\n  font-size: 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZXgvRG9jdW1lbnRzL0dpdEh1Yi9mbGlnaHRvcHMvc3JjL2FwcC9hdXRoL2F1dGguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsY0FBYyxFQUFBOztBQUdoQjtFQUNFLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2F1dGguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1pY29uIHtcbiAgcGFkZGluZzogMCAxNHB4O1xufVxuXG4uZXhhbXBsZS1zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLmV4YW1wbGUtY2FyZCB7XG4gIHdpZHRoOiA0MDBweDtcbiAgbWFyZ2luOiAxMCUgYXV0bztcbn1cblxuLm1hdC1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _token_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./token.storage */ "./src/app/auth/token.storage.ts");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/auth/auth-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _auth_routing_module__WEBPACK_IMPORTED_MODULE_7__["AuthRoutingModule"],
            ],
            declarations: [
                _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]
            ],
            providers: [
                _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
                _token_storage__WEBPACK_IMPORTED_MODULE_6__["TokenStorage"]
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var _token_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./token.storage */ "./src/app/auth/token.storage.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(http, token) {
        this.http = http;
        this.token = token;
        this.$userSource = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.post('/api/auth/login', {
                email: email,
                password: password
            }).subscribe(function (data) {
                observer.next({ user: data.user });
                _this.setUser(data.user);
                _this.token.saveToken(data.token);
                observer.complete();
            });
        });
    };
    AuthService.prototype.register = function (fullname, email, password, repeatPassword) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.post('/api/auth/register', {
                fullname: fullname,
                email: email,
                password: password,
                repeatPassword: repeatPassword
            }).subscribe(function (data) {
                observer.next({ user: data.user });
                _this.setUser(data.user);
                _this.token.saveToken(data.token);
                observer.complete();
            });
        });
    };
    AuthService.prototype.setUser = function (user) {
        if (user)
            user.isAdmin = (user.roles.indexOf('admin') > -1);
        this.$userSource.next(user);
        window.user = user;
    };
    AuthService.prototype.getUser = function () {
        return this.$userSource.asObservable();
    };
    AuthService.prototype.me = function () {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            var tokenVal = _this.token.getToken();
            if (!tokenVal)
                return observer.complete();
            _this.http.get('/api/auth/me').subscribe(function (data) {
                observer.next({ user: data.user });
                _this.setUser(data.user);
                observer.complete();
            });
        });
    };
    AuthService.prototype.loggedIn = function () {
        var tokenVal = this.token.getToken();
        if (!tokenVal)
            return false;
        return true;
    };
    AuthService.prototype.signOut = function () {
        this.token.signOut();
        this.setUser(null);
        delete window.user;
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _token_storage__WEBPACK_IMPORTED_MODULE_4__["TokenStorage"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-scroller\">\n  <!-- login wrapper -->\n  <div class=\"login_wrapper\">\n    <div class=\"login_wrapper_inner\">\n      <div class=\"login_left\">\n\n        <div class=\"login_form_wrap\">\n          <div>\n            <div class=\"login_logo_div\">\n              <a class=\"\" href=\"index.html\"><img src=\"../../../assets/images/logo.png\" alt=\"logo\" /></a>\n            </div>\n            <div class=\"login_form_inner\">\n              <div class=\"login_head\">\n                <h2 class=\"text-center\">Sign in to Downwind.io</h2>\n                <p class=\"mb-md-0 fw-500 text-center\">Please enter your credentials to proceed.</p>\n              </div>\n              <form>\n                <div class=\"form-group\">\n                  <label>EMAIL ADDRESS</label>\n                <input class=\"form-control\" placeholder=\"eg.abc@gmail.com\" [(ngModel)]=\"email\" name=\"email\" type=\"email\">\n                </div>\n                <div class=\"form-group\">\n                  <a class=\"forgot_pass_link\" href=\"#\">Forgot password?</a>\n                  <label>PASSWORD</label>\n                  <input class=\"form-control\" placeholder=\"••••••••••\" [(ngModel)]=\"password\" name=\"password\"\n                    type=\"password\">\n                </div>\n                <button type=\"button\" class=\"btn bg_blue\" (click)=\"login()\">Sign in</button>\n                <!-- <div class=\"login_bottom_content text-center\">Dont’ have an account? <a href=\"#\" class=\"c_blue\">Sign\n                    Up</a></div> -->\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- login banner -->\n      <div class=\"login_right\">\n        <div class=\"login_right_banner\">\n          <img src=\"../../../assets/images/login-bg.jpg\" alt=\"login\">\n        </div>\n      </div><!-- /. login banner -->\n    </div>\n  </div><!-- /. login wrapper -->\n\n</div>"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authService.login(this.email, this.password)
            .subscribe(function (data) {
            _this.router.navigate(['/admin/dashboard']);
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ../auth.component.scss */ "./src/app/auth/auth.component.scss")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/register/register.component.html":
/*!*******************************************************!*\
  !*** ./src/app/auth/register/register.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card\">\n  <mat-card-header>\n    <mat-card-title>Register</mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n    <form class=\"example-form\">\n      <table cellspacing=\"0\" [formGroup]=\"userForm\">\n        <tr>\n          <td>\n            <mat-form-field>\n              <input matInput placeholder=\"Fullname\" formControlName=\"fullname\" name=\"fullname\" required>\n            </mat-form-field>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <mat-form-field>\n              <input matInput placeholder=\"Email\" formControlName=\"email\" name=\"email\" required>\n              <mat-error *ngIf=\"email.invalid && email.errors.email\">Invalid email address</mat-error>\n            </mat-form-field>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <mat-form-field>\n              <input matInput placeholder=\"Password\" formControlName=\"password\" type=\"password\" name=\"password\" required>\n            </mat-form-field>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <mat-form-field>\n              <input matInput placeholder=\"Reapet Password\" formControlName=\"repeatPassword\" type=\"password\" name=\"repeatPassword\" required>\n              <mat-error *ngIf=\"repeatPassword.invalid && repeatPassword.errors.passwordMatch\">Password mismatch</mat-error>\n            </mat-form-field>\n          </td>\n        </tr>\n      </table>\n    </form>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-raised-button (click)=\"register()\" color=\"primary\">Register</button>\n    <span>Allrady have an account ? <a [routerLink]=\"['/auth/login']\">login</a> here</span>\n  </mat-card-actions>\n</mat-card>"

/***/ }),

/***/ "./src/app/auth/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/auth/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            fullname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            repeatPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.passwordsMatchValidator])
        });
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.passwordsMatchValidator = function (control) {
        var password = control.root.get('password');
        return password && control.value !== password.value ? {
            passwordMatch: true
        } : null;
    };
    Object.defineProperty(RegisterComponent.prototype, "fullname", {
        get: function () { return this.userForm.get('fullname'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "email", {
        get: function () { return this.userForm.get('email'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "password", {
        get: function () { return this.userForm.get('password'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "repeatPassword", {
        get: function () { return this.userForm.get('repeatPassword'); },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.register = function () {
        var _this = this;
        if (!this.userForm.valid)
            return;
        var _a = this.userForm.getRawValue(), fullname = _a.fullname, email = _a.email, password = _a.password, repeatPassword = _a.repeatPassword;
        this.authService.register(fullname, email, password, repeatPassword)
            .subscribe(function (data) {
            _this.router.navigate(['']);
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/auth/register/register.component.html"),
            styles: [__webpack_require__(/*! ../auth.component.scss */ "./src/app/auth/auth.component.scss")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/auth/token.storage.ts":
/*!***************************************!*\
  !*** ./src/app/auth/token.storage.ts ***!
  \***************************************/
/*! exports provided: TokenStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenStorage", function() { return TokenStorage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TOKEN_KEY = 'AuthToken';
var TokenStorage = /** @class */ (function () {
    function TokenStorage() {
    }
    TokenStorage.prototype.signOut = function () {
        window.localStorage.removeItem(TOKEN_KEY);
        window.localStorage.clear();
    };
    TokenStorage.prototype.saveToken = function (token) {
        if (!token)
            return;
        window.localStorage.removeItem(TOKEN_KEY);
        window.localStorage.setItem(TOKEN_KEY, token);
    };
    TokenStorage.prototype.getToken = function () {
        return localStorage.getItem(TOKEN_KEY);
    };
    TokenStorage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], TokenStorage);
    return TokenStorage;
}());



/***/ }),

/***/ "./src/app/interceptors/header.interceptor.ts":
/*!****************************************************!*\
  !*** ./src/app/interceptors/header.interceptor.ts ***!
  \****************************************************/
/*! exports provided: AuthHeaderInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthHeaderInterceptor", function() { return AuthHeaderInterceptor; });
/* harmony import */ var _auth_token_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth/token.storage */ "./src/app/auth/token.storage.ts");

var AuthHeaderInterceptor = /** @class */ (function () {
    function AuthHeaderInterceptor() {
    }
    AuthHeaderInterceptor.prototype.intercept = function (req, next) {
        // Clone the request to add the new header
        var token = new _auth_token_storage__WEBPACK_IMPORTED_MODULE_0__["TokenStorage"]();
        var tokenVal = token.getToken();
        var clonedRequest = req.clone({
            headers: req
                .headers
                .set('Authorization', tokenVal ? "Bearer " + tokenVal : '')
        });
        // Pass the cloned request instead of the original request to the next handle
        return next.handle(clonedRequest);
    };
    return AuthHeaderInterceptor;
}());



/***/ }),

/***/ "./src/app/interceptors/http-error.interceptor.ts":
/*!********************************************************!*\
  !*** ./src/app/interceptors/http-error.interceptor.ts ***!
  \********************************************************/
/*! exports provided: CatchErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatchErrorInterceptor", function() { return CatchErrorInterceptor; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");


var CatchErrorInterceptor = /** @class */ (function () {
    function CatchErrorInterceptor() {
    }
    CatchErrorInterceptor.prototype.intercept = function (request, next) {
        return next
            .handle(request)
            .do(function (event) { }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpErrorResponse"]) {
                var text = (err.error && err.error.message) ? err.error.message : err.statusText;
                window.globalEvents.emit('open error dialog', text);
            }
        });
    };
    return CatchErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTreeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTreeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
            ],
            declarations: [],
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shell/shell.component.html":
/*!********************************************!*\
  !*** ./src/app/shell/shell.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  shell works!\n</p>\n"

/***/ }),

/***/ "./src/app/shell/shell.component.scss":
/*!********************************************!*\
  !*** ./src/app/shell/shell.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoZWxsL3NoZWxsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shell/shell.component.ts":
/*!******************************************!*\
  !*** ./src/app/shell/shell.component.ts ***!
  \******************************************/
/*! exports provided: ShellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShellComponent", function() { return ShellComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShellComponent = /** @class */ (function () {
    function ShellComponent() {
    }
    ShellComponent.prototype.ngOnInit = function () {
    };
    ShellComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shell',
            template: __webpack_require__(/*! ./shell.component.html */ "./src/app/shell/shell.component.html"),
            styles: [__webpack_require__(/*! ./shell.component.scss */ "./src/app/shell/shell.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ShellComponent);
    return ShellComponent;
}());



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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyBjvGw8Ad2D2MBj-0EyghV-Y0fX0k_Imos",
        authDomain: "flight-ops-b1f2d.firebaseapp.com",
        databaseURL: "https://flight-ops-b1f2d.firebaseio.com",
        projectId: "flight-ops-b1f2d",
        storageBucket: "flight-ops-b1f2d.appspot.com",
        messagingSenderId: "264798965298"
    }
};


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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/lex/Documents/GitHub/flightops/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map