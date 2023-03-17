<template>
  <h2>Android App Project</h2>
  <a
    href="https://github.com/benttruong/JavaSummer2022/tree/main/phonebill-android/app/src/main/java/edu/pdx/cs410j/betruong"
  >
    Go to the code:
    <span class="material-symbols-outlined"> data_object </span>
  </a>
  <p>
    This application is to help you manage phone bills from customers given their name. The Main
    screen will display any available phone bill with the customer's name and the number of phone
    call in the bill. Tapping on each phone bill will briefly display the detail of that phone bill
    including the phone calls contained in it. From Main screen, you can navigate to add a phone
    call, which will also automatically add a phone bill for that customer if the phone bill does
    not exist yet. Phone numbers will be in the format of: ###-###-#### (eg. 503-111-2222) Any time
    field will be in the format of: mm/dd/yyyy hh:mm am/pm (eg. 11/12/2022 10:30 am or 8/9/2022 9:05
    pm) The Search will help you search for all the phone calls from any particular existing
    customer that has the begin time between a certain range.
  </p>
  <img src="../assets/images/android-project.png" />
</template>

<style scoped>
img {
  width: 100%;
}

a:hover {
    text-decoration-line: underline;
}
</style>
