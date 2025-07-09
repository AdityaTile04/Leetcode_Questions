# Write your MySQL query statement below
select product_name, year, price from Sales as a
right join Product as b
on a.product_id = b.product_id
where a.product_id is not null;