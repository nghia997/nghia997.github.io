var table,iMonth,iYear;
function initCalendar() {
    var calendar = document.getElementById("calendar");
    calendar.innerHTML = " ";
    table = document.createElement("TABLE");
    var mselect = document.createElement("SELECT");
    var yselect = document.createElement("SELECT");
    var tr = document.createElement("TR");
    table.setAttribute("id","table");
    var arrMonth = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    var listDate = ["Sun","Mon","Tue","Web","Thu","Fri","Sat"];
    tr.setAttribute("id","nav");
    iMonth = 0;
    iYear = 1950;
    table.appendChild(tr);
      for(var i = 0 ; i < 6 ; i++){

        var th = document.createElement("TH");
        switch(i){
          case 0 :{
            th.setAttribute("id","back__Year-js");
            th.setAttribute("onclick","backYear()");
            break;
          }
          case 1: {
            th.setAttribute("id","back__Month-js");
            th.setAttribute("onclick","backMonth()");
            break;
          }
          case 2: {
            th.setAttribute("colspan","2");
            th = createSelectMonth(th,mselect,arrMonth);
            break;
          }
          case 3: {
            th = createSelectYear(th,yselect);
            break;
          }
          case 4: {
            th.setAttribute("id","forward__Month-js");
            th.setAttribute("onclick","forwardMonth()");
            break;
          }
          case 5: {
            th.setAttribute("id","forward__Year-js");
            th.setAttribute("onclick","forwardYear()");
            break;
          }
        }
        tr.appendChild(th);
      }
    var tr = document.createElement("TR");
    tr.setAttribute("id","head");
    table.appendChild(tr);
    for(var  j = 0 ; j < 7 ; j++ ){
        var th = document.createElement("TH");
        th.innerHTML = listDate[j];
        th.setAttribute("id","head"+j);
        tr.appendChild(th);
    }
    iMonth = mselect.options[mselect.selectedIndex].value;
    iYear = yselect.options[yselect.selectedIndex].value;
    createCalendar(table);
    calendar.appendChild(table);
    }
    function createCalendar(table) {
        var count = 1;
        var date = datesInMonth();
        var day = daysInWeek(count);
    for(var i = 0 ; i < 6 ; i++){
        var tr = document.createElement("TR");
        tr.setAttribute("id",i);
        table.appendChild(tr);
    for(var  j = 0 ; j < 7 ; j++ ){
          var td = document.createElement("TD");
          td.setAttribute("id",j);
          if(j == day && count <= date){
            td.innerHTML = count;
            td.setAttribute("class","day-js");
            td.onclick = function () {
              addDay(this.innerHTML);
              calendar.innerHTML = " ";
            }
            day = daysInWeek(++count);
          }
          else
            td.setAttribute("class","notday-js")
            tr.appendChild(td);
        }
      }  
      calendar.appendChild(table);
    }
    function datesInMonth() {
        return 32 - new Date(iYear, iMonth, 32).getDate();
    }
    function daysInWeek(idate) {
        return new Date(iYear, iMonth,idate).getDay();
    }
    function addDay(idate){
        var text = document.getElementById("value");
        text.value = idate.padStart(2, '0') + "/" + (parseInt(iMonth)+1+"").padStart(2,'0') + "/" + iYear;
    }
    function createSelectMonth(th,select,arrMonth){
        var nowMonth = new Date().getMonth;
        select.setAttribute("onchange","selectedMonth(event)")
        while(iMonth < 12){
        var month = document.createElement("OPTION");
        if(nowMonth == iMonth)
            month.setAttribute("selected","selected");
            month.setAttribute("value",iMonth);
            month.innerHTML = arrMonth[iMonth++];
            select.appendChild(month);
      }
        select.setAttribute("id","months")
        th.appendChild(select);
      return th;
    }
    function createSelectYear(th,select){
        var nowYear = new Date().getFullYear();
        select.setAttribute("onchange","selectedYear(event)")
        while(iYear < 2051){
        var year = document.createElement("OPTION");
        if(nowYear == iYear)
            year.setAttribute("selected","selected");
        year.innerHTML = iYear++;
        select.appendChild(year);
      }
        select.setAttribute("id","years");
        th.appendChild(select);
        return th;
    }
    function newCalendar (table){
        removeChildTable(table);
        createCalendar(table);
    }
    function removeChildTable(table) {
        for(var irow = 0 ; irow < 6 ; irow++)
            table.removeChild(table.childNodes[2]);
    }
    function selectedMonth(evt){
        iMonth = evt.target.value;
        newCalendar(table);
    }
    function selectedYear(evt) {
        iYear = evt.target.value
        newCalendar(table);
    }
    function changeYear(){
        var  select = document.getElementById("years");
        select.selectedIndex = iYear - 1950;
    }
    function changeMonth() {
        var  select = document.getElementById("months");
        if(iMonth > 11) {
            iMonth -= 12;
            ++iYear
            changeYear();
        }
        if(iMonth < 0) {
            iMonth = 11;
            --iYear;
            changeYear();
        }
        select.selectedIndex = iMonth;
    }
    function backYear() {
        iYear--;
        changeYear();
        newCalendar(table);
    }
    function backMonth() {
        iMonth--;
        changeMonth();
        newCalendar(table);
    }
    function forwardMonth() {
        iMonth++;
        changeMonth();
        newCalendar(table);
    }
    function forwardYear() {
        iYear++;
        changeYear();
        newCalendar(table);
    }