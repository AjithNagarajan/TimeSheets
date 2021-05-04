create table task1(first_name varchar(10),last_name varchar(10),age int);
select * from task1;
insert into task1 values('rocky','kalai',34); 

select min(age) from task1;
select max(age) from task1;
select count(first_name) from task1
insert into task1 values('ummal','bajriya',19);
select * from task1 where age='20';
select * from task1 where age=19 or age=20;
select * from task1 where NOT AGE = 19


