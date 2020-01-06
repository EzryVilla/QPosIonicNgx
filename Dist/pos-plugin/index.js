var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var posPluginOriginal = /** @class */ (function (_super) {
    __extends(posPluginOriginal, _super);
    function posPluginOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    posPluginOriginal.prototype.connectBluetoothDevice = function (success, error, autoConnect, macAddress) { return cordova(this, "connectBluetoothDevice", {}, arguments); };
    posPluginOriginal.prototype.setAmount = function (success, error, amount, cashback, transactionType) { return cordova(this, "setAmount", {}, arguments); };
    posPluginOriginal.prototype.doTrade = function (success, error, timeout) { return cordova(this, "doTrade", {}, arguments); };
    posPluginOriginal.pluginName = "posPlugin";
    posPluginOriginal.plugin = "posPlugin";
    posPluginOriginal.pluginRef = "cordova.plugins.dspread_pos_plugin";
    posPluginOriginal.repo = "https://github.com/fullstackmofo/Mpos.git";
    posPluginOriginal.install = "";
    posPluginOriginal.installVariables = [];
    posPluginOriginal.platforms = ["Android", "iOS"];
    return posPluginOriginal;
}(IonicNativePlugin));
var posPlugin = new posPluginOriginal();
export { posPlugin };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3Bvcy1wbHVnaW4vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVlBLE9BQU8sOEJBQTBGLE1BQU0sb0JBQW9CLENBQUM7O0lBa0M3Riw2QkFBaUI7Ozs7SUFjOUMsMENBQXNCLGFBQUMsT0FBWSxFQUFFLEtBQVUsRUFBRSxXQUFnQixFQUFFLFVBQWU7SUFJbEYsNkJBQVMsYUFBQyxPQUFZLEVBQUUsS0FBVSxFQUFFLE1BQVcsRUFBRSxRQUFhLEVBQUUsZUFBb0I7SUFJcEYsMkJBQU8sYUFBQyxPQUFZLEVBQUUsS0FBVSxFQUFFLE9BQVk7Ozs7Ozs7O29CQXBFaEQ7RUE4QytCLGlCQUFpQjtTQUFuQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIFRoaXMgaXMgYSB0ZW1wbGF0ZSBmb3IgbmV3IHBsdWdpbiB3cmFwcGVyc1xyXG4gKlxyXG4gKiBUT0RPOlxyXG4gKiAtIEFkZC9DaGFuZ2UgaW5mb3JtYXRpb24gYmVsb3dcclxuICogLSBEb2N1bWVudCB1c2FnZSAoaW1wb3J0aW5nLCBleGVjdXRpbmcgbWFpbiBmdW5jdGlvbmFsaXR5KVxyXG4gKiAtIFJlbW92ZSBhbnkgaW1wb3J0cyB0aGF0IHlvdSBhcmUgbm90IHVzaW5nXHJcbiAqIC0gUmVtb3ZlIGFsbCB0aGUgY29tbWVudHMgaW5jbHVkZWQgaW4gdGhpcyB0ZW1wbGF0ZSwgRVhDRVBUIHRoZSBAUGx1Z2luIHdyYXBwZXIgZG9jcyBhbmQgYW55IG90aGVyIGRvY3MgeW91IGFkZGVkXHJcbiAqIC0gUmVtb3ZlIHRoaXMgbm90ZVxyXG4gKlxyXG4gKi9cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIENvcmRvdmFQcm9wZXJ0eSwgQ29yZG92YUluc3RhbmNlLCBJbnN0YW5jZVByb3BlcnR5LCBJb25pY05hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBwb3MgUGx1Z2luXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBUaGlzIHBsdWdpbiBkb2VzIHNvbWV0aGluZ1xyXG4gKlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBwb3NQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL3Bvcy1wbHVnaW4nO1xyXG4gKlxyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHBvc1BsdWdpbjogcG9zUGx1Z2luKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqXHJcbiAqIHRoaXMucG9zUGx1Z2luLmZ1bmN0aW9uTmFtZSgnSGVsbG8nLCAxMjMpXHJcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxyXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xyXG4gKlxyXG4gKiBgYGBcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdwb3NQbHVnaW4nLFxyXG4gIHBsdWdpbjogJ3Bvc1BsdWdpbicsIC8vIG5wbSBwYWNrYWdlIG5hbWUsIGV4YW1wbGU6IGNvcmRvdmEtcGx1Z2luLWNhbWVyYVxyXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5kc3ByZWFkX3Bvc19wbHVnaW4nLCAvLyB0aGUgdmFyaWFibGUgcmVmZXJlbmNlIHRvIGNhbGwgdGhlIHBsdWdpbiwgZXhhbXBsZTogbmF2aWdhdG9yLmdlb2xvY2F0aW9uXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9mdWxsc3RhY2ttb2ZvL01wb3MuZ2l0JywgLy8gdGhlIGdpdGh1YiByZXBvc2l0b3J5IFVSTCBmb3IgdGhlIHBsdWdpblxyXG4gIGluc3RhbGw6ICcnLCAvLyBPUFRJT05BTCBpbnN0YWxsIGNvbW1hbmQsIGluIGNhc2UgdGhlIHBsdWdpbiByZXF1aXJlcyB2YXJpYWJsZXNcclxuICBpbnN0YWxsVmFyaWFibGVzOiBbXSwgLy8gT1BUSU9OQUwgdGhlIHBsdWdpbiByZXF1aXJlcyB2YXJpYWJsZXNcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSAvLyBBcnJheSBvZiBwbGF0Zm9ybXMgc3VwcG9ydGVkLCBleGFtcGxlOiBbJ0FuZHJvaWQnLCAnaU9TJ11cclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgcG9zUGx1Z2luIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG5cclxuICAvKipcclxuICAgKiBUaGlzIGZ1bmN0aW9uIGRvZXMgc29tZXRoaW5nXHJcbiAgICogQHBhcmFtIGFyZzEge3N0cmluZ30gU29tZSBwYXJhbSB0byBjb25maWd1cmUgc29tZXRoaW5nXHJcbiAgICogQHBhcmFtIGFyZzIge251bWJlcn0gQW5vdGhlciBwYXJhbSB0byBjb25maWd1cmUgc29tZXRoaW5nXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcclxuICAgKi9cclxuICAvLyBAQ29yZG92YSgpXHJcbiAgLy8gZnVuY3Rpb25OYW1lKGFyZzE6IHN0cmluZywgYXJnMjogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcclxuICAvLyAgIHJldHVybjsgLy8gV2UgYWRkIHJldHVybjsgaGVyZSB0byBhdm9pZCBhbnkgSURFIC8gQ29tcGlsZXIgZXJyb3JzXHJcbiAgLy8gfVxyXG5cclxuICBAQ29yZG92YSgpXHJcbiAgY29ubmVjdEJsdWV0b290aERldmljZShzdWNjZXNzOiBhbnksIGVycm9yOiBhbnksIGF1dG9Db25uZWN0OiBhbnksIG1hY0FkZHJlc3M6IGFueSkge1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoKVxyXG4gIHNldEFtb3VudChzdWNjZXNzOiBhbnksIGVycm9yOiBhbnksIGFtb3VudDogYW55LCBjYXNoYmFjazogYW55LCB0cmFuc2FjdGlvblR5cGU6IGFueSkge1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoKVxyXG4gIGRvVHJhZGUoc3VjY2VzczogYW55LCBlcnJvcjogYW55LCB0aW1lb3V0OiBhbnkpIHtcclxuICB9XHJcbn1cclxuIl19