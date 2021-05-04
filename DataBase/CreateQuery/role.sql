CREATE TABLE roles (
    role_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    role_name VARCHAR(80) NOT NULL,
    created_by bigint not null,
    created_date datetime not null,
    modified_by bigint not null,
    modified_date datetime not null,
    optlock_version int(11),
    is_deleted char not null,
    effective_date datetime,
    expiry_date datetime 
);