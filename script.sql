CREATE DATABASE StudentDB
GO

USE StudentDB
GO

CREATE TABLE Student(
Id INT IDENTITY(1,1) PRIMARY KEY,
Name VARCHAR(50),
Email VARCHAR(50),
City VARCHAR(50)
)
GO

-- CRUD Operation (CREATE, READ, UPDATE, DELETE)

SELECT * FROM Student  -- READ

INSERT INTO Student (Name, Email, city) VALUES ('Scott', 'scott@ef.com', 'Boston'),
                                               ('Adam', 'adam@ef.com', 'Sydney'),
											   ('Tuan', 'tuan@ef.com', 'Vietnam'),
											   ('Uma', 'uma@ef.com', 'Hyderabad') --CREATE

Update Student SET Name='Umesh', Email='umesh@ef.com', City ='Hyd' WHERE Id =4 -- UPDATE

DELETE FROM Student WHERE Id = 6 -- DELETE

SELECT * FROM Student  WHERE Id=4 -- Get Student by Id