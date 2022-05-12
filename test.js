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
    
    
insert into user(username,password,firstname,lastname,gender,phonenumber,email,roleid) values ('minhkycho1','123456','Nhat',' Minh',true,'02932149129','dangvannhatminh1@gmail.com',2);
insert into user(username,password,firstname,lastname,gender,phonenumber,email,roleid) values ('minhkycho2','123456','Nhat',' Minh',true,'0293535353','dangvannhatminh2@gmail.com',2);
insert into user(username,password,firstname,lastname,gender,phonenumber,email,roleid) values ('minhkycho3','123456','Nhat',' Minh',true,'02323221111','dangvannhatminh3@gmail.com',2);
insert into user(username,password,firstname,lastname,gender,phonenumber,email,roleid) values ('minhkycho4','123456','Nhat',' Minh',true,'0232223516','dangvannhatminh4@gmail.com',2);
insert into user(username,password,firstname,lastname,gender,phonenumber,email,roleid) values ('minhkycho5','123456','Nhat',' Minh',true,'02932149129','dangvannhatminh5@gmail.com',2);
insert into user(username,password,firstname,lastname,gender,phonenumber,email,roleid) values ('minhkycho6','123456','Nhat',' Minh',true,'0293535353','dangvannhatminh6@gmail.com',2);
insert into user(username,password,firstname,lastname,gender,phonenumber,email,roleid) values ('minhkycho7','123456','Nhat',' Minh',true,'02323221111','dangvannhatminh7@gmail.com',2);
insert into user(username,password,firstname,lastname,gender,phonenumber,email,roleid) values ('minhkycho8','123456','Nhat',' Minh',true,'0232223516','dangvannhatminh8@gmail.com',2);
insert into user(username,password,firstname,lastname,gender,phonenumber,email,roleid) values ('minhkycho9','123456','Nhat',' Minh',true,'02932149129','dangvannhatminh9@gmail.com',2);
insert into user(username,password,firstname,lastname,gender,phonenumber,email,roleid) values ('minhkycho10','123456','Nhat',' Minh',true,'0293535353','dangvannhatminh10@gmail.com',2);
insert into user(username,password,firstname,lastname,gender,phonenumber,email,roleid) values ('minhkycho11','123456','Nhat',' Minh',true,'02323221111','dangvannhatminh11@gmail.com',2);
insert into user(username,password,firstname,lastname,gender,phonenumber,email,roleid) values ('minhkycho12','123456','Nhat',' Minh',true,'0232223516','dangvannhatminh12@gmail.com',2);
insert into user(username,password,firstname,lastname,gender,phonenumber,email,roleid) values ('minhkycho13','123456','Nhat',' Minh',true,'02932149129','dangvannhatminh13@gmail.com',2);
insert into user(username,password,firstname,lastname,gender,phonenumber,email,roleid) values ('minhkycho14','123456','Nhat',' Minh',true,'0293535353','dangvannhatminh14@gmail.com',2);
insert into user(username,password,firstname,lastname,gender,phonenumber,email,roleid) values ('minhkycho15','123456','Nhat',' Minh',true,'02323221111','dangvannhatminh15@gmail.com',2);
insert into user(username,password,firstname,lastname,gender,phonenumber,email,roleid) values ('minhkycho16','123456','Nhat',' Minh',true,'0232223516','dangvannhatminh16@gmail.com',2);
insert into hotel(user_id,province_id,hotel_name,room_quantity,hotel_desc,hotel_address,hotel_phone,hotel_email) values(1,15,'Hyatt Regency Danang Resort and Spa',20,'Hyatt Regency Danang Resort & Spa là khu nghỉ dưỡng được du khách đánh giá cao tại Đà Nẵng. Với các dịch vụ đa dạng, phục vụ đầy đủ nhu cầu thiết yếu của du khách tới thăm, có lẽ không điểm lưu trú nào lý tưởng bằng Hyatt Regency Danang Resort & Spa. Bên cạnh đó, trang thiết bị nội thất và khuôn viên của khách sạn cũng có sức chứa lớn, du khách không cần phải lo lắng tình trạng đông đúc, quá tải mùa du lịch.','5, Trường Sa, Quận Ngũ Hành Sơn, Đà Nẵng','0236 3981 234','hyatt@gmail.com');
insert into hotel(user_id,province_id,hotel_name,room_quantity,hotel_desc,hotel_address,hotel_phone,hotel_email) values(2,15,'Da Nang - Mikazuki Japanese Resorts & Spa',15,'Mang nét văn hóa tinh túy đậm đà Á Đông, Nhật Bản là nơi vẻ đẹp thiên nhiên, văn hóa và ẩm thực luôn được ca tụng. Với tinh thần lan tỏa tinh hoa văn hóa Nhật Bản trên đất Việt, Danang Mikazuki được lấy cảm hứng là nơi đất trời hội tụ và nhịp sống bắt đầu. Đến với chúng tôi để sẵn sàng cho một hành trình khám phá đầy thú vị với những giá trị chuẩn Nhật chưa từng có.

Được tạo hóa ưu đãi với bờ biển trong xanh quyến rũ, Vịnh Đà Nẵng là nơi tọa lạc của Da Nang Mikazuki Japanese Resorts & Spa. Trên diện tích 13 hecta, khu nghỉ dưỡng mang đến cho bạn nhiều loại hình dịch vụ hấp dẫn, mang đậm bản sắc văn hóa Nhật Bản.','Đường Nguyễn Tất Thành, Quận Liên Chiểu, Đà Nẵng','0236 3774 555','info@danangmikazuki.com');
insert into hotel(user_id,province_id,hotel_name,room_quantity,hotel_desc,hotel_address,hotel_phone,hotel_email) values(3,15,'Danang Golden Bay',10,'Danang Golden Bay – khách sạn 5 sao với những dịch vụ nghỉ dưỡng sang trọng và đẳng cấp. Sở hữu địa thế tuyệt vời nơi của dòng sông Hàn đổ ra biển Đông xanh ngắt, khách sạn Danang Golden Bay là điểm giao thoa hòa hợp giữa núi, trời và biển, là địa điểm lý tưởng khởi đầu cho hành trình khám phá thành phố Đà Nẵng năng động, vẻ đẹp quyến rũ của biển Đà Nẵng, Bán đảo Sơn Trà xanh tươi và khám phá hành trình di sản miền Trung từ Cố đô Huế cổ kính, Hội An thơ mộng hay thánh địa Mỹ Sơn huyền bí.','01, Lê Văn Duyệt, Quận Sơn Trà, Đà Nẵng','0236 3 878 999','info@dananggoldenbay.com');
insert into hotel(user_id,province_id,hotel_name,room_quantity,hotel_desc,hotel_address,hotel_phone,hotel_email) values(4,15,'Pullman Danang Beach Resort',30,'Pullman Danang Beach Resort là khách sạn thuộc tập đoàn ACCOR GROUP – tập đoàn khách sạn hàng đầu thế giới  mang tới du khách những trải nghiệm độc đáo và ý nghĩa với hơn 5.100 khách sạn và 10.000 nhà hàng trên 110 đất nước. Tập đoàn có một trong những hệ sinh thái đa dạng và tích hợp đầy đủ nhất ngành khách sạn với chuỗi các thương hiệu sang trọng và cao cấp, các dịch vụ tầm trung và phổ thông, những khái niệm phong cách sống độc đáo, các địa điểm giải trí, nhà hàng và quán bar, các khu bất động sản cho thương hiệu, không gian làm việc chia sẻ.','101, Võ Nguyên Giáp, Quận Ngũ Hành Sơn, Đà Nẵng','0236 395 8888','h8838@accor.com');
insert into hotel(user_id,province_id,hotel_name,room_quantity,hotel_desc,hotel_address,hotel_phone,hotel_email) values(5,15,'Altara Suites By RiYaz',20,'Với tiện nghi vượt bậc, Altara Suites là lựa chọn lý tưởng để tái tạo năng lượng và thư giãn. Khách sạn sở hữu những căn hộ được thiết kế theo phong cách hậu hiện đại, dưới bàn tay sáng tạo của kiến trúc sư nổi tiếng thế giới Salvador Perez Arroyo. Mỗi căn hộ kết nối khéo léo giữa không gian trong và ngoài khách sạn, du khách cỏ thể thưởng ngoạn khung cảnh tuyệt mỹ của thành phố Đà Nẵng với biển, núi, trời xung quanh.','120 Võ Nguyên Giáp, Phường Phước Mỹ, Quận Sơn Trà, Thành phố Đà Nẵng','0236 2687979','info@altarasuites.com');
insert into hotel(user_id,province_id,hotel_name,room_quantity,hotel_desc,hotel_address,hotel_phone,hotel_email) values(6,15,'Four Points by Sheraton Đà Nẵng',50,'Four Points by Sheraton Danang tọa lạc tại khu Bãi biển Mỹ Khê thuộc thành phố Đà Nẵng, nằm trong bán kính 2 km từ Cầu Sông Hàn và 2,3 km từ Cầu tàu Tình yêu. Khách sạn nằm cách Trung tâm thương mại Indochina Riverside 2,3 km.','120 Võ Nguyên Giáp, Street, Sơn Trà, Đà Nẵng','0236 3997 979','fourseason@gmail.com');
insert into hotel(user_id,province_id,hotel_name,room_quantity,hotel_desc,hotel_address,hotel_phone,hotel_email) values(7,15,'Melia Danang Beach Resort',60,'Nằm bên bãi biển Non Nước thơ mộng, nhìn ra bán đảo Sơn Trà và cù lao Chàm, Resort Bãi biển Meliá Đà Nẵng chính là một khu resort bãi biển nhiệt đới xinh đẹp điển hình.
Tại Melia Danang Resort, du khách có thể thưởng thức ẩm thực Việt Nam tại nhà hàng Nam Viet trong khi ẩm thực Á-Âu được phục vụ tại nhà hàng Market Place. Hải sản tươi ngon và cocktail có tại Cape Nao Beach Club và Brezza Beach Club với góc nhìn lãng mạn ra biển.','19, Trường Sa, Quận Ngũ Hành Sơn, Đà Nẵng','0236 3929 888','reservations@meliadanang.com');
insert into hotel(user_id,province_id,hotel_name,room_quantity,hotel_desc,hotel_address,hotel_phone,hotel_email) values(8,15,'Vinpearl Condotel Riverfront Da Nang',70,'Vinpearl Condotel Riverfront Đà Nẵng là tòa khách sạn căn hộ có kiến trúc hiện đại với tầm nhìn panorama 360 độ độc đáo hướng trực diện sông Hàn, cầu Rồng và biển Mỹ Khê, ôm trọn vào lòng khung cảnh thành phố hoa lệ và sống động cùng nhiều tiện ích thời thượng bậc nhất như nhà hàng trên tầng cao sang trọng, hồ bơi vô cực, Vincharm Spa, phòng thể hình... Khách sạn được World Travel Awards – giải Oscar của ngành Du lịch vinh danh là "Khách sạn hướng sông hàng đầu Việt Nam" năm 2019.','341, Trần Hưng Đạo, Quận Sơn Trà, Đà Nẵng','1900 636699','callcenter@vinpearl.com');
insert into hotel(user_id,province_id,hotel_name,room_quantity,hotel_desc,hotel_address,hotel_phone,hotel_email) values(9,46,'Citadines Pearl Hội An',20,'Hội An được người dân khắp cả nước Việt Nam nói riêng và thế giới nói chung biết đến bởi vẻ đẹp truyền thống, bởi những nét đẹp thống nhất, cổ kính trong lối kiến trúc độc đáo thể hiện qua những ngôi nhà màu vàng hai tầng. Và để làm tô điểm thêm những nét độc đáo cho một vùng đất đặc biệt, “viên ngọc xanh” Citadines Pearl Hoi An đã hiện diện ở đây để được cùng trải qua với những vị khách đáng mến ngắm nhìn từng ngõ ngách nơi này. Khoảnh khắc này, hãy để Tico Travel cùng quý khách đi tham quan khu nghỉ dưỡng này để xem nơi này có thực sự đáng giá. ','Khối Phố An Bàng, Cẩm An, Thành Phố Hội An, Quảng Nam','0235 2208 888','citapearls@gmail.com');
insert into hotel(user_id,province_id,hotel_name,room_quantity,hotel_desc,hotel_address,hotel_phone,hotel_email) values(10,46,'Allegro Hội An . A Little Luxury Hotel & Spa',15,'Allegro Hoi An - Little Luxury Hotel & Spa tọa lạc tại thành phố Hội An thuộc tỉnh Quảng Nam, cách Chùa cầu Nhật Bản và Hội Quán Quảng Đông 400 m. Khách sạn có hồ bơi ngoài trời mở cửa quanh năm, đồng thời cung cấp miễn phí xe đạp cho khách sử dụng và dịch vụ đưa đón tới Phố Cổ Hội An và Bãi Biển An Bàng đối với khách lưu trú.','86, Trần Hưng Đạo, Thành Phố Hội An, Quảng Nam','0235 3529 999','allegro@gmail.com');
insert into hotel(user_id,province_id,hotel_name,room_quantity,hotel_desc,hotel_address,hotel_phone,hotel_email) values(11,46,'Le Pavillon Hội An Paradise Hotel & Spa',10,'Chào mừng bạn đến với Le Pavillon Hội An Paradise, khách sạn 4 sao nằm trên trục đường chính nối liền làng rau Trà Quế và Đô thị cổ Hội An. Le Pavilion Hội An Paradise là sự pha lẫn của lối kiến trúc đương đại và nét cổ điển của phương Tây, kết hợp với cách bày trí bằng đèn lồng mang đậm chất phố hội cổ kính nhưng đầy sự tinh tế. Với quy mô 50 phòng , nổi bật với hồ bơi trên tầng thượng sẽ mang đến cho bạn một trải nghiệm tuyệt vời khi vừa có thể đẵm mình trong làn nước mát vừa có thể ngắm hoàng hôn buông xuống nơi cuối chân trời. Tận hưởng sự hài hòa cảm giác giữa không gian hòa quyện với một thiên đường thanh bình.','508 Đ. Hai Bà Trưng, Cẩm Sơn, Hội An','0235 6276 666','resa-paradise@lepavillonhoiangroup.com');
insert into hotel(user_id,province_id,hotel_name,room_quantity,hotel_desc,hotel_address,hotel_phone,hotel_email) values(12,46,'Le Belhamy Hoi An Resort and Spa',30,'Chỗ nghỉ này cách bãi biển 1 phút đi bộ. Le Belhamy Resort & Spa nằm trên bãi biển riêng ở Bờ biển Hà My. Khu nghỉ mát nhiệt đới này có 2 hồ bơi ngoài trời và xe đưa đón miễn phí theo lịch trình đến Hội An.','Biển Hà My, Quảng Nam','0235 3941 888','lebelhamy@gmail.com');
insert into hotel(user_id,province_id,hotel_name,room_quantity,hotel_desc,hotel_address,hotel_phone,hotel_email) values(13,56,'Khách sạn Senna Huế',30,'Tọa lạc tại trung tâm thành phố Huế, chỉ cách Sân bay Phú Bài 14 km, với thiết kế hiện đại cổ điển, khách sạn Senna Huế cung cấp rất nhiều dịch vụ sang trọng. Ở đây, phép lịch sự và lòng tốt là nền tảng của lòng hiếu khách tuyệt vời, tạo ra một trải nghiệm độc đáo. Hãy tận hưởng kỳ nghỉ thoải mái tại những căn phòng sang trọng của chúng tôi.','7, Nguyễn Tri Phương, Thành Phố Huế, Thừa Thiên Huế','0234 3858 686','reservation@sennahue.com');
insert into hotel(user_id,province_id,hotel_name,room_quantity,hotel_desc,hotel_address,hotel_phone,hotel_email) values(14,56,'Khách Sạn Imperial Huế',50,'Nằm cách Cầu Trường Tiền chỉ 2 phút đi bộ, Imperial Hotel Hue có tầm nhìn ra Sông Hương thơ mộng và cung cấp chỗ nghỉ ấm cúng với máy điều hòa. Khách sạn có WiFi tốc độ cao miễn phí, hồ bơi ngoài trời, 3 địa điểm ăn uống, quán bar nhìn bao quát ra thành phố và chỗ đỗ xe miễn phí.','08 Hùng Vương, Phú Hội, Thành phố Huế, Thừa Thiên Huế','0234 3882 222','imperial@gmail.com');
insert into hotel(user_id,province_id,hotel_name,room_quantity,hotel_desc,hotel_address,hotel_phone,hotel_email) values(15,56,'Ancient Huế Garden Houses',60,'Ancient Hue Garden Houses is an elegant collection of five Imperial Garden Houses located in Kim Long village, adjacent to Hue’s Imperial Citadel. As an ideal gateway to the city’s magic, Ancient Hue Garden Houses offer a journey into Hue’s authentic mandarin residential area and lifestyle where tradition, poetry and spirit have been preserved over time.','47 Kiệt 104 Kim Long, Kim Long, Thành phố Huế, Thừa Thiên Huế','0234 3590 902','acienthotel@gmail.com');
insert into hotel(user_id,province_id,hotel_name,room_quantity,hotel_desc,hotel_address,hotel_phone,hotel_email) values(16,56,'Khách Sạn Emm Huế',70,'Tọa lạc tại khu trung tâm thành phố Huế, cách Sông Hương và Cầu Tràng Tiền 5 phút lái xe, khách sạn này cung cấp các phòng nghỉ lắp máy điều hòa, khu vườn, nhà hàng trong khuôn viên. Wi-Fi lẫn chỗ đỗ xe riêng đều được cung cấp miễn phí ngay trong khuôn viên.','15, Lý Thường Kiệt, Thành Phố Huế, Thừa Thiên Huế','0234 3828 255','emmhotel@gmail.com');

insert into hotelroom(hotel_id,type_id,name,bed_quantity,price,description,image) values (1,1,'Phòng King',2,4500000,'Đầy đủ tiện nghi','https://tripi.vn/cdn-cgi/image/width=640,height=640/https://www.googleapis.com/download/storage/v1/b/hotelcdn/o/422%2FE5M56T4Q2D_194940667.jpg?generation=1586250485244075&alt=media');
insert into hotelroom(hotel_id,type_id,name,bed_quantity,price,description,image) values (1,2,'Phòng Ocean',1,2000000,'Giường siêu rộng, đầy đủ tiện nghi','https://tripi.vn/cdn-cgi/image/width=640,height=640/https://storage.googleapis.com/hms_prod/photo/img/457567OwL/hyatt-regency-danang-resort-and-spa-p383-standard-garden-king-guestroom.16x9.jpg');
insert into hotelroom(hotel_id,type_id,name,bed_quantity,price,description,image) values (2,1,'Phòng Kiểu Biệt Thự Hinode Giường Đôi',2,3000000,'View biển, đầy đủ tiện nghi','https://tripi.vn/cdn-cgi/image/width=1280,height=1280/https://storage.googleapis.com/hms_prod/photo/img/2693vG/premium-family--quad-23.jpg');
insert into hotelroom(hotel_id,type_id,name,bed_quantity,price,description,image) values (2,2,'Phòng Đôi Grand Deluxe Nhìn ra Đại dương',1,2500000,'Giường đôi cực to, view biển thơ mộng cho những phút giây thăng hoa','https://tripi.vn/cdn-cgi/image/width=1280,height=1280/https://storage.googleapis.com/hms_prod/photo/img/2693Hk/deluxe---king-13.jpg');
insert into hotelroom(hotel_id,type_id,name,bed_quantity,price,description,image) values (3,1,'Deluxe Twin / King',2,3500000,'Giường lớn, đầy đủ tiện nghi, view biển','https://tripi.vn/cdn-cgi/image/width=640,height=640/https://www.googleapis.com/download/storage/v1/b/tourcdn/o/photos%2FVR3T0X5EXI_%2Ftmp%2Fplaytemp7458377284404767097%2FmultipartBody2839818511034061530asTemporaryFile?generation=1612434485197963&alt=media');
insert into hotelroom(hotel_id,type_id,name,bed_quantity,price,description,image) values (3,2,'Superior Twin/King',1,250000,'Đầy đủ tiện nghi','https://tripi.vn/cdn-cgi/image/width=640,height=640/https://i.travelapi.com/hotels/22000000/21050000/21049200/21049144/c6001b6f_z.jpg');
insert into hotelroom(hotel_id,type_id,name,bed_quantity,price,description,image) values (4,1,'Phòng Deluxe',1,2500000,'Giường cỡ Queen, có ban công','https://tripi.vn/cdn-cgi/image/width=640,height=640/https://i.travelapi.com/hotels/4000000/3530000/3520400/3520339/a51c2b22_z.jpg');
insert into hotelroom(hotel_id,type_id,name,bed_quantity,price,description,image) values (4,2,'Phòng Superior',2,2300000,'Đầy đủ tiện nghi, có ban công','https://tripi.vn/cdn-cgi/image/width=640,height=640/https://i.travelapi.com/hotels/4000000/3530000/3520400/3520339/aac2310e_z.jpg');
insert into hotelroom(hotel_id,type_id,name,bed_quantity,price,description,image) values (5,1,'Bliss Suite',1,1500000,'Đầy đủ tiện nghi cho một đêm thăng hoa','https://tripi.vn/cdn-cgi/image/width=404,height=304/https://www.googleapis.com/download/storage/v1/b/tourcdn/o/photos%2FLTSTO6JFR0_%2Ftmp%2Fplaytemp7100282659441822843%2FmultipartBody5067596094711806344asTemporaryFile?generation=1616261094979159&alt=media');
insert into hotelroom(hotel_id,type_id,name,bed_quantity,price,description,image) values (5,2,'Peace Suite',1,1000000,'View thành phố Đà Nẵng, đầy đủ tiện nghi','https://tripi.vn/cdn-cgi/image/width=640,height=640/https://www.googleapis.com/download/storage/v1/b/tourcdn/o/photos%2FWMGI76ECX8_%2Ftmp%2Fplaytemp7100282659441822843%2FmultipartBody6347475316916656645asTemporaryFile?generation=1616261546446577&alt=media');
insert into hotelroom(hotel_id,type_id,name,bed_quantity,price,description,image) values (6,1,'One Bedroom Ocean View Villa',2,10000000,'Thích hợp cho gia đình 3 người, view bờ biển yên bình','https://tripi.vn/cdn-cgi/image/width=640,height=640/https://storage.googleapis.com/hms_prod/photo/img/1620283441497vz/nmh_142.jpg');
insert into hotelroom(hotel_id,type_id,name,bed_quantity,price,description,image) values (6,2,'One Bedroom Villa',1,8000000,'Đầy đủ tiện nghi','https://tripi.vn/cdn-cgi/image/width=640,height=640/https://storage.googleapis.com/hms_prod/photo/img/1620283407275zu/nmh_092.jpg');
insert into hotelroom(hotel_id,type_id,name,bed_quantity,price,description,image) values (7,1,'Deluxe',2,2000000,'View ra biển, đầy đủ tiện nghi','https://tripi.vn/cdn-cgi/image/width=640,height=640/https://www.googleapis.com/download/storage/v1/b/hotelcdn/o/7324%2FRGBHRKHVJN_triple%20room%20(1).jpg?generation=1593662350440424&alt=media');
insert into hotelroom(hotel_id,type_id,name,bed_quantity,price,description,image) values (7,2,'Melia Guest Room',2,1400000,'Đầy đủ tiện nghi','https://tripi.vn/cdn-cgi/image/width=640,height=640/https://www.googleapis.com/download/storage/v1/b/hotelcdn/o/7324%2FGQ4597PYFS_Guest%20room%201.jpg?generation=1591082247775893&alt=media');
insert into hotelroom(hotel_id,type_id,name,bed_quantity,price,description,image) values (8,1,'Executive Suite hướng sông Hàn',2,2500000,'Đầy đủ tiện nghi, view hướng sông Hàn','https://tripi.vn/cdn-cgi/image/width=640,height=640/https://hotel-images.tripi.vn/static/customer-files/38643830-6332-3635-2d37-3039362d3262/2020/08/15/042408-c0229110-5b19-4ff1-8baa-f0e98d2554c4.jpg');
insert into hotelroom(hotel_id,type_id,name,bed_quantity,price,description,image) values (8,2,'Studio King',1,1400000,'Đầy đủ tiện nghi','https://tripi.vn/cdn-cgi/image/width=640,height=640/https://hotel-images.tripi.vn/static/customer-files/38643830-6332-3635-2d37-3039362d3262/2020/08/15/042449-ca4d04e4-28ae-4ce0-9b03-c2f061744bf8.jpg');
insert into hotelroom(hotel_id,type_id,name,bed_quantity,price,description,image) values (9,1,'Superior King Ocean View',2,1000000,'Ban công thoáng mát, nhìn ra biển, đầy đủ tiện nghi','https://tripi.vn/cdn-cgi/image/width=640,height=640/https://storage.googleapis.com/hms_prod/photo/img/1616752336538CP/superior-ocean-king.jpg');
insert into hotelroom(hotel_id,type_id,name,bed_quantity,price,description,image) values (9,2,'Superior King City View',1,800000,'Đầy đủ tiện nghi, view nhìn ra thành phố','https://tripi.vn/cdn-cgi/image/width=640,height=640/https://storage.googleapis.com/hms_prod/photo/img/1616752254165yq/superior-twin.jpg');
insert into hotelroom(hotel_id,type_id,name,bed_quantity,price,description,image) values (10,1,'Little Suites',2,1600000,'Đầy đủ tiện nghi, có ban công view phố cổ','https://tripi.vn/cdn-cgi/image/width=640,height=640/https://imagekit.tripi.vn/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20006200-2d65c86a9e88ea15209cd0fc20992efe.jpeg');
insert into hotelroom(hotel_id,type_id,name,bed_quantity,price,description,image) values (10,2,'Junior Suites',1,1200000,'Đầy đủ tiện nghi','https://tripi.vn/cdn-cgi/image/width=640,height=640/https://staticproxy.mytourcdn.com/1000x600,q90/resources/pictures/hotels/12/GR8Tt4w9SB6YYsXlRHlYXg-176.jpeg');
insert into hotelroom(hotel_id,type_id,name,bed_quantity,price,description,image) values (11,1,'Deluxe Double Balcony',1,1000000,'Đầy đủ tiện nghi, view thành phố','https://tripi.vn/cdn-cgi/image/width=640,height=640/https://imagekit.tripi.vn/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20031034-d2268075f9aa1763ff332fa515f85888.jpeg');
insert into hotelroom(hotel_id,type_id,name,bed_quantity,price,description,image) values (11,2,'Superior Twin',2,760000,'Đầy đủ tiện nghi','https://tripi.vn/cdn-cgi/image/width=640,height=640/https://imagekit.tripi.vn/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20031034-00bd3352ef503709ca3ba4a64586d052.jpeg');
insert into hotelroom(hotel_id,type_id,name,bed_quantity,price,description,image) values (12,1,'Beachfront Pool Villa',1,3000000,'Villa nguyên căn, có hồ bơi, view biển trước cổng','https://tripi.vn/cdn-cgi/image/width=640,height=640/https://storage.googleapis.com/hms_prod/photo/img/1621309392515wg/184493486.jpg');
insert into hotelroom(hotel_id,type_id,name,bed_quantity,price,description,image) values (12,2,'Faifo Villa',1,1500000,'Villa nguyên căn, đầy đủ tiện nghi','https://tripi.vn/cdn-cgi/image/width=640,height=640/https://staticproxy.mytourcdn.com/1000x600,q90/resources/pictures/hotels/1/7rs1503731652_le_belhamy_resort_and_spa.jpg');
insert into hotelroom(hotel_id,type_id,name,bed_quantity,price,description,image) values (13,1,'Executive Suite',2,2500000,'Đầy đủ tiện nghi,phòng khách','https://tripi.vn/cdn-cgi/image/width=640,height=640/https://www.googleapis.com/download/storage/v1/b/tourcdn/o/photos%2F10VLBUWHVD_%2Ftmp%2Fplaytemp8065542705427177172%2FmultipartBody7566393660735164243asTemporaryFile?generation=1615904553234251&alt=media');
insert into hotelroom(hotel_id,type_id,name,bed_quantity,price,description,image) values (13,2,'Superior',1,1200000,'Đầy đủ tiện nghi','https://tripi.vn/cdn-cgi/image/width=640,height=640/https://imagekit.tripi.vn/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20029496-09757076188bc1945edeb6c17f4c955f.jpeg');
insert into hotelroom(hotel_id,type_id,name,bed_quantity,price,description,image) values (14,1,'Junior Suite River View Queen',1,2500000,'Cực kỳ tiện nghi, view hướng hồ','https://tripi.vn/cdn-cgi/image/width=640,height=640/https://storage.googleapis.com/hms_prod/photo/img/458907uGq/hgo_7264.jpg');
insert into hotelroom(hotel_id,type_id,name,bed_quantity,price,description,image) values (14,2,'Deluxe City View Twin',1,1500000,'Đầy đủ tiện nghi, view hướng thành phố','https://tripi.vn/cdn-cgi/image/width=640,height=640/https://storage.googleapis.com/hms_prod/photo/img/458907SmG/hgo_7339.jpg');
insert into hotelroom(hotel_id,type_id,name,bed_quantity,price,description,image) values (15,1,'Bạch Mã',1,3000000,'Nguyên căn, đầy đủ tiện nghi, hướng hồ bơi','https://tripi.vn/cdn-cgi/image/width=640,height=640/https://storage.googleapis.com/hms_prod/photo/img/1621135187239HY/dsc09398.jpg');
insert into hotelroom(hotel_id,type_id,name,bed_quantity,price,description,image) values (15,2,'Vọng Cảnh',2,2200000,'Đầy đủ tiện nghi, hướng hồ bơi','https://tripi.vn/cdn-cgi/image/width=640,height=640/https://storage.googleapis.com/hms_prod/photo/img/1621135144966bv/dsc09550.jpg');
insert into hotelroom(hotel_id,type_id,name,bed_quantity,price,description,image) values (16,1,'Phòng Deluxe',2,1000000,'Đầy đủ tiện nghi, quang cảnh thành phố','https://tripi.vn/cdn-cgi/image/width=640,height=640/https://i.travelapi.com/hotels/2000000/1600000/1594300/1594209/e309e816_z.jpg');
insert into hotelroom(hotel_id,type_id,name,bed_quantity,price,description,image) values (16,2,'Phòng Superior',1,100000,'Đầy đủ tiện nghi, không cửa sổ','https://tripi.vn/cdn-cgi/image/width=640,height=640/https://staticproxy.mytourcdn.com/1000x600,q90/resources/pictures/hotels/0/lm01542712935_khach_san_emm_hue.jpg');

insert into booking(room_id,user_id,hotel_id,checkin_date,checkout_date) values (1,1,1,'2022-05-05','2022-05-10');
insert into booking(room_id,user_id,hotel_id,checkin_date,checkout_date) values (2,2,2,'2022-05-21','2022-05-23');
insert into booking(room_id,user_id,hotel_id,checkin_date,checkout_date) values (3,3,3,'2022-05-25','2022-05-28');
insert into booking(room_id,user_id,hotel_id,checkin_date,checkout_date) values (4,4,4,'2022-05-10','2022-05-15');
insert into booking(room_id,user_id,hotel_id,checkin_date,checkout_date) values (5,5,5,'2022-05-21','2022-05-23');
insert into booking(room_id,user_id,hotel_id,checkin_date,checkout_date) values (6,6,6,'2022-05-25','2022-05-28');
insert into booking(room_id,user_id,hotel_id,checkin_date,checkout_date) values (7,7,7,'2022-05-10','2022-05-15');
insert into booking(room_id,user_id,hotel_id,checkin_date,checkout_date) values (8,8,8,'2022-05-21','2022-05-23');
insert into booking(room_id,user_id,hotel_id,checkin_date,checkout_date) values (9,9,9,'2022-05-25','2022-05-28');
insert into booking(room_id,user_id,hotel_id,checkin_date,checkout_date) values (10,10,10,'2022-05-10','2022-05-15');
insert into booking(room_id,user_id,hotel_id,checkin_date,checkout_date) values (11,11,11,'2022-05-21','2022-05-23');
insert into booking(room_id,user_id,hotel_id,checkin_date,checkout_date) values (12,12,12,'2022-05-25','2022-05-28');
insert into booking(room_id,user_id,hotel_id,checkin_date,checkout_date) values (13,13,13,'2022-05-10','2022-05-15');
insert into booking(room_id,user_id,hotel_id,checkin_date,checkout_date) values (14,14,14,'2022-05-21','2022-05-23');
insert into booking(room_id,user_id,hotel_id,checkin_date,checkout_date) values (15,15,15,'2022-05-25','2022-05-28');
insert into booking(room_id,user_id,hotel_id,checkin_date,checkout_date) values (16,16,16,'2022-05-10','2022-05-15');