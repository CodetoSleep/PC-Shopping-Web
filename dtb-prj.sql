	CREATE database Laptop;
    
    
    CREATE TABLE Product (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(50),
    new_price DECIMAL(10, 2),
    old_price DECIMAL(10, 2),
    discount_percentage INT,
    weight FLOAT,
    display VARCHAR(50),
    cpu VARCHAR(50),
    cpu_type VARCHAR(50),
    gpu_name VARCHAR(50),
    gpu_onboard TINYINT(1),
    ram INT,
    ssd INT,
    hdd INT,
    operating_system VARCHAR(50),
    color VARCHAR(50),
    battery VARCHAR(50),
    camera VARCHAR(50),
    rating_average FLOAT,
    rating_amount INT,
    available BOOLEAN,
    sold INT,
    manufacturer VARCHAR(10),
    manufacturer_year INT,
    material VARCHAR(50),
    stock_quantity INT
);

CREATE TABLE Image (
    image_id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT NOT NULL,
    image_name VARCHAR(50),
    CONSTRAINT fk_product_image
    FOREIGN KEY (product_id) REFERENCES Product(product_id)
);




INSERT INTO Product (product_name, new_price, old_price, discount_percentage, weight, display,
cpu, cpu_type, gpu_name, gpu_onboard, ram, ssd, hdd, operating_system, color, battery, 
camera, rating_average, rating_amount, available, sold, manufacturer, manufacturer_year, material,stock_quantity) VALUES
('Dell XPS 15', 2000, 1800, 10, 1.8, '15.6 inch 4K', 'i7', 'Intel Core i7', 'RTX 3050', 0, 16, 512, 0, 'Windows 11', 'Silver', '4 cell', '720p', 4.5, 150, 1, 10, 'Dell', 2022, 'Aluminum', 100),
('Asus Zenbook 14', 1500, 1350, 10, 1.2, '14 inch Full HD', 'i5', 'Intel Core i5', 'Intel UHD', 1, 8, 256, 0, 'Windows 10', 'Blue', '3 cell', 'HD', 4.2, 80, 1, 5, 'Asus', 2021, 'Aluminum',150),
('Acer Aspire 5', 800, 720, 10, 2, '15.6 inch Full HD', 'i3', 'Intel Core i3', 'Intel UHD', 1, 4, 128, 1000, 'Windows 10', 'Black', '4 cell', 'HD', 3.9, 120, 1, 20, 'Acer', 2020, 'Plastic',245),
('Lenovo Thinkpad X1', 2500, 2250, 10, 1.1, '14 inch 2K', 'i7', 'Intel Core i7', 'RTX 3060', 0, 32, 1000, 0, 'Windows 10', 'Black', '6 cell', '1080p', 4.7, 200, 1, 15, 'Lenovo', 2022, 'Carbon fiber',658),
('Dell Latitude 5420', 1200, 1080, 10, 1.5, '14 inch Full HD', 'i5', 'Intel Core i5', 'Intel UHD', 1, 8, 256, 0, 'Windows 11', 'Gray', '4 cell', '720p', 4.1, 105, 1, 12, 'Dell', 2021, 'Aluminum',456),
('Asus VivoBook S14', 900, 810, 10, 1.3, '14 inch Full HD', 'i3', 'Intel Core i3', 'Intel UHD', 1, 8, 128, 1000, 'Windows 10', 'Gold', '3 cell', 'HD', 3.8, 71, 1, 8, 'Asus', 2022, 'Aluminum',784),
('Acer Swift 3', 850, 765, 10, 1.2, '14 inch 2K', 'i5', 'Intel Core i5', 'MX450', 0, 16, 512, 0, 'Windows 11', 'Silver', '4 cell', '1080p', 4.3, 89, 1, 6, 'Acer', 2022, 'Aluminum',124),
('Lenovo Legion 5', 1300, 1170, 10, 2.3, '15.6 inch Full HD', 'r7', 'AMD Ryzen 7', 'RTX 3060', 0, 16, 512, 0, 'Windows 10', 'Black', '6 cell', '720p', 4.6, 112, 1, 10, 'Lenovo', 2021, 'Plastic',147),
('Dell XPS 13', 1600, 1440, 10, 1.2, '13.3 inch Full HD+', 'i7', 'Intel Core i7', 'Intel Iris Xe', 1, 16, 1024, 0, 'Windows 10', 'White', '4 cell', '720p', 4.7, 203, 1, 18, 'Dell', 2022, 'Aluminum',256),
('Asus Zenbook Flip', 1300, 1170, 10, 1.1, '13.3 inch Full HD', 'i5', 'Intel Core i5', 'MX250', 0, 8, 512, 0, 'Windows 11', 'Blue', '3 cell', 'HD', 4.0, 67, 1, 7, 'Asus', 2020, 'Aluminum',268), 
('Acer Aspire 3', 600, 540, 10, 1.9, '15.6 inch HD', 'i3', 'Intel Core i3', 'Intel UHD', 1, 4, 256, 0, 'Windows 10', 'Black', '3 cell', 'HD', 3.7, 109, 1, 15, 'Acer', 2021, 'Plastic',124),
('Lenovo ThinkBook', 900, 810, 10, 1.3, '14 inch Full HD', 'r5', 'AMD Ryzen 5', 'AMD Radeon', 1, 8, 256, 1000, 'Windows 10', 'Gray', '3 cell', '720p', 4.1, 82, 1, 9, 'Lenovo', 2022, 'Aluminum',178),
('Dell Precision 5560', 2500, 2250, 10, 1.8, '15.6 inch 4K OLED', 'i7', 'Intel Core i7', 'RTX A2000', 0, 32, 1024, 0, 'Windows 10', 'Silver', '6 cell', '1080p', 4.9, 127, 1, 11, 'Dell', 2021, 'Aluminum',145),
('Asus ROG Zephyrus', 2000, 1800, 10, 1.9, '15.6 inch QHD', 'i7', 'Intel Core i7', 'RTX 3070', 0, 16, 1000, 0, 'Windows 11', 'Black', '4 cell', '720p', 4.8, 152, 1, 13, 'Asus', 2022, 'Aluminum',365),
('Acer Nitro 5', 1200, 1080, 10, 2.5, '15.6 inch Full HD', 'i5', 'Intel Core i5', 'RTX 3050', 0, 16, 512, 0, 'Windows 11', 'Black', '4 cell', '1080p', 4.5, 127, 1, 14, 'Acer', 2022, 'Plastic',963), 
('Lenovo Legion 7', 1800, 1620, 10, 2.5, '16 inch QHD+', 'r7', 'AMD Ryzen 7', 'RTX 3070', 0, 32, 1024, 0, 'Windows 10', 'Gray', '6 cell', '720p', 4.8, 211, 1, 17, 'Lenovo', 2021, 'Aluminum',785),
('Dell Latitude 7420', 1600, 1440, 10, 1.4, '14 inch Full HD+', 'i7', 'Intel Core i7', 'Iris Xe', 1, 16, 512, 0, 'Windows 10', 'Gray', '4 cell', '1080p', 4.6, 159, 1, 18, 'Dell', 2022, 'Aluminum',134),
('Asus Vivobook S15', 1100, 990, 10, 1.8, '15.6 inch Full HD', 'r5', 'AMD Ryzen 5', 'AMD Radeon', 1, 12, 512, 1000, 'Windows 11', 'Silver', '3 cell', '720p ', 4.2, 94, 1, 11, 'Asus', 2021, 'Aluminum',645),
('Acer ConceptD 5', 2200, 1980, 10, 2.1, '15.6 inch 4K UHD', 'i7', 'Intel Core i7', 'RTX A5000', 0, 32, 2048, 0, 'Windows 10', 'White', '4 cell', '1080p', 4.8, 118, 1, 14, 'Acer', 2022, 'Aluminum',784),
('Lenovo ThinkBook 16p', 1800, 1620, 10, 1.8, '16 inch QHD+', 'r7', 'AMD Ryzen 7', 'Radeon Pro', 0, 32, 2048, 0, 'Windows 11', 'Black', '6 cell', '720p', 4.7, 142, 1, 13, 'Lenovo', 2022, 'Aluminum',214),
('Dell Vostro 3510', 800, 720, 10, 1.7, '15.6 inch HD', 'i3', 'Intel Core i3', 'Intel UHD', 1, 8, 256, 0, 'Windows 10', 'Black', '4 cell', 'HD', 3.9, 77, 1, 9, 'Dell', 2021, 'Plastic',652),
('Asus ZenBook Pro 15', 2000, 1800, 10, 1.7, '15.6 inch 4K OLED', 'i7', 'Intel Core i7', 'RTX 3050', 0, 32, 1024, 0, 'Windows 11', 'Blue', '4 cell', '1080p', 4.7, 186, 1, 16, 'Asus', 2022, 'Aluminum',147),
('Acer Aspire 7', 1200, 1080, 10, 2.15, '15.6 inch Full HD', 'r5', 'AMD Ryzen 5', 'GTX 1650', 0, 12, 512, 1000, 'Windows 10', 'Black', '4 cell', '720p', 4.3, 101, 1, 11, 'Acer', 2021, 'Plastic',325), 
('Lenovo Yoga Slim 7', 1300, 1170, 10, 1.35, '14 inch 2K', 'r7', 'AMD Ryzen 7', 'RTX 2050', 0, 16, 1024, 0, 'Windows 11', 'Gray', '5 cell', '1080p', 4.6, 167, 1, 14, 'Lenovo', 2022, 'Aluminum',367),
('Dell Alienware x15 R2', 2800, 2520, 10, 2.27, '15.6 inch Full HD 480Hz', 'i7', 'Intel Core i7', 'RTX 3070 Ti', 0, 16, 1024, 0, 'Windows 10', 'Dark Side of the Moon', '5 cell', '720p', 4.8, 203, 1, 19, 'Dell', 2022, 'Magnesium Alloy',127),
('Asus ROG Flow Z13', 1900, 1710, 10, 1.19, '13 inch Full HD+', 'r9', 'AMD Ryzen 9', 'RTX 3050 Ti', 0, 16, 512, 0, 'Windows 11', 'Black', '3 cell', '1080p', 4.7, 172, 1, 15, 'Asus', 2022, 'Aluminum',178),  
('Acer Enduro Urban N3', 550, 495, 10, 1.98, '14 inch Full HD', 'i5', 'Intel Core i5', 'Intel UHD', 1, 8, 256, 0, 'Windows 10', 'Black', '3 cell', '720p', 4.1, 66, 1, 7, 'Acer', 2021, 'Reinforced Plastic',134),
('Dell G15 5525', 1200, 1080, 10, 2.5, '15.6 inch Full HD', 'r7', 'AMD Ryzen 7', 'RTX 3050', 0, 8, 512, 0, 'Windows 11', 'Dark Shadow Grey', '6 cell', '720p', 4.4, 93, 1, 8, 'Dell', 2022, 'Plastic',741),
('Asus Chromebook CX1', 200, 180, 10, 1.25, '11.6 inch HD', 'Celeron N4020', 'Intel Celeron', 'Integrated Graphics', 1, 4, 32, 0, 'Chrome OS', 'Silver', '2 cell', 'VGA', 3.8, 44, 1, 4, 'Asus', 2022, 'Plastic',346),  
('Acer ConceptD 3', 1500, 1350, 10, 1.7, '16 inch WUXGA', 'i7', 'Intel Core i7', 'RTX A2000', 0, 16, 512, 0, 'Windows 10', 'Black', ' 4 cell', '1080p', 4.5, 67, 1, 7, 'Acer', 2022, 'Plastic',257),
('Dell Vostro 3510', 800, 720, 10, 1.7, '15.6 inch HD', 'i3', 'Intel Core i3', 'Intel UHD', 1, 8, 256, 0, 'Windows 10', 'Black', '4 cell', 'HD', 3.9, 77, 1, 9, 'Dell', 2021, 'Plastic',348),
('Asus ZenBook Pro 15', 2000, 1800, 10, 1.7, '15.6 inch 4K OLED', 'i7', 'Intel Core i7', 'RTX 3050', 0, 32, 1024, 0, 'Windows 11', 'Blue', '4 cell', '1080p', 4.7, 186, 1, 16, 'Asus', 2022, 'Aluminum',317),
('Acer Aspire 7', 1200, 1080, 10, 2.15, '15.6 inch Full HD', 'r5', 'AMD Ryzen 5', 'GTX 1650', 0, 12, 512, 1000, 'Windows 10', 'Black', '5 cell', '720p', 4.3, 101, 1, 11, 'Acer', 2021, 'Plastic',457),
('Lenovo Yoga Slim 7', 1300, 1170, 10, 1.35, '14 inch 2K', 'r7', 'AMD Ryzen 7', 'RTX 2050', 0, 16, 1024, 0, 'Windows 11', 'Gray', '6 cell', '1080p', 4.6, 167, 1, 14, 'Lenovo', 2022, 'Aluminum',792),
('Dell XPS 13 Plus', 2000, 1800, 10, 1.17, '13.4 inch Full HD+', 'i7', 'Intel Core i7', 'Intel Iris Xe', 1, 16, 1024, 0, 'Windows 11 ', 'Graphite', '55Wh', '1080p', 4.7, 137, 1, 14, 'Dell', 2023, 'Aluminum',982),
('Asus Vivobook S 14X OLED', 1300, 1170, 10, 1.3, '14 inch 2.8K OLED', 'r7', 'AMD Ryzen 7', 'RTX 3050', 0, 16, 512, 0, 'Windows 11', 'Solar Silver', '70Wh', '720p', 4.6, 112, 1, 12, 'Asus', 2022, 'Aluminum',637), 
('Acer Swift X', 1200, 1080, 10, 1.39, '14 inch Full HD', 'r7', 'AMD Ryzen 7', ' RTX 3050 Ti', 0, 16, 512, 0, 'Windows 10', 'Mist Green', '59Wh', '1080p', 4.5, 89, 1, 10, 'Acer', 2022, 'Aluminum',179),
('Lenovo Tab M8', 120, 108, 10, 0.31, '8 inch HD', 'Helio G37 SoC', 'MediaTek Helio G37', 'PowerVR GE8320', 1, 3, 32, 0, 'Android 11', 'Gray', '5000mAh', '5MP', 4.4, 785, 1, 76, 'Lenovo', 2021, 'Plastic',347),
('Dell G15 5520', 1300, 1170, 10, 2.44, '15.6 inch Full HD', 'i5', 'Intel Core i5', 'RTX 3050 Ti', 0, 8, 512, 0, 'Windows 11', 'Dark Shadow Grey', '86Wh', '1080p IR', 4.5, 115, 1, 12, 'Dell', 2022, 'Plastic',364),
('Asus TUF Dash F15', 1800, 1620, 10, 2, '15.6 inch QHD', 'i7', 'Intel Core i7', 'RTX 3070 Ti', 0, 16, 1024, 0, 'Windows 10 ', 'Moonlight White', '76Wh', '720p', 4.6, 157, 1, 17, 'Asus', 2022, 'Plastic',364),
('Acer Nitro 5', 1300, 1170, 10, 2.2, '15.6 inch Full HD', 'i7', 'Intel Core i7', 'RTX 3060', 0, 16, 512, 1000, 'Windows 11', 'Shale Black', '57Wh', '1080p', 4.5, 134, 1, 14, 'Acer', 2022, 'Plastic',746),
('Lenovo Yoga 7i', 1200, 1080, 10, 1.41, '14 inch 2.8K OLED', 'i7', 'Intel Core i7', ' Intel Iris Xe', 1, 16, 512, 0, 'Windows 10', 'Shadow Black', ' 71Wh', '720p with IR camera', 4.6, 127, 1, 13, 'Lenovo', 2021, 'Aluminum',965),
('Dell Latitude 5530', 1300, 1170, 10, 1.59, '15.6 inch Full HD+', 'i7', 'Intel Core i7', 'UHD Graphics', 1, 16, 256, 0, 'Windows 11', 'Titan Gray', '4 cell', '1080p + IR camera', 4.7, 203, 1, 21, 'Dell', 2022, 'Aluminum',698),
('Asus VivoBook S 14', 880, 790, 10, 1.4, '14 inch Full HD', 'i3', 'Intel Core i3', 'Intel UHD Graphics', 1, 8, 512, 1000, 'Windows 11', 'Indie Black', '50Wh', 'HD', 4.1, 154, 1, 17, 'Asus', 2022, 'Aluminum',354),
('Acer Swift 3', 900, 810, 10, 1.2, '14 inch Full HD', 'i5', 'Intel Core i5', 'Intel Iris Xe Graphics', 1, 8, 512, 0, 'Windows 10', 'Reef Blue', '56Wh Battery', '1080p', 4.4, 176, 1, 18, 'Acer', 2022, 'Aluminum',378),
('Lenovo Legion 5i', 1500, 1350, 10, 2.3, '15.6 inch Full HD', 'i7', 'Intel Core i7', 'RTX 3060', 0, 16, 512, 0, 'Windows 11', 'Storm Grey', '80Wh', '720p', 4.6, 198, 1, 19, 'Lenovo', 2022, 'Plastic',314),
('Dell XPS 15 9520', 2000, 1800, 10, 1.84, '15.6 inch OLED Ultra HD+ (3.5K)', 'i7', 'Intel Core i7', 'RTX 3050 Ti', 0, 32, 1024, 0, 'Windows 11', 'Silver', '6 cell', '1080p', 4.7, 192, 1, 21, 'Dell', 2022, 'Aluminum, glass fiber, carbon fiber',314),
('Asus ZenBook S 13 OLED ', 1500, 1350, 10, 1.14, '13.3 inch OLED Full HD+', 'i7', 'Intel Core i7', 'Intel Iris Xe Graphics', 1, 16, 1024, 0, 'Windows 10', 'Ponder Blue', '67Wh', '720p', 4.5, 172, 1, 19, 'Asus', 2022, 'Aluminum',765),  
('Acer Swift 5', 1200, 1080, 10, 1.2, '14 inch WQXGA (2.8K) IPS',  'i7', 'Intel Core i7', 'Intel Iris Xe Graphics', 1, 16, 1024, 0, 'Windows 10', 'Starry black', '58Wh', '1080p', 4.4, 203, 1, 22, 'Acer', 2022, 'Magnesium-aluminum alloy',678 ),
('Lenovo Yoga Slim 7i Pro X', 1600, 1440, 10, 1.45, '14 inch WQXGA (2K)', 'i5', 'Intel Core i5', 'GeForce RTX 2050', 0, 16, 512, 0, 'Windows 11', 'Arctic Grey', '61Wh', '1080p + IR camera', 4.6, 173, 1, 20, 'Lenovo', 2023, 'Aluminum',316),
('Dell XPS 13 Plus', 2000, 1800, 10, 1.17, '13.4 inch Full HD+', 'i7', 'Intel Core i7', 'Intel Iris Xe', 1, 16, 1024, 0, 'Windows 11 ', 'Graphite', '55Wh', '1080p', 4.7, 137, 1, 14, 'Dell', 2023, 'Aluminum',236),
('Asus Vivobook S 14X OLED', 1300, 1170, 10, 1.3, '14 inch 2.8K OLED', 'r7', 'AMD Ryzen 7', 'RTX 3050', 0, 16, 512, 0, 'Windows 11', 'Solar Silver', '70Wh', '720p', 4.6, 112, 1, 12, 'Asus', 2022, 'Aluminum',125),
('Acer Swift X', 1200, 1080, 10, 1.39, '14 inch Full HD', 'r7', 'AMD Ryzen 7', ' RTX 3050 Ti', 0, 16, 512, 0, 'Windows 10', 'Mist Green', '59Wh', '1080p', 4.5, 89, 1, 10, 'Acer', 2022, 'Aluminum',542), 
('Lenovo Yoga 6', 800, 720, 10, 1.37, '13.3 inch Full HD+', 'r5', 'AMD Ryzrn 5', 'AMD Radeon Graphics', 1, 8, 256, 0, 'Windows 11', 'Storm Grey', '71Wh', '720P', 4.1, 66, 1, 7, 'Lenovo', 2022, 'Aluminum',574),
('Dell Alienware x14 ', 1900, 1710, 10, 1.84, '14 inch WQXGA (2.8K)', 'i7', 'Intel Core i7', 'RTX 3060', 0, 16, 512, 0, 'Windows 11', 'Dark Side of the Moon', '80.5Wh', '1080p', 4.8, 172, 1, 16, 'Dell', 2023, 'Magnesium',598), 
('Asus Chromebook CX1', 200, 180, 10, 1.25, '11.6 inch HD', 'Celeron N4020', 'Intel Celeron', 'Integrated Graphics', 1, 4, 32, 0, 'Chrome OS', 'Silver', '35Wh', 'VGA', 3.8, 44, 1, 4, 'Asus', 2022, 'Plastic',564),
('Acer Nitro 5 AN515-58', 1900, 1710, 10, 3.00, '15.6 inch QHD 165Hz ', 'i7', 'Intel Core i7', 'RTX 3070 Ti', 0, 32, 1024, 1000, 'Windows 11 ', 'Shale Black', '90Wh', 'Full HD BisonCam with temporal noise reduction', 4.7, 167, 1, 17, 'Acer', 2023, 'Plastic', 645),
('Lenovo Legion Slim 7', 1900, 1710, 10, 1.86, '16 inch WQXGA', 'r9', 'AMD Ryzen 9', 'RTX 3060', 0, 32, 1024, 0, 'Windows 11', 'Gray', '71Wh', '1080p', 4.7, 159, 1, 13, 'Lenovo', 2022, 'Aluminum',745),
('Dell Inspiron 15 3525', 500, 450, 10, 1.87, '15.6 inch HD', 'Ryzen 3 5425U', 'AMD Ryzen 3 5425U', 'Radeon Graphics', 1, 8, 256, 0, 'Windows 11', 'Pebble', '41Wh', 'HD webcam', 4.1, 154, 1, 12, 'Dell', 2022, 'Plastic',479),
('Asus E510MA', 350, 315, 10, 1.8, '15.6 inch HD', 'Celeron N4020', 'Intel Celeron', 'Intel UHD Graphics 600', 1, 4, 128, 500, 'Windows 11', 'Transparent Silver', '37Wh', 'VGA', 3.6, 88, 1, 6, 'Asus', 2022, 'Plastic',987),
('Acer Aspire 3 ', 600, 540, 10, 1.9, '15.6 inch Full HD', 'Pentium Silver N6000 ', 'Intel Pentium', 'Intel UHD Graphics', 1, 8, 256, 1000, 'Windows 11', 'Pure Silver', '48Wh', 'HD', 4, 66, 1, 7, 'Acer', 2022, 'Plastic',345),
('Lenovo IdeaPad 1i', 320, 288, 10, 1.41, '14 inch HD', 'Celeron N4500', 'Intel Celeron', 'Intel UHD Graphics', 1, 4, 128, 0, 'Windows 10', 'Snow White', '35Wh', 'HD', 3.1, 23, 1, 3, 'Lenovo', 2022, 'Plastic',324),
('Dell Vostro 3400', 650, 585, 10, 1.63, '14 inch Full HD', 'i3', 'Intel Core i3', 'Intel UHD Graphics', 1, 8, 256, 500, 'Windows 10', 'Black', '41Wh', 'HD', 4.1, 77, 1, 8, 'Dell', 2021, 'Plastic',134), 
('Asus Chromebook CM3', 220, 198, 10, 1.2, '12 inch HD', 'MT8183', 'MediaTek MT8183', 'PowerVR GE8300', 1, 4, 64, 0, 'Chrome OS', 'Mineral Gray ', '42Wh', '720p HD', 4, 154, 1, 12, 'Asus', 2020, 'Plastic',347),
('Acer Swift 1', 480, 432, 10, 1.2, '14 inch Full HD IPS', 'Pentium Silver N6000', 'Intel Pentium ', 'Intel UHD', 1, 4, 128, 128, 'Windows 10', 'Silver', '37Wh', '720p', 4.1, 112, 1, 11, 'Acer', 2022, 'Plastic-Aluminum',315),
('Lenovo Ideapad 1 ', 299, 269, 10, 1.41, '14 inch HD ', 'Celeron N4500', 'Intel Celeron', 'Intel UHD Graphics', 1, 4, 64, 0, 'Windows 11', 'Platinum Grey', '35Wh', '720p', 3.1, 44, 1, 5, 'Lenovo', 2022, 'Plastic',378);


INSERT INTO Image (product_id, image_name) VALUES
(1, 'laptop011.jpg'),
(1, 'laptop012.jpg'),
(1, 'laptop013.jpg'),
(2, 'laptop021.jpg'),
(2, 'laptop022.jpg'),
(2, 'laptop023.jpg'),
(3, 'laptop031.jpg'),
(3, 'laptop032.jpg'),
(3, 'laptop033.jpg'),
(4, 'laptop041.jpg'),
(4, 'laptop042.jpg'),
(4, 'laptop043.jpg'),
(5, 'laptop051.jpg'),
(5, 'laptop052.jpg'),
(5, 'laptop053.jpg'),
(6, 'laptop061.jpg'),
(6, 'laptop062.jpg'),
(6, 'laptop063.jpg'),
(7, 'laptop071.jpg'),
(7, 'laptop072.jpg'),
(7, 'laptop073.jpg'),
(8, 'laptop081.jpg'),
(8, 'laptop082.jpg'),
(8, 'laptop083.jpg'),
(9, 'laptop091.jpg'),
(9, 'laptop092.jpg'),
(9, 'laptop093.jpg'),
(10, 'laptop101.jpg'),
(10, 'laptop102.jpg'),
(10, 'laptop103.jpg'),
(11, 'laptop111.jpg'),
(11, 'laptop112.jpg'),
(11, 'laptop113.jpg'),
(12, 'laptop121.jpg'),
(12, 'laptop122.jpg'),
(12, 'laptop123.jpg'),
(13, 'laptop131.jpg'),
(13, 'laptop132.jpg'),
(13, 'laptop133.jpg'),
(14, 'laptop141.jpg'),
(14, 'laptop142.jpg'),
(14, 'laptop143.jpg'),
(15, 'laptop151.jpg'),
(15, 'laptop152.jpg'),
(15, 'laptop153.jpg'),
(16, 'laptop161.jpg'),
(16, 'laptop162.jpg'),
(16, 'laptop163.jpg'),
(17, 'laptop171.jpg'),
(17, 'laptop172.jpg'),
(17, 'laptop173.jpg'),
(18, 'laptop181.jpg'),
(18, 'laptop182.jpg'),
(18, 'laptop183.jpg'),
(19, 'laptop191.jpg'),
(19, 'laptop192.jpg'),
(19, 'laptop193.jpg'),
(20, 'laptop201.jpg'),
(20, 'laptop202.jpg'),
(20, 'laptop203.jpg'),
(21, 'laptop211.jpg'),
(21, 'laptop212.jpg'),
(21, 'laptop213.jpg'),
(22, 'laptop221.jpg'),
(22, 'laptop222.jpg'),
(22, 'laptop223.jpg'),
(23, 'laptop231.jpg'),
(23, 'laptop232.jpg'),
(23, 'laptop233.jpg'),
(24, 'laptop241.jpg'),
(24, 'laptop242.jpg'),
(24, 'laptop243.jpg'),
(25, 'laptop251.jpg'),
(25, 'laptop252.jpg'),
(25, 'laptop253.jpg'),
(26, 'laptop261.jpg'),
(26, 'laptop262.jpg'),
(26, 'laptop263.jpg'),
(27, 'laptop271.jpg'),
(27, 'laptop272.jpg'),
(27, 'laptop273.jpg'),
(28, 'laptop281.jpg'),
(28, 'laptop282.jpg'),
(28, 'laptop283.jpg'),
(29, 'laptop291.jpg'),
(29, 'laptop292.jpg'),
(29, 'laptop293.jpg'),
(30, 'laptop301.jpg'),
(30, 'laptop302.jpg'),
(30, 'laptop303.jpg'),
(31, 'laptop311.jpg'),
(31, 'laptop312.jpg'),
(31, 'laptop313.jpg'),
(32, 'laptop321.jpg'),
(32, 'laptop322.jpg'),
(32, 'laptop323.jpg'),
(33, 'laptop331.jpg'),
(33, 'laptop332.jpg'),
(33, 'laptop333.jpg'),
(34, 'laptop341.jpg'),
(34, 'laptop342.jpg'),
(34, 'laptop343.jpg'),
(35, 'laptop351.jpg'),
(35, 'laptop352.jpg'),
(35, 'laptop353.jpg'),
(36, 'laptop361.jpg'),
(36, 'laptop362.jpg'),
(36, 'laptop363.jpg'),
(37, 'laptop371.jpg'),
(37, 'laptop372.jpg'),
(37, 'laptop373.jpg'),
(38, 'laptop381.jpg'),
(38, 'laptop382.jpg'),
(38, 'laptop383.jpg'),
(39, 'laptop391.jpg'),
(39, 'laptop392.jpg'),
(39, 'laptop393.jpg'),
(40, 'laptop401.jpg'),
(40, 'laptop402.jpg'),
(40, 'laptop403.jpg'),
(41, 'laptop411.jpg'),
(41, 'laptop412.jpg'),
(41, 'laptop413.jpg'),
(42, 'laptop421.jpg'),
(42, 'laptop422.jpg'),
(42, 'laptop423.jpg'),
(43, 'laptop431.jpg'),
(43, 'laptop432.jpg'),
(43, 'laptop433.jpg'),
(44, 'laptop441.jpg'),
(44, 'laptop442.jpg'),
(44, 'laptop443.jpg'),
(45, 'laptop451.jpg'),
(45, 'laptop452.jpg'),
(45, 'laptop453.jpg'),
(46, 'laptop461.jpg'),
(46, 'laptop462.jpg'),
(46, 'laptop463.jpg'),
(47, 'laptop471.jpg'),
(47, 'laptop472.jpg'),
(47, 'laptop473.jpg'),
(48, 'laptop481.jpg'),
(48, 'laptop482.jpg'),
(48, 'laptop483.jpg'),
(49, 'laptop491.jpg'),
(49, 'laptop492.jpg'),
(49, 'laptop493.jpg'),
(50, 'laptop501.jpg'),
(50, 'laptop502.jpg'),
(50, 'laptop503.jpg'),
(51, 'laptop511.jpg'),
(51, 'laptop512.jpg'),
(51, 'laptop513.jpg'),
(52, 'laptop521.jpg'),
(52, 'laptop522.jpg'),
(52, 'laptop523.jpg'),
(53, 'laptop531.jpg'),
(53, 'laptop532.jpg'),
(53, 'laptop533.jpg'),
(54, 'laptop541.jpg'),
(54, 'laptop542.jpg'),
(54, 'laptop543.jpg'),
(55, 'laptop551.jpg'),
(55, 'laptop552.jpg'),
(55, 'laptop553.jpg'),
(56, 'laptop561.jpg'),
(56, 'laptop562.jpg'),
(56, 'laptop563.jpg'),
(57, 'laptop571.jpg'),
(57, 'laptop572.jpg'),
(57, 'laptop573.jpg'),
(58, 'laptop581.jpg'),
(58, 'laptop582.jpg'),
(58, 'laptop583.jpg'),
(59, 'laptop591.jpg'),
(59, 'laptop592.jpg'),
(59, 'laptop593.jpg'),
(60, 'laptop601.jpg'),
(60, 'laptop602.jpg'),
(60, 'laptop603.jpg'),
(61, 'laptop611.jpg'),
(61, 'laptop612.jpg'),
(61, 'laptop613.jpg');


CREATE TABLE User (
	user_id INT AUTO_INCREMENT PRIMARY KEY,
	name varchar(50),
	email varchar(50),
	password varchar(50),
	password_confirm varchar(50),
	password_change_at date,
	pass_word_reset_token varchar(50),
	password_reset_expire date,
	phone char(11),
	address varchar(50)
);

INSERT INTO User (name,email,phone,address) VALUES
('John Doe', 'john.doe@example.com', '1234567890', '123 Main Street'),
('Jane Smith', 'jane.smith@example.com', '9876543210', '456 Oak Avenue'),
('Alice Johnson', 'alice.johnson@example.com', '5551234567', '789 Elm Street'),
('Bob Williams', 'bob.williams@example.com', '3337779999', '321 Pine Road');

SELECT * FROM User;

CREATE TABLE Cart (
    cart_id INT AUTO_INCREMENT PRIMARY KEY,
    total_price INT,
    user_id INT,
    CONSTRAINT fk_user_cart FOREIGN KEY (user_id) REFERENCES User(user_id)
);


CREATE TABLE Delivery (
	delivery_id INT auto_increment PRIMARY KEY,
	total_price INT,
	created_day date,
	expected_day_arrive date,
	user_id INT NOT NULL,
	status varchar(50),
	CONSTRAINT fk_user_delivery FOREIGN KEY (user_id) REFERENCES User(user_id)

);

CREATE TABLE Purchase_item(
	purchase_item_id INT AUTO_INCREMENT PRIMARY KEY,
	cart_id INT ,
	quantity INT,
	delivery_id INT ,
	product_id INT NOT NULL,
	CONSTRAINT fk_cart_purchase_item FOREIGN KEY (cart_id) REFERENCES Cart(cart_id),
	CONSTRAINT fk_delivery_purchase_item FOREIGN KEY (delivery_id) REFERENCES Delivery(delivery_id),
	CONSTRAINT fk_product_purchase_item FOREIGN KEY (product_id) REFERENCES Product(product_id)

);


CREATE TABLE Admin(
	admin_id INT auto_increment PRIMARY KEY,
	name varchar(50),
	email varchar(50),
	password varchar(50),
	password_confirm varchar(50),
	password_change_at date,
	pass_word_reset_token varchar(50),
	password_reset_expire date
);

-- Get one product--





DELIMITER //

CREATE PROCEDURE getOneProduct(IN product_id INT)
BEGIN
    SELECT p.*, i.image_id, i.image_name
    FROM Product p
    LEFT JOIN Image i ON p.product_id = i.product_id
    WHERE p.product_id = product_id;
END //

DELIMITER ;



CALL getOneProduct(2);



-- Get all products--

DELIMITER //
CREATE PROCEDURE getAllProducts(
    IN p_page INT,
    IN p_min_price DECIMAL(10, 2),
    IN p_max_price DECIMAL(10, 2),
    IN p_ram INT,
    IN p_nsx VARCHAR(50),
    IN p_sort_price BIT,
    IN p_sort_rating BIT,
    IN p_sort_sold BIT,
    IN p_available BIT
)
BEGIN
    -- Set default values if parameters are NULL
    SET p_page = COALESCE(p_page, 1);
    SET p_min_price = COALESCE(p_min_price, NULL);
    SET p_max_price = COALESCE(p_max_price, NULL);
    SET p_ram = COALESCE(p_ram, NULL);
    SET p_nsx = COALESCE(p_nsx, NULL);
    SET p_sort_price = COALESCE(p_sort_price, 0);
    SET p_sort_rating = COALESCE(p_sort_rating, 0);
    SET p_sort_sold = COALESCE(p_sort_sold, 0);
    SET p_available = COALESCE(p_available, 1);

    SELECT
        P.*,
        I.image_id,
        I.image_name
    FROM
        (
            SELECT
                ROW_NUMBER() OVER (ORDER BY
                    CASE
                        WHEN p_sort_price = 1 THEN P.new_price
                        WHEN p_sort_rating = 1 THEN P.rating_average
                        WHEN p_sort_sold = 1 THEN P.sold
                        ELSE P.product_id -- Default sorting by product_id
                    END
                ) AS RowNum,
                P.*
            FROM
                Product P
            WHERE
                (p_min_price IS NULL OR P.new_price >= p_min_price) AND
                (p_max_price IS NULL OR P.new_price <= p_max_price) AND
                (p_ram IS NULL OR P.ram = p_ram) AND
                (p_nsx IS NULL OR P.manufacturer = p_nsx) AND
                (p_available IS NULL OR P.available = p_available)
        ) AS P
        LEFT JOIN Image I ON P.product_id = I.product_id
    WHERE
        RowNum BETWEEN (p_page - 1) * 20 + 1 AND p_page * 20;
END //
DELIMITER ;

CALL getAllProducts(
    1,               -- Page number (default is 1 if not provided)
    NULL,          -- Minimum price
    NULL,          -- Maximum price
    NULL,               -- RAM size
    NULL,    -- Manufacturer (replace with an actual value or use NULL)
    1,               -- Sort by price (1 for true, 0 for false)
    0,               -- Sort by rating (1 for true, 0 for false)
    0,               -- Sort by sold (1 for true, 0 for false)
    1                -- Available (1 for true, 0 for false)
);
-- Create Product 

DELIMITER //

CREATE PROCEDURE createProduct(
    IN p_product_name VARCHAR(50),  
    IN p_new_price DECIMAL(10, 2),
    IN p_old_price DECIMAL(10, 2),  
    IN p_discount_percentage INT,  
    IN p_weight FLOAT,  
    IN p_display VARCHAR(50),  
    IN p_cpu VARCHAR(50),  
    IN p_cpu_type VARCHAR(50),  
    IN p_gpu_name VARCHAR(50),  
    IN p_gpu_onboard BIT, 
    IN p_ram INT,   
    IN p_ssd INT,  
    IN p_hdd INT,
    IN p_operating_system VARCHAR(50), 
    IN p_color VARCHAR(50),
    IN p_battery VARCHAR(50),
    IN p_camera VARCHAR(50),
    IN p_rating_average FLOAT,  
    IN p_rating_amount INT,
    IN p_available BIT,
    IN p_sold INT,  
    IN p_manufacturer VARCHAR(10),
    IN p_manufacturer_year INT, 
    IN p_material VARCHAR(50),
    IN p_stock_quantity INT
)
BEGIN
    INSERT INTO product (
        product_name,  
        new_price,
        old_price,  
        discount_percentage,  
        weight,  
        display,  
        cpu, 
        cpu_type,  
        gpu_name ,  
        gpu_onboard , 
        ram,   
        ssd,  
        hdd,
        operating_system, 
        color,
        battery,
        camera,
        rating_average,  
        rating_amount,
        available,
        sold,  
        manufacturer,
        manufacturer_year, 
        material,
        stock_quantity
    )
    VALUES (
        p_product_name, 
        p_new_price ,
        p_old_price ,  
        p_discount_percentage ,  
        p_weight ,  
        p_display ,  
        p_cpu ,  
        p_cpu_type ,  
        p_gpu_name ,  
        p_gpu_onboard , 
        p_ram ,   
        p_ssd ,  
        p_hdd ,
        p_operating_system , 
        p_color ,
        p_battery ,
        p_camera ,
        p_rating_average ,  
        p_rating_amount ,
        p_available,
        p_sold ,  
        p_manufacturer ,
        p_manufacturer_year , 
        p_material ,
        p_stock_quantity
    );
END //

DELIMITER ;



-- Update Product

DELIMITER //

CREATE PROCEDURE updateProduct(
    IN p_product_id INT,
    IN p_product_name VARCHAR(50),  
    IN p_new_price DECIMAL(10, 2),
    IN p_old_price DECIMAL(10, 2),  
    IN p_discount_percentage INT,  
    IN p_weight FLOAT,  
    IN p_display VARCHAR(50),  
    IN p_cpu VARCHAR(50),  
    IN p_cpu_type VARCHAR(50),  
    IN p_gpu_name VARCHAR(50),  
    IN p_gpu_onboard BIT, 
    IN p_ram INT,   
    IN p_ssd INT,  
    IN p_hdd INT,
    IN p_operating_system VARCHAR(50), 
    IN p_color VARCHAR(50),
    IN p_battery VARCHAR(50),
    IN p_camera VARCHAR(50),
    IN p_rating_average FLOAT,  
    IN p_rating_amount INT,
    IN p_available BIT,
    IN p_sold INT,  
    IN p_manufacturer VARCHAR(10),
    IN p_manufacturer_year INT, 
    IN p_material VARCHAR(50),
    IN p_stock_quantity INT
)
BEGIN
    UPDATE Product
    SET
        product_name = p_product_name,
        new_price = p_new_price,
        old_price = p_old_price,  
        discount_percentage = p_discount_percentage,  
        weight = p_weight,  
        display = p_display,  
        cpu = p_cpu, 
        cpu_type = p_cpu_type,  
        gpu_name = p_gpu_name ,  
        gpu_onboard = p_gpu_onboard , 
        ram = p_ram,   
        ssd = p_ssd,  
        hdd = p_hdd,
        operating_system = p_operating_system, 
        color = p_color,
        battery = p_battery,
        camera = p_camera,
        rating_average = p_rating_average,  
        rating_amount = p_rating_amount,
        available = p_available,
        sold = p_sold,  
        manufacturer = p_manufacturer,
        manufacturer_year = p_manufacturer_year, 
        material = p_material,
        stock_quantity = p_stock_quantity
    WHERE
        product_id = p_product_id;
END //

DELIMITER ;

	

-- Deleted product table--

CREATE TABLE Deleted_Product (
    product_id INT , 
    product_name VARCHAR(50),  
    new_price DECIMAL(10, 2),
    old_price DECIMAL(10, 2),  
    discount_percentage INT,  
    weight FLOAT,  
    display VARCHAR(50),  
    cpu VARCHAR(50),  
    cpu_type VARCHAR(50),  
    gpu_name VARCHAR(50),  
    gpu_onboard BIT, 
    ram INT,   
    ssd INT,  
    hdd INT,
    operating_system VARCHAR(50), 
    color VARCHAR(50),
    battery VARCHAR(50),
    camera VARCHAR(50),
    rating_average FLOAT,  
    rating_amount INT,
    available BIT,
    sold INT,  
    manufacturer VARCHAR(10),
    manufacturer_year INT, 
    material VARCHAR(50),
	stock_quantity INT
);



-- Delete product--

DELIMITER //

CREATE PROCEDURE deleteProduct(
    IN p_product_id INT
)
BEGIN
    -- Check if the product is being purchased
    DECLARE purchase_count INT;
    SELECT COUNT(*) INTO purchase_count FROM Purchase_item WHERE product_id = p_product_id;

    IF purchase_count > 0 THEN
        -- Product is in a purchase item, raise an error
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Cannot delete product. Product is being purchased.';
    ELSE
        -- Move the product information to the 'deleted_products' table
        INSERT INTO Deleted_Product (
            product_id,
            product_name,  
            new_price,
            old_price,  
            discount_percentage,  
            weight,  
            display,  
            cpu, 
            cpu_type,  
            gpu_name ,  
            gpu_onboard , 
            ram,   
            ssd,  
            hdd,
            operating_system, 
            color,
            battery,
            camera,
            rating_average,  
            rating_amount,
            available,
            sold,  
            manufacturer,
            manufacturer_year, 
            material,
            stock_quantity
        )
        SELECT *
        FROM product
        WHERE product_id = p_product_id;

        -- Delete the product from the 'products' table
        DELETE FROM Image
        WHERE product_id = p_product_id;

        DELETE FROM product
        WHERE product_id = p_product_id;
    END IF;
END //

DELIMITER ;

call deleteProduct(66);

SELECT * FROM Deleted_Product


-- USER--

-- get user--

DELIMITER //

CREATE PROCEDURE getAllUser(
    IN p_page INT
)
BEGIN
    -- Set default value if the page parameter is NULL
    SET p_page = COALESCE(p_page, 1);

    SELECT
        U.* -- Add more columns as needed
    FROM (
        SELECT
            ROW_NUMBER() OVER (ORDER BY user_id) AS RowNum,
            user_id,
            name,
            email,
            address,
            phone
        FROM
            `User`
    ) AS U
    WHERE
        RowNum BETWEEN (p_page - 1) * 20 + 1 AND p_page * 20;
END //
DELIMITER ;



call getAllUser(1);

-- update user--

DELIMITER //

CREATE PROCEDURE updateUser(
    IN p_user_id INT,
    IN p_email VARCHAR(50),
    IN p_phone VARCHAR(20),
    IN p_address VARCHAR(50),
    IN p_name VARCHAR(50)
)
BEGIN
    UPDATE `User`
    SET
        email = p_email,
        phone = p_phone,
        address = p_address,
        name = p_name
    WHERE
        user_id = p_user_id;
END //

DELIMITER ;

select * from User;

Call updateUser(
   3,
    'new.email@example.com',
    '555-1234',
   '123 Main St',
    'John Doe');

-- update user password--


updateUserPassword(user_id, newpass, newpass_confirm)



--Cart--


getCart(user_id)