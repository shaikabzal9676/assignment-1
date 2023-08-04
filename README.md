# Instructions

- clone this repo and open with your favorite code editor

- make sure you are checked out to `master` branch

- to run the app `npm install` then `npm start`

## fixed the following issues

1.  In the title of the header, it displays `5 orders` but there are `6 orders` in the table. We had displayed the `total` number of `orders` in the header title

2.  In the table order submitted date is missing, we have timestamp data included in the `src\assets\timeStamps.json` with the corresponding ids, combined that with the order data and make sure the order submitted date is being displayed in the table

3. Order Volume cell is displaying USD values, made it display the currency value selected on the dropdown located in the header of the dashboard

4. Added search feature on the order IDs with the search bar given in the header

5. Cleared the console errors and warnings.

6.  When user selects an order,  populated the Card on top of the listing component as shown in the image

![alt text](dashboard.JPG)

## Bonus

- run storybook `npm run storybook`

1. Added storybook to one of the components
