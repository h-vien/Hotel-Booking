use hotelbookingdb;
insert into role(name) values ('User');
insert into role(name) values ('HotelManager');


insert into typeroom(name) values('Vip');
insert into typeroom(name) values('Thường');

INSERT INTO province VALUES
	(1,'An Giang'),
    (2,'Bà rịa – Vũng tàu'),
    (3,'Bắc Giang'),
    (4,'Bắc Kạn'),
    (5,'Bạc Liêu'),
    (6,'Bắc Ninh'),
    (7,'Bến Tre'),
    (8,'Bình Định'),
    (9,'Bình Dương'),
    (10,'Bình Phước'),
    (11,'Bình Thuận'),
    (12,'Cà Mau'),
    (13,'Cần Thơ'),
    (14,'Cao Bằng '),
    (15,'Đà Nẵng'),
    (16,'Đắk Lắk'),
    (17,'Đắk Nông'),
    (18,'Điện Biên'),
    (19,'Đồng Nai'),
    (20,'Đồng Tháp'),
    (21,'Gia Lai'),
    (22,'Hà Giang'),
    (23,'Hà Nam'),
    (24,'Hà Nội '),
    (25,'Hà Tĩnh'),
    (26,'Hải Dương'),
    (27,'Hải Phòng'),
    (28,'Hậu Giang'),
    (29,'Hòa Bình'),
    (30,'Hưng Yên'),
    (31,'Khánh Hòa'),
    (32,'Kiên Giang'),
    (33,'Kon Tum'),
    (34,'Lai Châu'),
    (35,'Lâm Đồng'),
    (36,'Lạng Sơn'),
    (37,'Lào Cai'),
    (38,'Long An'),
    (39,'Nam Định'),
    (40,'Nghệ An'),
    (41,'Ninh Bình'),
    (42,'Ninh Thuận'),
    (43,'Phú Thọ'),
    (44,'Phú Yên'),
    (45,'Quảng Bình'),
    (46,'Quảng Nam'),
    (47,'Quảng Ngãi'),
    (48,'Quảng Ninh'),
    (49,'Quảng Trị'),
    (50,'Sóc Trăng'),
    (51,'Sơn La'),
    (52,'Tây Ninh'),
    (53,'Thái Bình'),
    (54,'Thái Nguyên'),
    (55,'Thanh Hóa'),
    (56,'Thừa Thiên Huế'),
    (57,'Tiền Giang'),
    (58,'Thành phố Hồ Chí Minh'),
    (59,'Trà Vinh'),
    (60,'Tuyên Quang'),
    (61,'Vĩnh Long'),
    (62,'Vĩnh Phúc');
    
    
insert into user(username,password,firstname,lastname,gender,phonenumber,email,roleid) values ('minhkycho18','123456','Nhat',' Minh',true,'02932149129','dangvannhatminh93@gmail.com',2);
insert into user(username,password,firstname,lastname,gender,phonenumber,email,roleid) values ('minhkycho19','12345','Nhat',' Minh',true,'0293535353','dangvannhatminh03@gmail.com',2);
insert into user(username,password,firstname,lastname,gender,phonenumber,email,roleid) values ('minhkycho20','1234','Nhat',' Minh',true,'02323221111','dangvannhatminh02@gmail.com',1);
insert into user(username,password,firstname,lastname,gender,phonenumber,email,roleid) values ('minhkycho21','123','Nhat',' Minh',true,'0232223516','dangvannhatminh01@gmail.com',1);
    
insert into hotel(user_id,province_id,hotel_name,room_quantity,hotel_desc,hotel_address,hotel_phone,hotel_email) values(1,15,'khach san A',20,'aaaaaaaaaaaaaaaaaaa','145 Nguyen Luong Bang','0935123421','khachsana@gmail.com');
insert into hotel(user_id,province_id,hotel_name,room_quantity,hotel_desc,hotel_address,hotel_phone,hotel_email) values(1,15,'khach san B',15,'bbbbbbbbbbbbbbbbbbb','120 Au Co','0932412412','khachsanb@gmail.com');
insert into hotel(user_id,province_id,hotel_name,room_quantity,hotel_desc,hotel_address,hotel_phone,hotel_email) values(1,15,'khach san C',10,'ccccccccccccccccccc','342 Nguyen Tat Thanh','0935674848','khachsanc@gmail.com');
insert into hotel(user_id,province_id,hotel_name,room_quantity,hotel_desc,hotel_address,hotel_phone,hotel_email) values(1,15,'khach san D',30,'ddddddddddddddddddd','52 Nguyen Tat Thanh','0932521525','khachsand@gmail.com');


insert into hotel(user_id,province_id,hotel_name,room_quantity,hotel_desc,hotel_address,hotel_phone,hotel_email) values(2,58,'khach san A',30,'aaaaaaaaaaaaaaaaaaa','145 Cach Mang Thang 8','0935122312','khachsana1@gmail.com');
insert into hotel(user_id,province_id,hotel_name,room_quantity,hotel_desc,hotel_address,hotel_phone,hotel_email) values(2,58,'khach san B',50,'bbbbbbbbbbbbbbbbbbb','120 Le Thanh Ton','0932415231','khachsanb1@gmail.com');
insert into hotel(user_id,province_id,hotel_name,room_quantity,hotel_desc,hotel_address,hotel_phone,hotel_email) values(2,58,'khach san C',60,'ccccccccccccccccccc','342 Nguyen Hue','0935674235','khachsanc1@gmail.com');
insert into hotel(user_id,province_id,hotel_name,room_quantity,hotel_desc,hotel_address,hotel_phone,hotel_email) values(2,58,'khach san D',70,'ddddddddddddddddddd','52 Nguyen Tat Thanh','093252144','khachsand2@gmail.com');

insert into hotelroom(hotel_id,type_id,name,bed_quantity,price,description,status) values (1,1,'A',2,200000,'aaaaaaaa',1);
insert into hotelroom(hotel_id,type_id,name,bed_quantity,price,description,status) values (1,1,'B',1,200000,'bbbbbbbb',1);
insert into hotelroom(hotel_id,type_id,name,bed_quantity,price,description,status) values (1,2,'C',2,100000,'cccccccc',1);
insert into hotelroom(hotel_id,type_id,name,bed_quantity,price,description,status) values (1,2,'D',1,100000,'dddddddd',1);

insert into hotelroom(hotel_id,type_id,name,bed_quantity,price,description,status) values (2,1,'A',2,200000,'aaaaaaaa',1);
insert into hotelroom(hotel_id,type_id,name,bed_quantity,price,description,status) values (2,1,'B',1,200000,'bbbbbbbb',1);
insert into hotelroom(hotel_id,type_id,name,bed_quantity,price,description,status) values (2,2,'C',2,100000,'cccccccc',1);
insert into hotelroom(hotel_id,type_id,name,bed_quantity,price,description,status) values (2,2,'D',1,100000,'dddddddd',1);

insert into hotelroom(hotel_id,type_id,name,bed_quantity,price,description,status) values (5,1,'A',2,200000,'aaaaaaaa',1);
insert into hotelroom(hotel_id,type_id,name,bed_quantity,price,description,status) values (5,1,'B',1,200000,'bbbbbbbb',1);
insert into hotelroom(hotel_id,type_id,name,bed_quantity,price,description,status) values (5,2,'C',2,100000,'cccccccc',1);
insert into hotelroom(hotel_id,type_id,name,bed_quantity,price,description,status) values (5,2,'D',1,100000,'dddddddd',1);

insert into hotelroom(hotel_id,type_id,name,bed_quantity,price,description,status) values (6,1,'A',2,200000,'aaaaaaaa',1);
insert into hotelroom(hotel_id,type_id,name,bed_quantity,price,description,status) values (6,1,'B',1,200000,'bbbbbbbb',1);
insert into hotelroom(hotel_id,type_id,name,bed_quantity,price,description,status) values (6,2,'C',2,100000,'cccccccc',1);
insert into hotelroom(hotel_id,type_id,name,bed_quantity,price,description,status) values (6,2,'D',1,100000,'dddddddd',1);

insert into booking(room_id,user_id,hotel_id,checkin_date,checkout_date) values (1,3,1,'2022-05-05','2022-05-10');
insert into booking(room_id,user_id,hotel_id,checkin_date,checkout_date) values (2,3,1,'2022-05-21','2022-05-23');
insert into booking(room_id,user_id,hotel_id,checkin_date,checkout_date) values (3,3,1,'2022-05-25','2022-05-28');

insert into booking(room_id,user_id,hotel_id,checkin_date,checkout_date) values (1,3,2,'2022-05-10','2022-05-15');
insert into booking(room_id,user_id,hotel_id,checkin_date,checkout_date) values (2,3,2,'2022-05-21','2022-05-23');
insert into booking(room_id,user_id,hotel_id,checkin_date,checkout_date) values (3,3,2,'2022-05-25','2022-05-28');

