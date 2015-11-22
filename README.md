# Angular 2 Demo Application

![](https://raw.githubusercontent.com/codestar-work/spring-map/master/screen.png)

ตัวอย่างการเขียน Component ด้วย Angular 2 สำหรับผู้ที่สนใจดูรายละเอียดที่นี่ครับ https://codestar.work/angular2

# แบบฝึกหัดเพิ่มเติม
กำหนดให้มี StockService สองตัวคือ คือใน stock-service.es และ stock-service-mock.es ใน file แรกจะเป็นข้อมูลจริงใช้เวลาอ่านประมาณ 5 วินาที file ที่สองเป็นข้อมูล offline อ่านได้ทันที การเปลี่ยน StockService แต่ละอันคือใช้วิธี comment บรรทัดที่ไม่ใช้
```ecmascript
// import { StockService } from "./stock-service.es";
import { StockService } from "./stock-service-mock.es";
```
ตัวอย่างการส่ง StockService เข้าไปใน component ผ่าน Dependency Injection และอ่านข้อมูลใน constructor
```ecmascript
constructor(@Inject(StockService) service) {
	this.service = service;
	this.service.read(data => this.result = data);
}
```
ตัวอย่าง component อยู่ใน demo.es

1. ให้เขียน component ที่มีช่องใส่ข้อมูลเพื่อให้ผู้ใช้ค้นหาชื่อจากส่วนหนึ่งของชื่อบริษัท เช่น ถ้าผู้ใช้ใส่คำว่า fa ได้ผลลัพธ์คือ Facebook และ Wells Fargo แล้วแสดงผลออกมาในรูปแบบตาราง โดยไม่ต้อง refresh
2. ตลาดหุ้นหลักในสหรัฐจะมี 2 แห่งคือ New York Stock Exchange และ NASDAQ ในข้อมูลจะใช้คำว่า NYQ และ NMS ตามลำดับ ให้เขียน component แสดงมูลค่าบริษัท 10 อันดับแรกของแต่ละตลาด แสดงพร้อมกันทั้ง 2 tables
3. ให้สร้าง component ที่มีช่องเลือกข้อมูลแบบ select เป็นตลาดหุ้น NYQ และ NMS จากนั้นแสดงหุ้นทั้งหมดที่มาจากตลาดหุ้นที่ผู้ใช้เลือก
4. ให้เขียน service เพื่อหาระยะทางระหว่างสองเมืองโดยอ่านจาก Google Service เช่น ระยะทางระหว่าง Seattle และ Detroit คือ
https://maps.googleapis.com/maps/api/distancematrix/json?origins=Seattle&destinations=Detroit
5. ให้เขียน pipe แปลงเลขอารบิกเป็นเลขไทย เช่น {{ 12345 | thaiNumber }} ได้ผลเป็น ๑๒๓๔๕
