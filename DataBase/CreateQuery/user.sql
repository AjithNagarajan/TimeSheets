CREATE TABLE users (
    user_id BIGINT PRIMARY KEY not null AUTO_INCREMENT,
    login_id VARCHAR(80) not null,
    password varchar(80) not null,
    first_name varchar(80) not null,
    last_name varchar(80) not null,
    role_name varchar(20) not null,
    role_id bigint not null,
    user_status varchar(80) not null,
    created_by bigint not null,
    created_date datetime not null,
    modified_by bigint not null,
    modified_date datetime not null,
    optlock_version int(11),
    is_deleted char not null,
    effective_date datetime,
    expiry_date datetime    
);