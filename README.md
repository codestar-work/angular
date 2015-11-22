# Angular 2 Demo Application

![](https://raw.githubusercontent.com/codestar-work/spring-map/master/screen.png)

ตัวอย่างการเขียน Component ด้วย Angular 2 สำหรับผู้ที่สนใจดูรายละเอียดที่นี่ครับ https://codestar.work/angular2

# แบบฝึกหัด
กำหนดให้มี StockService สองตัวคือ คือใน stock-service.es และ stock-service-mock.es ใน file แรกจะเป็นข้อมูลจริงใช้เวลาอ่านประมาณ 5 วินาที file ที่สองเป็นข้อมูล offline อ่านได้ทันที การเปลี่ยน StockService แต่ละอันคือใช้วิธี comment บรรทัดที่ไม่ใช้
```ecmascript
// import { StockService } from "./stock-service.es";
import { StockService } from "./stock-service-mock.es";
```
1. ตลาดหุ้นในสหรัฐจะมี New York Stock Exchange และ NASDAQ ในข้อมูลจะใช้คำว่า NYQ และ NMS ตามลำดับ ให้เขียน Component แสดงมูลค่าบริษัท 10 อันดับแรกของแต่ละตลาด

2. ให้เขียน Custom Pipe แปลงเลขอารบิกเป็นเลขไทย เช่น {{ 12345 | thaiNumber }} ได้ผลเป็น ๑๒๓๔๕
