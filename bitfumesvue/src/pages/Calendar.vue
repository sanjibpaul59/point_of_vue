<template>
<div class="m-auto font-mono">

    <section class="text-center w-full py-4">
        <h1 class="text-3xl py-1 font-bold ">Interactive Calendar</h1>
    </section>

    <section class="w-full text-center pb-6 flex flex-wrap justify-between">
        <h3 class="text-lg bg-green-700 text-white rounded px-2">{{ currentMonthName }} </h3>
        <h3 class="text-lg bg-green-700 text-white rounded px-2">{{ currentYear }} </h3>
    </section>

    <section class="w-full flex flex-wrap" >
        <p v-for="day in daysInWeek" :key="day" class="text-center" style="width:14.28%">
            {{ day }}
        </p>
    </section>

    <section class="w-full flex flex-wrap">
             <p v-for="date in startDay()" :key="date" class="text-center" style="width:14.28%"></p>
             <p v-for="date in daysInMonth()" :key="date"
            class="text-center" style="width:14.28%"
            :class="todaysDate(date)">
            
            {{date}}
            </p>
    </section>

    <section class="w-full flex flex-wrap justify-between p-10">
        <button @click="prev" class="bg-purple-600 text-white rounded cursor-pointer px-2 hover:bg-purple-700 focus:outline-none focus:ring-2">Previous</button>
        <button @click="next" class="bg-purple-600 text-white rounded cursor-pointer px-2 hover:bg-purple-700 focus:outline-none focus:ring-2">Next</button>
    </section>

</div>



</template>

<script>
export default {

    data: ()=> ({
        daysInWeek: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
        currentYear : new Date().getFullYear(),
        currentMonth: new Date().getMonth(),
        // currentMonthName: new Date().toLocaleString('default',{month: 'long'}),  
    }),
    methods:{
        daysInMonth(){
            return new Date(this.currentYear,this.currentMonth + 1,0).getDate();
        },
        startDay(){
            return new Date(this.currentYear, this.currentMonth, 1).getDay();
        },
        prev(){
            if(this.currentMonth == 0){
                this.currentMonth = 11;
                this.currentYear--;
            }else{
                this.currentMonth--; 
            }
        },
        next(){
            if(this.currentMonth == 11){
                this.currentMonth = 0;
                this.currentYear++;
            }else{
                this.currentMonth++;
            }

        },
        todaysDate(date){
            const today = new Date(this.currentYear,this.currentMonth,date).toDateString();
            const calendarDate = new Date().toDateString();
            return today === calendarDate ? 'text-yellow-700':'';
        }

    },
    computed:{
        currentMonthName(){
            return new Date(this.currentYear, this.currentMonth).toLocaleString('default',{month:'long'});
        }

    }

}
</script>

<style>

</style>