(self["webpackChunkbackend"] = self["webpackChunkbackend"] || []).push([[742],{

/***/ 42096:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"attribute.boolean":"บูลีน","attribute.boolean.description":"Yes หรือ no, 1 หรือ 0, true หรือ false","attribute.component":"คอมโพเนนต์","attribute.component.description":"กลุ่มของฟิลด์ที่คุณสามารถซ้ำหรือนำกลับมาใช้ใหม่","attribute.date":"วันที่","attribute.date.description":"เครื่องมือเลือกวันที่ที่มีชั่วโมงนาทีและวินาที","attribute.datetime":"วันที่เวลา","attribute.dynamiczone":"ไดนามิกโซน","attribute.dynamiczone.description":"เลือกคอมโพเนนต์แบบไดนามิกเมื่อแก้ไขเนื้อหา","attribute.email":"อีเมล","attribute.email.description":"ฟิลด์อีเมลที่มีรูปแบบการตรวจสอบความถูกต้อง","attribute.enumeration":"การแจงนับ","attribute.enumeration.description":"รายการค่าจากนั้นเลือกค่าหนึ่ง","attribute.json":"JSON","attribute.json.description":"ข้อมูลในรูปแบบ JSON","attribute.media":"สื่อ","attribute.media.description":"ไฟล์เช่นอิมเมจ, วิดีโอ, เป็นต้น","attribute.null":" ","attribute.number":"หมายเลข","attribute.number.description":"ตัวเลข (integer, float, decimal)","attribute.password":"รหัสผ่าน","attribute.password.description":"ฟิลด์รหัสผ่านที่มีการเข้ารหัส","attribute.relation":"ความสัมพันธ์","attribute.relation.description":"อ้างถึงชนิดคอลเล็กชัน","attribute.richtext":"ข้อความแบบ Rich","attribute.richtext.description":"เครื่องมือแก้ไขข้อความ ที่มีอ็อพชันการจัดรูปแบบ","attribute.text":"ข้อความ","attribute.text.description":"ข้อความเล็กหรือยาวเช่นหัวเรื่องหรือคำอธิบาย","attribute.time":"เวลา","attribute.timestamp":"การประทับเวลา","attribute.uid":"UID","attribute.uid.description":"ตัวระบุเฉพาะ","button.attributes.add.another":"เพิ่มฟิลด์อื่น","button.component.add":"เพิ่มคอมโพเนนต์","button.component.create":"สร้างคอมโพเนนต์ใหม่","button.model.create":"สร้างชนิดการรวบรวมใหม่","button.single-types.create":"สร้างชนิดเดี่ยวใหม่","component.repeatable":"(ทำซ้ำได้)","components.componentSelect.no-component-available":"คุณได้เพิ่มส่วนประกอบทั้งหมดของคุณแล้ว","components.componentSelect.no-component-available.with-search":"ไม่มีคอมโพเนนต์ที่ตรงกับการค้นหาของคุณ","components.componentSelect.value-component":"{number} คอมโพเนนต์ที่เลือก (ชนิดที่จะค้นหาสำหรับคอมโพเนนต์)","components.componentSelect.value-components":"เลือกคอมโพเนนต์ {number} แล้ว","configurations":"การตั้งค่า","contentType.collectionName.description":"มีประโยชน์เมื่อชื่อของชนิดเนื้อหาและชื่อตารางของคุณแตกต่างกัน","contentType.collectionName.label":"ชื่อคอลเล็กชัน","contentType.displayName.label":"ชื่อที่แสดง","contentType.kind.change.warning":"คุณเพียงแค่เปลี่ยนชนิดของชนิดเนื้อหา: API จะถูกรีเซ็ต (เส้นทางตัวควบคุมและเซอร์วิสจะถูกเขียนทับ)","error.attributeName.reserved-name":"ชื่อนี้ไม่สามารถใช้ในชนิดเนื้อหาของคุณได้ เนื่องจากอาจทำให้ฟังก์ชันอื่นเสียหายได้","error.contentTypeName.reserved-name":"ชื่อนี้ไม่สามารถใช้ในโปรเจ็กต์ของคุณ เนื่องจากอาจหยุดการทำงานของฟังก์ชันอื่น","error.validation.enum-duplicate":"ไม่อนุญาตให้ใช้ค่าซ้ำ","error.validation.minSupMax":"ไม่สามารถเหนือกว่า","error.validation.regex":"รูปแบบ Regex ไม่ถูกต้อง","error.validation.relation.targetAttribute-taken":"ชื่อนี้มีอยู่ในเป้าหมาย","form.attribute.component.option.add":"เพิ่มคอมโพเนนต์","form.attribute.component.option.create":"สร้างคอมโพเนนต์ใหม่","form.attribute.component.option.create.description":"คอมโพเนนต์ที่แบ่งใช้ระหว่างชนิดและคอมโพเนนต์จะพร้อมใช้งานและสามารถเข้าถึงได้ทุกที่","form.attribute.component.option.repeatable":"คอมโพเนนต์ที่ทำซ้ำได้","form.attribute.component.option.repeatable.description":"ดีที่สุดสำหรับหลายอินสแตนซ์ (ชุดข้อมูล) ของส่วนผสมเมตาแท็กและอื่นๆ","form.attribute.component.option.reuse-existing":"ใช้คอมโพเนนต์ที่มีอยู่","form.attribute.component.option.reuse-existing.description":"ใช้คอมโพเนนต์ที่สร้างไว้แล้วเพื่อทำให้ข้อมูลของคุณสอดคล้องกันระหว่างชนิดเนื้อหา","form.attribute.component.option.single":"คอมโพเนนต์เดียว","form.attribute.component.option.single.description":"ดีที่สุดสำหรับการจัดกลุ่มฟิลด์เช่นแอดเดรสแบบเต็มข้อมูลหลักและอื่นๆ","form.attribute.item.customColumnName":"ชื่อคอลัมน์แบบกำหนดเอง","form.attribute.item.customColumnName.description":"สิ่งนี้มีประโยชน์ในการเปลี่ยนชื่อคอลัมน์ฐานข้อมูลในรูปแบบที่ครอบคลุมมากขึ้นสำหรับการตอบกลับของ API","form.attribute.item.date.type.date":"วันที่","form.attribute.item.date.type.datetime":"วันที่เวลา","form.attribute.item.date.type.time":"เวลา","form.attribute.item.defineRelation.fieldName":"ชื่อฟิลด์","form.attribute.item.enumeration.graphql":"การเขียนทับชื่อสำหรับ GraphQL","form.attribute.item.enumeration.graphql.description":"อนุญาตให้คุณเขียนทับชื่อที่สร้างขึ้นพื้นฐานสำหรับ GraphQL","form.attribute.item.enumeration.placeholder":"ตัวอย่าง:\\nเช้า\\nเที่ยง\\nเย็น","form.attribute.item.enumeration.rules":"ค่า (หนึ่งบรรทัดต่อค่า)","form.attribute.item.maximum":"ค่าสูงสุด","form.attribute.item.maximumLength":"ความยาวสูงสุด","form.attribute.item.minimum":"ค่าต่ำสุด","form.attribute.item.minimumLength":"ความยาวต่ำสุด","form.attribute.item.number.type":"รูปแบบตัวเลข","form.attribute.item.number.type.biginteger":"จำนวนเต็มขนาดใหญ่ (ตัวอย่าง: 1 2 3 4 5 6 7 8 9)","form.attribute.item.number.type.decimal":"เลขฐานสิบ (ตัวอย่าง: 2.22)","form.attribute.item.number.type.float":"จำนวนจริง (ตัวอย่าง: 3.33333333)","form.attribute.item.number.type.integer":"จำนวนเต็ม (ตัวอย่าง: 10)","form.attribute.item.privateField":"ไพรเวตฟิลด์","form.attribute.item.privateField.description":"ฟิลด์นี้จะไม่แสดงขึ้นในการตอบกลับ API","form.attribute.item.requiredField":"ฟิลด์ที่จำเป็น","form.attribute.item.requiredField.description":"คุณจะไม่สามารถสร้างรายการได้หากฟิลด์นี้ว่างอยู่","form.attribute.item.settings.name":"การตั้งค่า","form.attribute.item.text.regex":"รูปแบบ RegExp","form.attribute.item.text.regex.description":"ข้อความของนิพจน์ปกติ","form.attribute.item.uniqueField":"ฟิลด์เฉพาะ","form.attribute.item.uniqueField.description":"คุณจะไม่สามารถสร้างรายการได้ถ้ามีรายการที่มีเนื้อหาที่เหมือนกันอยู่แล้ว","form.attribute.media.allowed-types":"เลือกชนิดของสื่อบันทึกที่อนุญาต","form.attribute.media.allowed-types.none":"ไม่มี","form.attribute.media.allowed-types.option-files":"ไฟล์","form.attribute.media.allowed-types.option-images":"รูปภาพ","form.attribute.media.allowed-types.option-videos":"วิดีโอ","form.attribute.media.option.multiple":"สื่อบันทึกหลายสื่อ","form.attribute.media.option.multiple.description":"ดีที่สุดสำหรับสไลเดอร์, การหมุนหรือการดาวน์โหลดหลายไฟล์","form.attribute.media.option.single":"สื่อบันทึกเดี่ยว","form.attribute.media.option.single.description":"ดีที่สุดสำหรับ รูปภาพของโปรไฟล์หรือรูปภาพปก","form.attribute.settings.default":"ค่าพื้นฐาน","form.attribute.text.option.long-text":"ข้อความแบบยาว","form.attribute.text.option.long-text.description":"ดีที่สุดสำหรับคำอธิบายชีวประวัติ การค้นหาที่แท้จริงถูกปิดใช้งาน","form.attribute.text.option.short-text":"ข้อความแบบสั้น","form.attribute.text.option.short-text.description":"ดีที่สุดสำหรับหัวเรื่อง, ชื่อ, ลิงก์ (URL) และยังเปิดใช้งานการค้นหาที่แน่นอนบนฟิลด์","form.button.add-components-to-dynamiczone":"เพิ่มคอมโพเนนต์ลงในโซน","form.button.add-field":"เพิ่มฟิลด์อื่น","form.button.add-first-field-to-created-component":"เพิ่มฟิลด์แรกในคอมโพเนนต์","form.button.add.field.to.collectionType":"เพิ่มฟิลด์อื่นให้กับชนิดคอลเล็กชันนี้","form.button.add.field.to.component":"เพิ่มฟิลด์อื่นลงในคอมโพเนนต์นี้","form.button.add.field.to.contentType":"เพิ่มฟิลด์อื่นลงในชนิดเนื้อหานี้","form.button.add.field.to.singleType":"เพิ่มฟิลด์อื่นให้กับชนิดเดี่ยวนี้","form.button.cancel":"ยกเลิก","form.button.collection-type.description":"ดีที่สุดสำหรับหลายอินสแตนซ์เช่น บทความ, ผลิตภัณฑ์, ข้อคิดเห็น เป็นต้น","form.button.configure-component":"ตั้งค่าคอมโพเนนต์","form.button.configure-view":"กำหนดคอนฟิกมุมมอง","form.button.continue":"ดำเนินการต่อ","form.button.delete":"ลบ","form.button.finish":"เสร็จสิ้น","form.button.save":"บันทึก","form.button.select-component":"เลือกคอมโพเนนต์","form.button.single-type.description":"ที่ดีที่สุดสำหรับอินสแตนซ์เดี่ยวเช่น เกี่ยวกับเรา, โฮมเพจ, เป็นต้น","from":"จาก","menu.section.components.name.plural":"คอมโพเนนต์","menu.section.components.name.singular":"คอมโพเนนต์","menu.section.models.name.plural":"ชนิดของคอลเล็กชัน","menu.section.models.name.singular":"ชนิดคอลเล็กชัน","menu.section.single-types.name.plural":"ชนิดเดียว","menu.section.single-types.name.singular":"ชนิดเดียว","modalForm.attribute.form.base.name":"ชื่อ","modalForm.attribute.form.base.name.description":"ไม่มีพื้นที่ว่างที่อนุญาตให้ใช้สำหรับชื่อของแอ็ตทริบิวต์","modalForm.attribute.form.base.name.placeholder":"เช่น Slug, SEO URL, Canonical URL","modalForm.attribute.target-field":"ฟิลด์ที่แนบ","modalForm.attribute.text.type-selection":"ชนิด","modalForm.attributes.select-component":"เลือกคอมโพเนนต์","modalForm.attributes.select-components":"เลือกคอมโพเนนต์","modalForm.component.header-create":"สร้างคอมโพเนนต์","modalForm.components.create-component.category.label":"เลือกหมวดหมู่หรือป้อนชื่อเพื่อสร้างหมวดหมู่ใหม่หรือป้อนชื่อ","modalForm.components.icon.label":"ไอคอน","modalForm.editCategory.base.name.description":"ไม่อนุญาตให้มีช่องว่างสำหรับชื่อของหมวดหมู่","modalForm.header-edit":"แก้ไข {name}","modalForm.header.categories":"ประเภท","modalForm.singleType.header-create":"สร้างชนิดเดี่ยว","modalForm.sub-header.addComponentToDynamicZone":"เพิ่มคอมโพเนนต์ใหม่ให้กับไดนามิกโซน","modalForm.sub-header.attribute.create":"เพิ่มฟิลด์ {type} ใหม่","modalForm.sub-header.attribute.create.step":"เพิ่มคอมโพเนนต์ใหม่ ({step}/2)","modalForm.sub-header.attribute.edit":"แก้ไข {name}","modalForm.sub-header.chooseAttribute.collectionType":"เลือกฟิลด์สำหรับชนิดคอลเล็กชันของคุณ","modalForm.sub-header.chooseAttribute.component":"เลือกฟิลด์สำหรับคอมโพเนนต์ของคุณ","modalForm.sub-header.chooseAttribute.singleType":"เลือกฟิลด์สำหรับชนิดเดี่ยวของคุณ","modelPage.attribute.relation-polymorphic":"ความสัมพันธ์ (polymorphic)","modelPage.attribute.relationWith":"ความสัมพันธ์กับ","none":"ไม่มี","notification.info.autoreaload-disable":"คุณลักษณะ autoReload จำเป็นต้องมีเพื่อใช้ปลั๊กอินนี้ เริ่มทำงานเซิร์ฟเวอร์ของคุณด้วย `strapi develop`","notification.info.creating.notSaved":"โปรดบันทึกงานของคุณก่อนการสร้างชนิดคอลเล็กชันหรือคอมโพเนนต์ใหม่","plugin.description.long":"โมเดลโครงสร้างข้อมูลของ API ของคุณ สร้างฟิลด์ใหม่และความสัมพันธ์ในเวลาเพียงหนึ่งนาที ไฟล์จะถูกสร้างและอัพเดตโดยอัตโนมัติในโปรเจ็กต์ของคุณ","plugin.description.short":"โมเดลโครงสร้างข้อมูลของ API ของคุณ","popUpForm.navContainer.advanced":"การตั้งค่าขั้นสูง","popUpForm.navContainer.base":"ค่าติดตั้งพื้นฐาน","popUpWarning.bodyMessage.cancel-modifications":"คุณแน่ใจว่าต้องการยกเลิกการแก้ไขของคุณหรือไม่?","popUpWarning.bodyMessage.cancel-modifications.with-components":"คุณแน่ใจว่าต้องการยกเลิกการแก้ไขของคุณหรือไม่? บางคอมโพเนนต์ถูกสร้างหรือแก้ไข...","popUpWarning.bodyMessage.category.delete":"คุณแน่ใจว่าต้องการลบหมวดหมู่นี้หรือไม่? คอมโพเนนต์ทั้งหมดจะถูกลบออกด้วย","popUpWarning.bodyMessage.component.delete":"คุณแน่ใจว่าต้องการลบคอมโพเนนต์นี้หรือไม่?","popUpWarning.bodyMessage.contentType.delete":"คุณแน่ใจว่าต้องการลบชนิดคอลเล็กชันนี้หรือไม่?","prompt.unsaved":"คุณแน่ใจว่าคุณต้องการออกหรือไม่? การปรับเปลี่ยนทั้งหมดของคุณจะหายไป","relation.attributeName.placeholder":"ตัวอย่าง: author, category, tag","relation.manyToMany":"มีและเป็นของหลาย","relation.manyToOne":"มีจำนวนมาก","relation.manyWay":"มีจำนวนมาก","relation.oneToMany":"เป็นของหลาย","relation.oneToOne":"มีและเป็นของหนึ่ง","relation.oneWay":"มีหนึ่ง","table.attributes.title.plural":"{number} ฟิลด์","table.attributes.title.singular":"ฟิลด์ {number}"}');

/***/ })

}]);