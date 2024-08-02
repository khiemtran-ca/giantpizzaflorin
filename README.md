<img class="fit-picture"
     src="./client/public/Assets/Logo/Logo.jpeg"
     alt="Giant Pizaa Logo" style="width:350px; height:250px; border: solid #ff000065; border-radius: 45px">

<h1 style="color: red; font-weight: bolder; font-size: 40px">Thesis Project (The Giant Pizza Website)</h1>

## **Table of Contents** 

- **[Introduction](#Introduction)**

- **[Installations](#Installations)**
        
     [How to install dependencies, access the server, the client and to seed the database ](#How-to-install-dependencies,-access-servers-and-seed-the-database)

- **[Usage](#Usage)**

- **[Support](#Support)**

- **[Acknowledgment](#Acknowledgment)**

- **[Research & Explanation](#RESEARCH-&-EXPLANATION)**

## **Introduction**

This is my final project. I used everything I have learned from track I and track II to build this Giant Pizza website which allows users easily navigate to order, change and cancel their order. It also allows the owner to access databases for future maintenance and services.

## **Installations** 

### How to install dependencies, access servers and seed the database

    Ensure Mongo Database is running
    
#### Server Side:

Change directory into the Khiem_Tran_Competency_Project then type in command words into terminal:

```bash
cd server
```

- Install dependencies:

```bash
npm install
```

- After dependencies loaded, seed the mongo database:

```bash
npm run seed
```

- After database is seeded:

```bash
npm start
```

If everything correctly, there are 2 messages should be display:\
Now Serving on Port http://localhost:3000\
Successfully connected to GiantPizza Database

#### Client Side:

Open another terminal *make sure back to the root directory (not the server folder)* type in command words:

```bash
cd client
```

- Install dependencies:

```bash
npm install
```
- After dependencies:

```bash
npm start
```

If everything correctly, there are 2 messages should be display:\
Local: http://localhost:5000\
On Your Network: http://10.139.100.5:5000

### At this time the browser should be loaded the Giant Pizza website with its Logo on it.

## **Usage**

The main website (orderPage) was build for easily operate. Customer does not need to login or register. The home page show large picture of items. It also guides customer how to order, to fill out information for delivery purpose. Then after ordered, customer can change his/her order, just simply hit the *Click Here* button indicated on the top of the page. The customer put his/her name and confirmation number aka phone number so that he/she could cancel or change the order. 

The Administration Login page which is the hiden page, it is for the owner only. To access the page, the owner must type in the right path http://localhost:5000/adminLogin then enter username (khiem) and password (abc123). When the username and password entered correctly the http://localhost:5000/dashboard will be appeared with 4 buttons; Customer Info, Menu, Report and Logout. For more information about those buttons please refer to [Research & Explanation](#RESEARCH-&-EXPLANATION) section below.

## **Acknowledgment**

I would like to say thank you first to my TAs Robert Tyler, Jamie Acosta, all my class mates "the MERN class of 2023" and the team members of TLM Help Desk Support, also all my supervisors Katy, Jon, and Ron for supporting and helping me before, during and after the project. Your contribution is highly appreciated.

## **Project Status & Roadmap**

This Thesis Project, I added the Administration login page. I used JWT for security login. This page, the owner can recall back all customer's data and change menus from Mongo Database. I also clean up my codes, put more details, fixed CSS file make sure the Site Layout requirement meet. I hope I will finish and launch this website when I am released.


## **Research & Explanation**

On this Thesis Project I created a new page, the adminLoginPage. This page not only allows the owner to check customer’s informations such as their name, address, phone#, orders, but it also allows the owner access to the menus such as mainItems, sideItems, sodas and to update without messing up the Mongo Database (which I used as backup database). In order to get to this page the owner must go to the right path which is http://localhost:5000/adminLogin. If the path is correct the Administration Login page will appear with the username and password required. If it is a wrong path the browser will notify the alert message. For security reasons such as protecting customers identity, and the website database I chose Authentication with JWT to work with. To make everything work I did these following steps:

    First, in my index.js page, I created Routes and Paths such as path to the home page (orderPage), to the adminlogin page, the dashboard page, and other empty pages (NotFound page). Then I created the DashBoard.js, AdminLogin.js, and middleware.js. Also under my components file I created Admin file with AdminMenus.js and CustomersInfo.js inside.

    Second, I created the Admin Token then stored it inside HTTP headers. The HTTP headers I used:
    
        URL: fetch the http://localhost:3000/admin_login route, 
        method: ‘POST’, 
        headers: (metadata for the server where the JWT will be stored), 
        body: (get it from the inputs (username and password)

    Next, I created middleware functions:

	    First function is created the createJWT, I get the JWT_SECRET form the .env file, in this project I copied the variable called JWT_SECRET and the string "TheLastMileSecret" from the Authentication Lesson.

	    Second function is for login. In this case because I only have adminLogin so I need to set the default username as ‘khiem’ and password as ‘abc123’. If the username and password matched, I create a token and pass it to browser where it is pushed to localStorage.

	    Third function performs verification. In browser, add token to headers (client side) then on server side split the token from the Authorization header to compare. Once again this case only Admin Login so I set ‘true’ or ‘false’ if token is valid or not. If it is ‘true’ then return {success: true} to browser.

	Last step, to limit access to DashBoard I make a check_token call to server. If no success then ‘can not see the page’, browser will display alert message. If success then DashBoard will show with four buttons which link to different components. Each button with its own handleClick. For example the Customer Info and Menu, when clicked it will access to Mongo GiantPizza Database and its collections such as customers, mainItems, sideItems and sodas. The Report button which I have not finished yet. If I have more time I will work on this Report using the MySQL. And the LogOut button, when clicked, for security reason, it will remove the token from the localStorage and reset the page back to AdminLogin page.

I used Authentication with JWT for the login, ensuring that owner has a real, secure login account and its data is protected from malicious hackers. The reason I used JWT because when the token is created, it will encrypt to a hash with the SECRET associated with the .env file which is very difficult to hack. The benefit of this is the server can keep track of a specific browser user. Pitfall is I have an AdminLogin page which runs my business that could be hacked (difficulty)

## **Support**

Need help or more information please contact khiem.tran.az7625@coding7370.org @ TLM San Quentin MERN class or My supervisors Mrs. Katy Gilber and Mr. Jon Gripshover @ TML San Quentin