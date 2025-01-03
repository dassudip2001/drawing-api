"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.json({ message: 'Server Is running!' });
});
app.listen(3000, () => console.log('Server ready on port 3000.'));
module.exports = app;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQzovVXNlcnMvc3VkaXAvT25lRHJpdmUvRG9jdW1lbnRzL3RlY2hpbmRlay9uZXctZXhwcmVzcy1wcm9qZWN0L2luZGV4LnRzIiwic291cmNlcyI6WyJDOi9Vc2Vycy9zdWRpcC9PbmVEcml2ZS9Eb2N1bWVudHMvdGVjaGluZGVrL25ldy1leHByZXNzLXByb2plY3QvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOERBQXFEO0FBQ3JELE1BQU0sR0FBRyxHQUFHLElBQUEsaUJBQU8sR0FBRSxDQUFDO0FBRXRCLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO0lBQ3pDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsQ0FBQyxDQUFDO0FBQ2hELENBQUMsQ0FBQyxDQUFDO0FBRUgsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLENBQUM7QUFFbEUsTUFBTSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcywgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnO1xyXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XHJcblxyXG5hcHAuZ2V0KCcvJywgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gICAgcmVzLmpzb24oeyBtZXNzYWdlOiAnU2VydmVyIElzIHJ1bm5pbmchJyB9KTtcclxufSk7XHJcblxyXG5hcHAubGlzdGVuKDMwMDAsICgpID0+IGNvbnNvbGUubG9nKCdTZXJ2ZXIgcmVhZHkgb24gcG9ydCAzMDAwLicpKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gYXBwO1xyXG4iXX0=