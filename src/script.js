//Weather widget
!(function (d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (!d.getElementById(id)) {
    js = d.createElement(s);
    js.id = id;
    js.src = "https://weatherwidget.io/js/widget.min.js";
    fjs.parentNode.insertBefore(js, fjs);
  }
})(document, "script", "weatherwidget-io-js");

const localTimeElement = document.querySelector(".local-time");
const localDateElement = document.querySelector(".local-date");
const dayOfWeekElement = document.querySelector(".day-of-the-week span");
const regionElement = document.querySelector(".region span");

// Function to update the local time and date
function updateLocalTimeAndDate() {
  const now = moment(); // Get the current date and time

  // Update the elements with the current local time and date
  localTimeElement.textContent = `Local Time: ${now.format("HH:mm:ss")}`;
  localDateElement.textContent = now.format("dddd, MMMM D, YYYY");
  dayOfWeekElement.textContent = now.format("dddd");
  regionElement.textContent = moment.tz.guess();
}

// Update the local time and date initially
updateLocalTimeAndDate();

// Update the local time and date every second
setInterval(updateLocalTimeAndDate, 1000);

// Function to display London time
function updateLondonTime() {
  const londonTimeElement = document.querySelector("#london .time");
  const londonDateElement = document.querySelector("#london .date");

  const londonTime = moment.tz("Europe/London");
  londonTimeElement.innerHTML = `
      <span class="hour">Time: ${londonTime.format("HH")} : </span>
      <span class="minute">${londonTime.format("mm")}</span>
      <span class="seconds">${londonTime.format(
        "ss"
      )} <span class="am-pm">${londonTime.format("A")}</span></span>
    `;
  londonDateElement.textContent = londonTime.format("ddd, MMMM D, YYYY");
}

// Update London time initially
updateLondonTime();

// Update London time every second
setInterval(updateLondonTime, 1000);

document.addEventListener("DOMContentLoaded", function () {
  const column1Buttons = document.querySelectorAll(".column1 .hotel-button");
  const column2Buttons = document.querySelectorAll(".column2 .hotel-button");
  const column3Buttons = document.querySelectorAll(".column3 .hotel-button");

  const hotelImg = document.querySelector(".hotel-img1 img");
  const hotelImg2 = document.querySelector(".hotel-img2 img");
  const hotelImg3 = document.querySelector(".hotel-img3 img");
  const hotelName = document.querySelector(".hotel-name h3");
  const hotelAddress = document.querySelector(".hotel-address");
  const hotelPhone = document.querySelector(".hotel-number");
  const hotelPrice = document.querySelector(".price");

  // Function to update hotel card information
  function updateHotelCard(
    imgElement,
    nameElement,
    addressElement,
    phoneElement,
    priceElement,
    imgSrc,
    name,
    address,
    phone,
    price,
    bookingLink
  ) {
    imgElement.src = imgSrc;
    nameElement.textContent = name;
    addressElement.textContent = address;
    phoneElement.textContent = phone;
    priceElement.innerHTML = `<a href="${bookingLink}" target="_blank">From $${price} <i class="fa-solid fa-arrow-up-right-from-square"></i></a>`;
  }

  // Initial hotel card information for each column
  const initialHotelInfo1 = {
    imgSrc:
      "https://i.pinimg.com/564x/01/fe/a3/01fea3faefe04688246fd1daaca7ba61.jpg",
    name: "The Landmark London",
    address: "20-21 Newman St, London.",
    phone: "+44 20 7631 8000",
    price: 641,
    bookingLink:
      "https://www.expedia.com/London-Hotels-The-Landmark-London.h438653.Hotel-Information?chkin=2024-04-23&chkout=2024-04-27&x_pwa=1&rfrr=HSR&pwa_ts=1711138867049&referrerUrl=aHR0cHM6Ly93d3cuZXhwZWRpYS5jb20vSG90ZWwtU2VhcmNo&useRewards=false&rm1=a2&regionId=2114&destination=London%2C+England%2C+United+Kingdom&destType=CURRENT_LOCATION&neighborhoodId=6195474&selected=438653&latLong=51.521297%2C-0.163129&sort=RECOMMENDED&top_dp=518&top_cur=USD&userIntent=&selectedRoomType=200347183&selectedRatePlan=388504653&searchId=a8fe4fdc-9342-4683-987d-93dbc37c75f5&pdpImageUrls=https%3A%2F%2Fimages.trvl-media.com%2Flodging%2F1000000%2F440000%2F438700%2F438653%2F96bf6937.jpg%3Fimpolicy%3Dresizecrop%26rw%3D598%26ra%3Dfit%2Chttps%3A%2F%2Fimages.trvl-media.com%2Flodging%2F1000000%2F440000%2F438700%2F438653%2F27ab5f3b.jpg%3Fimpolicy%3Dresizecrop%26rw%3D297%26ra%3Dfit%2Chttps%3A%2F%2Fimages.trvl-media.com%2Flodging%2F1000000%2F440000%2F438700%2F438653%2F5eb1a316.jpg%3Fimpolicy%3Dresizecrop%26rw%3D297%26ra%3Dfit%2Chttps%3A%2F%2Fimages.trvl-media.com%2Flodging%2F1000000%2F440000%2F438700%2F438653%2Feecb4b49.jpg%3Fimpolicy%3Dresizecrop%26rw%3D297%26ra%3Dfit",
  };

  const initialHotelInfo2 = {
    imgSrc: "/media/mandrake-london.jpg",
    name: "The Mandrake London",
    address: "20-21 Newman St, London W1T 1PG",
    phone: "+44 20 3146 7770",
    price: 465,
    bookingLink:
      "https://www.expedia.com/London-Hotels-The-Mandrake.h19507846.Hotel-Information?chkin=2024-04-23&chkout=2024-04-27&x_pwa=1&rfrr=HSR&pwa_ts=1711142242409&referrerUrl=aHR0cHM6Ly93d3cuZXhwZWRpYS5jb20vSG90ZWwtU2VhcmNo&useRewards=false&rm1=a2&regionId=2114&destination=London%2C+England%2C+United+Kingdom&destType=CURRENT_LOCATION&neighborhoodId=6195474&selected=19507846&latLong=51.51758%2C-0.13543&sort=RECOMMENDED&top_dp=465&top_cur=USD&userIntent=&selectedRoomType=202115940&selectedRatePlan=210913807&searchId=09539836-7e88-4cd6-b379-de18e92f8958&pdpImageUrls=https%3A%2F%2Fimages.trvl-media.com%2Flodging%2F20000000%2F19510000%2F19507900%2F19507846%2F33476a46.jpg%3Fimpolicy%3Dresizecrop%26rw%3D598%26ra%3Dfit%2Chttps%3A%2F%2Fimages.trvl-media.com%2Flodging%2F20000000%2F19510000%2F19507900%2F19507846%2Fb5d79be8.jpg%3Fimpolicy%3Dresizecrop%26rw%3D297%26ra%3Dfit%2Chttps%3A%2F%2Fimages.trvl-media.com%2Flodging%2F20000000%2F19510000%2F19507900%2F19507846%2F8ff305ae.jpg%3Fimpolicy%3Dresizecrop%26rw%3D297%26ra%3Dfit%2Chttps%3A%2F%2Fimages.trvl-media.com%2Flodging%2F20000000%2F19510000%2F19507900%2F19507846%2Fe54bb6ff.jpg%3Fimpolicy%3Dresizecrop%26rw%3D297%26ra%3Dfit&propertyName=The+Mandrake",
  };

  const initialHotelInfo3 = {
    imgSrc: "/media/baileys-hotel.jpg",
    name: "The Bailey’s Hotel London",
    address: "Address 3",
    phone: "345-678-9012",
    price: 500,
    bookingLink: "https://www.booking.com/hotel-3.html",
  };

  // Update hotel card with initial information for each column
  updateHotelCard(
    hotelImg,
    hotelName,
    hotelAddress,
    hotelPhone,
    hotelPrice,
    initialHotelInfo1.imgSrc,
    initialHotelInfo1.name,
    initialHotelInfo1.address,
    initialHotelInfo1.phone,
    initialHotelInfo1.price,
    initialHotelInfo1.bookingLink
  );

  // Function to handle button click events for each column
  function handleButtonClicks(buttons, hotelInfo) {
    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        // Update hotel card based on the clicked button
        const buttonInfo = hotelInfo.find(
          (info) => info.name === this.textContent
        );
        updateHotelCard(
          button
            .closest(".hotels-card-wrapper")
            .querySelector(".hotel-img img"),
          button
            .closest(".hotels-card-wrapper")
            .querySelector(".hotel-name h3"),
          button
            .closest(".hotels-card-wrapper")
            .querySelector(".hotel-address"),
          button.closest(".hotels-card-wrapper").querySelector(".hotel-number"),
          button.closest(".hotels-card-wrapper").querySelector(".price"),
          buttonInfo.imgSrc,
          buttonInfo.name,
          buttonInfo.address,
          buttonInfo.phone,
          buttonInfo.price,
          buttonInfo.bookingLink
        );
      });
    });
  }

  // Define hotel information arrays for each column
  const hotelInfoColumn1 = [
    {
      imgSrc: "/media/landmark-london.jpg",
      name: "The Landmark London",
      address: "20-21 Newman St, London.",
      phone: "+44 20 7631 8000",
      price: 641,
      bookingLink:
        "https://www.expedia.com/London-Hotels-The-Landmark-London.h438653.Hotel-Information?chkin=2024-04-23&chkout=2024-04-27&x_pwa=1&rfrr=HSR&pwa_ts=1711138867049&referrerUrl=aHR0cHM6Ly93d3cuZXhwZWRpYS5jb20vSG90ZWwtU2VhcmNo&useRewards=false&rm1=a2&regionId=2114&destination=London%2C+England%2C+United+Kingdom&destType=CURRENT_LOCATION&neighborhoodId=6195474&selected=438653&latLong=51.521297%2C-0.163129&sort=RECOMMENDED&top_dp=518&top_cur=USD&userIntent=&selectedRoomType=200347183&selectedRatePlan=388504653&searchId=a8fe4fdc-9342-4683-987d-93dbc37c75f5&pdpImageUrls=https%3A%2F%2Fimages.trvl-media.com%2Flodging%2F1000000%2F440000%2F438700%2F438653%2F96bf6937.jpg%3Fimpolicy%3Dresizecrop%26rw%3D598%26ra%3Dfit%2Chttps%3A%2F%2Fimages.trvl-media.com%2Flodging%2F1000000%2F440000%2F438700%2F438653%2F27ab5f3b.jpg%3Fimpolicy%3Dresizecrop%26rw%3D297%26ra%3Dfit%2Chttps%3A%2F%2Fimages.trvl-media.com%2Flodging%2F1000000%2F440000%2F438700%2F438653%2F5eb1a316.jpg%3Fimpolicy%3Dresizecrop%26rw%3D297%26ra%3Dfit%2Chttps%3A%2F%2Fimages.trvl-media.com%2Flodging%2F1000000%2F440000%2F438700%2F438653%2Feecb4b49.jpg%3Fimpolicy%3Dresizecrop%26rw%3D297%26ra%3Dfit",
    },

    {
      imgSrc: "/media/Kimpton-fitzroy.jpg",
      name: "Kimpton Fitzroy Hotel",
      address: "1-8 Russell Sq, London WC1B 5BE",
      phone: "+44 20 7123 5000",
      price: 375,
      bookingLink:
        "https://www.expedia.com/London-Hotels-Kimpton-Fitzroy-London.h21514.Hotel-Information?chkin=2024-04-27&chkout=2024-04-30&x_pwa=1&rfrr=HSR&pwa_ts=1711138592311&referrerUrl=aHR0cHM6Ly93d3cuZXhwZWRpYS5jb20vSG90ZWwtU2VhcmNo&useRewards=false&rm1=a2&regionId=2114&destination=London%2C+England%2C+United+Kingdom&destType=MARKET&neighborhoodId=6251519&selected=21514&latLong=51.50746%2C-0.127673&sort=RECOMMENDED&top_dp=332&top_cur=USD&mdpcid=US.META.HPA.HOTEL-CORESEARCH-ROOMBUNDLE-desktop.HOTEL&mdpdtl=HTL.21514.20240427.20240430.DDF.36.CID.20668773102.AUDID.7263802306.RRID.bex_us_desktop&mctc=10&gclid=Cj0KCQjw2PSvBhDjARIsAKc2cgPwscLrATn-4Y8tUHzM0BesfSPLsErxvnPhA47x3fBgCRec3XMc024aAr5pEALw_wcB&userIntent=&selectedRoomType=210307773&selectedRatePlan=380268387&searchId=fc3df705-0c55-48a4-9f09-2ec2c87cf56d&pdpImageUrls=https%3A%2F%2Fimages.trvl-media.com%2Flodging%2F1000000%2F30000%2F21600%2F21514%2F0170cc11.jpg%3Fimpolicy%3Dresizecrop%26rw%3D598%26ra%3Dfit%2Chttps%3A%2F%2Fimages.trvl-media.com%2Flodging%2F1000000%2F30000%2F21600%2F21514%2Fc01724c7.jpg%3Fimpolicy%3Dresizecrop%26rw%3D297%26ra%3Dfit%2Chttps%3A%2F%2Fimages.trvl-media.com%2Flodging%2F1000000%2F30000%2F21600%2F21514%2Fdbb1585d.jpg%3Fimpolicy%3Dresizecrop%26rw%3D297%26ra%3Dfit%2Chttps%3A%2F%2Fimages.trvl-media.com%2Flodging%2F1000000%2F30000%2F21600%2F21514%2F1f32b864.jpg%3Fimpolicy%3Dresizecrop%26rw%3D297%26ra%3Dfit&propertyName=Kimpton+Fitzroy+London%2C+an+IHG+Hotel",
    },
    {
      imgSrc: "/media/no-mad-london.jpg",
      name: "NoMad Hotel",
      address: "28 Bow St, London WC2E 7AW",
      phone: "+44 20 3906 1600",
      price: 510,
      bookingLink:
        "https://www.expedia.com/London-Hotels-The-NoMad-London.h59943753.Hotel-Information?chkin=2024-04-23&chkout=2024-04-27&x_pwa=1&rfrr=HSR&pwa_ts=1711138967006&referrerUrl=aHR0cHM6Ly93d3cuZXhwZWRpYS5jb20vSG90ZWwtU2VhcmNo&useRewards=false&rm1=a2&regionId=2114&destination=London%2C+England%2C+United+Kingdom&destType=CURRENT_LOCATION&neighborhoodId=6195474&selected=59943753&latLong=51.513132%2C-0.122033&sort=RECOMMENDED&top_dp=510&top_cur=USD&userIntent=&selectedRoomType=322652578&selectedRatePlan=391740992&searchId=8a0ad53c-49e3-47a3-bb00-5f7d5f3bff78&pdpImageUrls=https%3A%2F%2Fimages.trvl-media.com%2Flodging%2F60000000%2F59950000%2F59943800%2F59943753%2F82d3e48c.jpg%3Fimpolicy%3Dresizecrop%26rw%3D598%26ra%3Dfit%2Chttps%3A%2F%2Fimages.trvl-media.com%2Flodging%2F60000000%2F59950000%2F59943800%2F59943753%2F9c2feb3b.jpg%3Fimpolicy%3Dresizecrop%26rw%3D297%26ra%3Dfit%2Chttps%3A%2F%2Fimages.trvl-media.com%2Flodging%2F60000000%2F59950000%2F59943800%2F59943753%2Fw2875h2000x3y0-ec36df60.jpg%3Fimpolicy%3Dresizecrop%26rw%3D297%26ra%3Dfit%2Chttps%3A%2F%2Fimages.trvl-media.com%2Flodging%2F60000000%2F59950000%2F59943800%2F59943753%2F33feaeab.jpg%3Fimpolicy%3Dresizecrop%26rw%3D297%26ra%3Dfit&propertyName=NoMad+London",
    },

    {
      imgSrc: "/media/rosewood-hotel.jpg",
      name: "Rosewood Hotel",
      address: "252 High Holborn, London WC1V 7EN",
      phone: "+44 20 7781 8888",
      price: 720,
      bookingLink:
        "https://www.expedia.com/London-Hotels-Rosewood-London.h537268.Hotel-Information?chkin=2024-04-23&chkout=2024-04-27&x_pwa=1&rfrr=HSR&pwa_ts=1711139262434&referrerUrl=aHR0cHM6Ly93d3cuZXhwZWRpYS5jb20vSG90ZWwtU2VhcmNo&useRewards=false&rm1=a2&regionId=2114&destination=London%2C+England%2C+United+Kingdom&destType=CURRENT_LOCATION&neighborhoodId=6195474&selected=537268&latLong=51.5178%2C-0.118017&sort=RECOMMENDED&top_dp=709&top_cur=USD&userIntent=&selectedRoomType=201460120&selectedRatePlan=388379838&searchId=643a1768-5660-4ddb-92f3-14fefc6cceeb&pdpImageUrls=https%3A%2F%2Fimages.trvl-media.com%2Flodging%2F1000000%2F540000%2F537300%2F537268%2F032c11f5.jpg%3Fimpolicy%3Dresizecrop%26rw%3D598%26ra%3Dfit%2Chttps%3A%2F%2Fimages.trvl-media.com%2Flodging%2F1000000%2F540000%2F537300%2F537268%2F1ecbd149.jpg%3Fimpolicy%3Dresizecrop%26rw%3D297%26ra%3Dfit%2Chttps%3A%2F%2Fimages.trvl-media.com%2Flodging%2F1000000%2F540000%2F537300%2F537268%2Fb4671a14.jpg%3Fimpolicy%3Dresizecrop%26rw%3D297%26ra%3Dfit%2Chttps%3A%2F%2Fimages.trvl-media.com%2Flodging%2F1000000%2F540000%2F537300%2F537268%2Fec94206f.jpg%3Fimpolicy%3Dresizecrop%26rw%3D297%26ra%3Dfit",
    },

    {
      imgSrc: "/media/savoy-hotel.jpg",
      name: "Savoy Hotel",
      address: " Strand, London WC2R 0EZ",
      phone: "+44 20 7836 4343",
      price: 685,
      bookingLink:
        "https://www.expedia.com/London-Hotels-The-Savoy.h27158.Hotel-Information?chkin=2024-04-23&chkout=2024-04-27&x_pwa=1&rfrr=HSR&pwa_ts=1711139263533&referrerUrl=aHR0cHM6Ly93d3cuZXhwZWRpYS5jb20vSG90ZWwtU2VhcmNo&useRewards=false&rm1=a2&regionId=2114&destination=London%2C+England%2C+United+Kingdom&destType=MARKET&neighborhoodId=6195474&selected=537268&latLong=51.50746%2C-0.127673&sort=RECOMMENDED&top_dp=685&top_cur=USD&userIntent=&selectedRoomType=314376921&selectedRatePlan=383327751&searchId=643a1768-5660-4ddb-92f3-14fefc6cceeb&pdpImageUrls=https%3A%2F%2Fimages.trvl-media.com%2Flodging%2F1000000%2F30000%2F27200%2F27158%2Fac978e5c.jpg%3Fimpolicy%3Dresizecrop%26rw%3D598%26ra%3Dfit%2Chttps%3A%2F%2Fimages.trvl-media.com%2Flodging%2F1000000%2F30000%2F27200%2F27158%2Fa5b7f227.jpg%3Fimpolicy%3Dresizecrop%26rw%3D297%26ra%3Dfit%2Chttps%3A%2F%2Fimages.trvl-media.com%2Flodging%2F1000000%2F30000%2F27200%2F27158%2F402d465e.jpg%3Fimpolicy%3Dresizecrop%26rw%3D297%26ra%3Dfit%2Chttps%3A%2F%2Fimages.trvl-media.com%2Flodging%2F1000000%2F30000%2F27200%2F27158%2F2951bd52.jpg%3Fimpolicy%3Dresizecrop%26rw%3D297%26ra%3Dfit&propertyName=The+Savoy",
    },

    {
      imgSrc: "/media/cafe-royal-hotel.jpg",
      name: "Cafe Royal Hotel",
      address: " 10 Air St, London W1B 5AB",
      phone: "+44 20 7406 3333",
      price: 763,
      bookingLink:
        "https://www.expedia.com/London-Hotels-The-Savoy.h27158.Hotel-Information?chkin=2024-04-23&chkout=2024-04-27&x_pwa=1&rfrr=HSR&pwa_ts=1711139263533&referrerUrl=aHR0cHM6Ly93d3cuZXhwZWRpYS5jb20vSG90ZWwtU2VhcmNo&useRewards=false&rm1=a2&regionId=2114&destination=London%2C+England%2C+United+Kingdom&destType=MARKET&neighborhoodId=6195474&selected=537268&latLong=51.50746%2C-0.127673&sort=RECOMMENDED&top_dp=685&top_cur=USD&userIntent=&selectedRoomType=314376921&selectedRatePlan=383327751&searchId=643a1768-5660-4ddb-92f3-14fefc6cceeb&pdpImageUrls=https%3A%2F%2Fimages.trvl-media.com%2Flodging%2F1000000%2F30000%2F27200%2F27158%2Fac978e5c.jpg%3Fimpolicy%3Dresizecrop%26rw%3D598%26ra%3Dfit%2Chttps%3A%2F%2Fimages.trvl-media.com%2Flodging%2F1000000%2F30000%2F27200%2F27158%2Fa5b7f227.jpg%3Fimpolicy%3Dresizecrop%26rw%3D297%26ra%3Dfit%2Chttps%3A%2F%2Fimages.trvl-media.com%2Flodging%2F1000000%2F30000%2F27200%2F27158%2F402d465e.jpg%3Fimpolicy%3Dresizecrop%26rw%3D297%26ra%3Dfit%2Chttps%3A%2F%2Fimages.trvl-media.com%2Flodging%2F1000000%2F30000%2F27200%2F27158%2F2951bd52.jpg%3Fimpolicy%3Dresizecrop%26rw%3D297%26ra%3Dfit&propertyName=The+Savoy",
    },

    {
      imgSrc: "/media/st-ermins-hotel.jpg",
      name: "St. Ermins Hotel",
      address: "2 Caxton St, London SW1H 0QW",
      phone: "+44 20 7222 7888",
      price: 425,
      bookingLink:
        "https://www.expedia.com/London-Hotels-St-Ermins-Hotel.h436250.Hotel-Information?chkin=2024-04-23&chkout=2024-04-27&x_pwa=1&rfrr=HSR&pwa_ts=1711139263570&referrerUrl=aHR0cHM6Ly93d3cuZXhwZWRpYS5jb20vSG90ZWwtU2VhcmNo&useRewards=false&rm1=a2&regionId=2114&destination=London%2C+England%2C+United+Kingdom&destType=MARKET&neighborhoodId=6195474&selected=537268&latLong=51.50746%2C-0.127673&trackingData=AAAAAQAAAAEAAAAQvpaqFV75AavOFcx-lgFzanf06MUy9yEvQiw-qpufpfiGGBHjWDJyU7eFWpeE_nKEijYzhNOFX9UUhSfspe_s_jjA8RdSpgvkMcrZxen46axJSVvNDD1l2ax3rQEFuvqPU3iAADKjd4UyBhMH5kga6IPEyqZYzYBROEjzi0wXx9oPar5n65T6496VGwwFNcbLASZdV327uXP_dztOwzSFkg9R5FTY-Upzyqa7uhIyEpR8smJ2p-Cnq-hDmj8H5PLOrZhASui4ZDp9gKbEayjTSUrigKIo9fS3TsqGLhYNXM5WJJ1ZsW5wNbFJucPQK61jQsiE_z-laREkwJk_ecxsnmWGqTaFcvyZ-JrDg-opYKUx02BxdNdEKCySIADcD3B7hgNr-gDgmzsymc2g815fiMu6i2I9OI0afzkWCXsoeqUMsxSuneFSvqqv56oN2kbTjLI0s9lKMcKm3EylzeiUqajuiqprJqXylcGMSawZvLCbhvqgjCwvJUMT6FYw_qpe1ZEVgSoXyteD4vkOh-3Qo9Q4CCgtS3mSKq4phPZooeZDFcW_gUAZ0qHUB6ONu0Y6d-q-L7BeZsIxgfw5lN2SYSI6udYX0hhNVhvUwM6ogYor2ZRNTmrnz6Y_pumy0U9BGkh3o_7xA_WqfnEHXw4Xcq-XGBB1tvtu5tvFHaj4bo_kZKZYOnGt2rvvpN4Z_39eu-48xLpziEuXEqCqqUB7CqEGZO_Xsi7sEahn3vxo94odx0IbG4FFDYuXdaWqJ0pfgMxwd16FHOiukB59QlXp9PC_dvSkPcIBO9vZwaKi0a1L0dm19Zt4LXSeIGgGL-q5p1Q-5ET8WibTg_N-WT8vW0l4uBqVEXv2DXU-Bx4ghxvUQLqJTljSIrzPogfBd3bjKvD1lVVrcEVultMaxpI6SQPLW3H-sIbVorXE1n6oKFLpPcNczCCM2X18ZloDlBkZ1YKGYmVPpgpEeWFniFVXPrlDjKZW0TFBtvlopqM2YuTZosJj0cQz5F4yOrYhp4RxIpI4NCnYpPf5FdaXyFrQ6xWC93-rHaqSLo6WRL4mkbwJ-zGBC-2Z98e0Z-NmCoaz-pL5w3xQsIghvxTWMlpQq41QuEse978fcIaEsSO558ptCUooDXH3f6BP2FdF9PthWQMHp_aXaYi4PrXr338T5z2vjwbCXYYdpg42JcCBzSpII1_m4IZNnQZYtxWjdr3X1mckanBTQDsQwAq3qEEMq1mWdUhGfQ8H9gAz_ud9Av9Y5To1n5u9t6LHDeJz6-G_VX7yCBBFboKADOH46tu7JAB9Jg6x27HhykZYFcyjw4WpRO3g_5j_nWoLntUoTfWKkTGiWAf9I3MRrMGISmwsDFwe1kJulGtSUY7O60W4Ziv64GJAlLoJlCClipk7AD-oJMeE_Vi5ypsvI7qH7n_bpHhPlhAwRcNMQNs7zrywIMCrJZdzXmtQRXGFr3DdT9wlYR72dC9Gvq0OwGasISAZlD_l3NB8zCAG4mLSj_XEOzzPa9kqka3E6Ff6Ab57hKsPjpRY1p45YEubJP3U1tFxVYXUGO1boXmHW3Gi4L7meSt_nAFHkQYm0wy0l9vYVPeZAod6NxT4G4cpeqhfWPDVBRBUNp-pWEsh8xMYkZnfLQM7HFvTT6SEyhEPTmMvMFLrJiUWNUIfIKRPoCGCO5clL98AA3C7mIO7x_TvtlShlmxt3Ve0W9c8Gf9O52RB78CfxmuqEPFDawvomMMsH40eYvF_HVuW5OAIsO-M666hhQinPnHQPTD30vMYIS_87Cn2fIEwM7fUYmxUSRTNFyH1y-jK13n1wVcDZD0UhjokRx54HTBw8hDPpF5F4cdPyhlGt8am_9q8Jevh0Z_SoXD9taxEG7pOR4kUB6rlMLBzE8XtjW7hhRNOIJkZfwUN06AIvudeu0GWh0e0403ESvYLNxKyqAFjSajBcXeWL88v0v6zpHV3Or8tYTd-RxVj2WYoG09VRewBi4Cx1F5pIMXItdzsJMLZ2kN41jn6sYDGGq6JKHJzrMtjwPZ2OEcIrC0fj3aK3EcEr55GY3tbDoLU4jiMYtKKu_8cGC680IXQ4a9LLi6hK4Eh3w8m5f69-E_TuMQg99B2EuZCKDUHdFofcd1NL17rXyPVZIy6ghk1kpbDUSpX0pHFwdhDTISSqYOJjLlPFoalnit9LEHiP0HjWeQOUeyZX5pIwqYfi-AbJkvlUYAhhZcAxx-h4Wr4kaTXj8EAze3ZqsLht0QVUjY49T3l9UT8cikak-52CsoeWJnnrPRYXLpjzGXi7jQBcKeZe87eki-N7JCL6wam9l68yI9GfimK6yq-oSfmGEhYxTA%3D&rank=7&testVersionOverride=Buttercup%2C39483.0.0%2C50206.169039.1%2C50028.0.0%2C50813.0.0%2C49817.165296.0%2C51642.169494.0%2C49460.169941.1%2C51690.163220.0%2C52131.163559.0%2C52527.0.0%2C52789.171419.1%2C53217.0.0%2C50988.158353.0%2C49261.155316.1&slots=&position=50&beaconIssued=&sort=RECOMMENDED&top_dp=425&top_cur=USD&userIntent=&selectedRoomType=200300246&selectedRatePlan=382770791&searchId=643a1768-5660-4ddb-92f3-14fefc6cceeb&pdpImageUrls=https%3A%2F%2Fimages.trvl-media.com%2Flodging%2F1000000%2F440000%2F436300%2F436250%2F267df641.jpg%3Fimpolicy%3Dresizecrop%26rw%3D598%26ra%3Dfit%2Chttps%3A%2F%2Fimages.trvl-media.com%2Flodging%2F1000000%2F440000%2F436300%2F436250%2Ff25efa7e.jpg%3Fimpolicy%3Dresizecrop%26rw%3D297%26ra%3Dfit%2Chttps%3A%2F%2Fimages.trvl-media.com%2Flodging%2F1000000%2F440000%2F436300%2F436250%2Fe16e9dac.jpg%3Fimpolicy%3Dresizecrop%26rw%3D297%26ra%3Dfit%2Chttps%3A%2F%2Fimages.trvl-media.com%2Flodging%2F1000000%2F440000%2F436300%2F436250%2F52835586.jpg%3Fimpolicy%3Dresizecrop%26rw%3D297%26ra%3Dfit&propertyName=St.+Ermins+Hotel%2C+Autograph+Collection",
    },

    {
      imgSrc: "/media/cadogan-gardens.jpg",
      name: "11 Cadogan Gardens",
      address: "11 Cadogan Gardens, London SW3 2RJ",
      phone: "+44 20 7730 7000",
      price: 495,
      bookingLink:
        "https://www.expedia.com/London-Hotels-11-Cadogan-Gardens-Hotel-Apartments.h2379978.Hotel-Information?chkin=2024-04-23&chkout=2024-04-27&x_pwa=1&rfrr=HSR&pwa_ts=1711139263572&referrerUrl=aHR0cHM6Ly93d3cuZXhwZWRpYS5jb20vSG90ZWwtU2VhcmNo&useRewards=false&rm1=a2&regionId=2114&destination=London%2C+England%2C+United+Kingdom&destType=MARKET&neighborhoodId=6195474&selected=537268&latLong=51.50746%2C-0.127673&sort=RECOMMENDED&top_dp=495&top_cur=USD&userIntent=&selectedRoomType=322358134&selectedRatePlan=393212161&searchId=643a1768-5660-4ddb-92f3-14fefc6cceeb&pdpImageUrls=https%3A%2F%2Fimages.trvl-media.com%2Flodging%2F3000000%2F2380000%2F2380000%2F2379978%2Fe677fa0f.jpg%3Fimpolicy%3Dresizecrop%26rw%3D598%26ra%3Dfit%2Chttps%3A%2F%2Fimages.trvl-media.com%2Flodging%2F3000000%2F2380000%2F2380000%2F2379978%2F48711e51.jpg%3Fimpolicy%3Dresizecrop%26rw%3D297%26ra%3Dfit%2Chttps%3A%2F%2Fimages.trvl-media.com%2Flodging%2F3000000%2F2380000%2F2380000%2F2379978%2Fabeb278e.jpg%3Fimpolicy%3Dresizecrop%26rw%3D297%26ra%3Dfit%2Chttps%3A%2F%2Fimages.trvl-media.com%2Flodging%2F3000000%2F2380000%2F2380000%2F2379978%2F9391a102.jpg%3Fimpolicy%3Dresizecrop%26rw%3D297%26ra%3Dfit&propertyName=11+Cadogan+Gardens%2C+The+Apartments+and+The+Chelsea+Townhouse+by+Iconic+Luxury+Hotels",
    },
  ];
  const hotelInfoColumn2 = [
    {
      imgSrc: "/media/mandrake-london.jpg",
      name: "The Mandrake London",
      address: "20-21 Newman St, London W1T 1PG",
      phone: "+44 20 3146 7770",
      price: 465,
      bookingLink:
        "https://www.expedia.com/London-Hotels-The-Mandrake.h19507846.Hotel-Information?chkin=2024-04-23&chkout=2024-04-27&x_pwa=1&rfrr=HSR&pwa_ts=1711142242409&referrerUrl=aHR0cHM6Ly93d3cuZXhwZWRpYS5jb20vSG90ZWwtU2VhcmNo&useRewards=false&rm1=a2&regionId=2114&destination=London%2C+England%2C+United+Kingdom&destType=CURRENT_LOCATION&neighborhoodId=6195474&selected=19507846&latLong=51.51758%2C-0.13543&sort=RECOMMENDED&top_dp=465&top_cur=USD&userIntent=&selectedRoomType=202115940&selectedRatePlan=210913807&searchId=09539836-7e88-4cd6-b379-de18e92f8958&pdpImageUrls=https%3A%2F%2Fimages.trvl-media.com%2Flodging%2F20000000%2F19510000%2F19507900%2F19507846%2F33476a46.jpg%3Fimpolicy%3Dresizecrop%26rw%3D598%26ra%3Dfit%2Chttps%3A%2F%2Fimages.trvl-media.com%2Flodging%2F20000000%2F19510000%2F19507900%2F19507846%2Fb5d79be8.jpg%3Fimpolicy%3Dresizecrop%26rw%3D297%26ra%3Dfit%2Chttps%3A%2F%2Fimages.trvl-media.com%2Flodging%2F20000000%2F19510000%2F19507900%2F19507846%2F8ff305ae.jpg%3Fimpolicy%3Dresizecrop%26rw%3D297%26ra%3Dfit%2Chttps%3A%2F%2Fimages.trvl-media.com%2Flodging%2F20000000%2F19510000%2F19507900%2F19507846%2Fe54bb6ff.jpg%3Fimpolicy%3Dresizecrop%26rw%3D297%26ra%3Dfit&propertyName=The+Mandrake",
    },

    {
      imgSrc: "/media/augill-castle.jpg",
      name: "Augill Castle",
      address: "Leacett Ln, Kirkby Stephen CA17 4DE, United Kingdom",
      phone: "+44 17683 41937",
      price: 209,
      bookingLink:
        "https://www.hotels.com/Hotel-Search?MDPDTL=HTL.6694609.20240427.20240430.DDF.35.CID.20668534461.AUDID.&adults=2&children=&destination=Kirkby%20Stephen%2C%20England%2C%20United%20Kingdom&endDate=2024-04-30&gclid=Cj0KCQjw2PSvBhDjARIsAKc2cgN29xOs5TlFFRHkMbVGvVRK0sNxK2yUxHK9NDO4Vx1H-392mfIiRJsaAi8dEALw_wcB&locale=en_US&mctc=10&mdpcid=HCOM-US.META.HPA.HOTEL-CORESEARCH-ROOMBUNDLE-desktop.HOTEL&mpf=746.75&mpg=USD&mpj=124.46&mpl=USD&mpm=24&mpn=218449318&mpo=EC&mpp=1&rateplanid=276180656&regionId=6048691&rffrid=sem.hcom.US.156.003.localuniversal.02.desktop-3.kwrd%3DGGMETA.6694609USen-20240427-N-ABW%3D35-camp%3D20668534461-aud%3D-N&selected=6694609&semdtl=&siteid=300000001&sort=RECOMMENDED&startDate=2024-04-27&theme=&useRewards=false&userIntent=",
    },

    {
      imgSrc: "/media/St-Pancras-Renaissance.jpg",
      name: "St. Pancras Renaissance Hotel",
      address: "Euston Rd., London NW1 2AR",
      phone: "+44 20 7841 3540",
      price: 405,
      bookingLink:
        "https://www.marriott.com/en-us/hotels/lonpr-st-pancras-renaissance-hotel-london/overview/",
    },

    {
      imgSrc: "/media/tree-house-hotel.jpg",
      name: "Tree House Hotel",
      address: "14-15 Langham Pl, London W1B 2QS",
      phone: "+44 20 7580 0111",
      price: 380,
      bookingLink: "https://www.treehousehotels.com/london",
    },

    {
      imgSrc: "/media/the- zetter.jpg",
      name: "The Zetter",
      address: "49-50 St John's Sq, London EC1V 4JJ",
      phone: "+44 20 7324 4444",
      price: 360,
      bookingLink: "https://thezetter.com/clerkenwell/",
    },
  ];
  const hotelInfoColumn3 = [
    {
      imgSrc: "/media//nHow-Hotel.jpg",
      name: "NHow Hotel",
      address: "2 Macclesfield Rd, London EC1V 8DG.",
      phone: "+44 20 3907 8100",
      price: 188,
      bookingLink:
        "https://www.expedia.com/London-Hotels-The-Mandrake.h19507846.Hotel-Information?chkin=2024-04-23&chkout=2024-04-27&x_pwa=1&rfrr=HSR&pwa_ts=1711142242409&referrerUrl=aHR0cHM6Ly93d3cuZXhwZWRpYS5jb20vSG90ZWwtU2VhcmNo&useRewards=false&rm1=a2&regionId=2114&destination=London%2C+England%2C+United+Kingdom&destType=CURRENT_LOCATION&neighborhoodId=6195474&selected=19507846&latLong=51.51758%2C-0.13543&sort=RECOMMENDED&top_dp=465&top_cur=USD&userIntent=&selectedRoomType=202115940&selectedRatePlan=210913807&searchId=09539836-7e88-4cd6-b379-de18e92f8958&pdpImageUrls=https%3A%2F%2Fimages.trvl-media.com%2Flodging%2F20000000%2F19510000%2F19507900%2F19507846%2F33476a46.jpg%3Fimpolicy%3Dresizecrop%26rw%3D598%26ra%3Dfit%2Chttps%3A%2F%2Fimages.trvl-media.com%2Flodging%2F20000000%2F19510000%2F19507900%2F19507846%2Fb5d79be8.jpg%3Fimpolicy%3Dresizecrop%26rw%3D297%26ra%3Dfit%2Chttps%3A%2F%2Fimages.trvl-media.com%2Flodging%2F20000000%2F19510000%2F19507900%2F19507846%2F8ff305ae.jpg%3Fimpolicy%3Dresizecrop%26rw%3D297%26ra%3Dfit%2Chttps%3A%2F%2Fimages.trvl-media.com%2Flodging%2F20000000%2F19510000%2F19507900%2F19507846%2Fe54bb6ff.jpg%3Fimpolicy%3Dresizecrop%26rw%3D297%26ra%3Dfit&propertyName=The+Mandrake",
    },

    {
      imgSrc: "/media/baileys-hotel.jpg",
      name: "The Bailey’s Hotel London",
      address: "140 Gloucester Rd, South Kensington, London SW7 4QH",
      phone: "+44 20 7373 6000",
      price: 207,
      bookingLink:
        "https://www.expedia.com/London-Hotels-The-Baileys-Hotel-London.h523223.Hotel-Information?chkin=2024-04-23&chkout=2024-04-27&x_pwa=1&rfrr=HSR&pwa_ts=1711167182224&referrerUrl=aHR0cHM6Ly93d3cuZXhwZWRpYS5jb20vSG90ZWwtU2VhcmNo&useRewards=false&rm1=a2&regionId=2114&destination=London%2C+England%2C+United+Kingdom&destType=MARKET&neighborhoodId=553248635976382947&selected=19507846&latLong=51.50746%2C-0.127673&price=0&price=322&sort=RECOMMENDED&top_dp=241&top_cur=USD&userIntent=&selectedRoomType=324071756&selectedRatePlan=393636604&searchId=97425f9c-0cbd-495d-85c9-72ae5f4d3b9b&pdpImageUrls=https%3A%2F%2Fimages.trvl-media.com%2Flodging%2F1000000%2F530000%2F523300%2F523223%2F1d32493c.jpg%3Fimpolicy%3Dresizecrop%26rw%3D598%26ra%3Dfit%2Chttps%3A%2F%2Fimages.trvl-media.com%2Flodging%2F1000000%2F530000%2F523300%2F523223%2F5fec617d.jpg%3Fimpolicy%3Dresizecrop%26rw%3D297%26ra%3Dfit%2Chttps%3A%2F%2Fimages.trvl-media.com%2Flodging%2F1000000%2F530000%2F523300%2F523223%2F53bd902c.jpg%3Fimpolicy%3Dresizecrop%26rw%3D297%26ra%3Dfit%2Chttps%3A%2F%2Fimages.trvl-media.com%2Flodging%2F1000000%2F530000%2F523300%2F523223%2F1912b5e5.jpg%3Fimpolicy%3Dresizecrop%26rw%3D297%26ra%3Dfit",
    },
  ];

  // Handle button click events for each column
  handleButtonClicks(column1Buttons, hotelInfoColumn1);
  handleButtonClicks(column2Buttons, hotelInfoColumn2);
  handleButtonClicks(column3Buttons, hotelInfoColumn3);

  // Set the first button in each column as active initially
  column1Buttons[0].classList.add("active");
  column2Buttons[0].classList.add("active");
  column3Buttons[0].classList.add("active");
});
