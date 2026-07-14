CREATE TABLE machines (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NULL,
    image_url VARCHAR(50) NULL,
    boom_type VARCHAR(50) NULL,
    power_source_id INT NULL,
    brand_id INT NULL,
    platform_height DECIMAL (5,2) NULL,
    working_height DECIMAL (5,2) NULL,
    platform_extension DECIMAL (5,2) NULL,
    up_and_over_height VARCHAR(50) NULL,
    machine_weight VARCHAR(50) NULL,
    drive_speed VARCHAR(50) NULL,
    machine_height DECIMAL (5,2) NULL,
    machine_width DECIMAL (5,2) NULL,
    machine_length DECIMAL (5,2) NULL,
    grounded_clearance DECIMAL (5,2) NULL,
    gradeability VARCHAR(50) NULL,
    type_id INT NULL
    
    
);