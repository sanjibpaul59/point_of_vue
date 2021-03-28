<template>
  <section class="w-full flex">
    <div class="m-auto">
      <h1 class="text-2xl text-center font-bold">Calculator</h1>
      <div class="mt-10 mb-3 h-18">
        <!-- <p
          class="w-48 h-18 overflow-auto text-right text-3xl font-mono"
          style="direction: relative"
        >
          {{ currentNum }}
        </p> -->
        <p
          class="w-48 h-18 overflow-auto text-right text-3xl font-mono"
          style="direction: relative"
        >
          {{ calculation }}
        </p>
        <p
          v-if="result"
          class="w-48 h-18 overflow-auto text-right text-3xl font-mono"
          style="direction: relative"
        >
          = {{ result }}
        </p>
      </div>
      <div class="grid grid-cols-4 gap-2 font-mono">
        <button
          @click="btnPressed('ac')"
          class="p-2 w-10 h-10 border rounded shadow"
        >
          AC
        </button>
        <button
          @click="btnPressed('backspace')"
          class="p-2 w-10 h-10 border rounded shadow"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="{2}"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </button>
        <button
          @click="btnPressed('%')"
          class="p-2 w-10 h-10 border rounded shadow"
        >
          %
        </button>
        <button
          @click="btnPressed('/')"
          class="p-2 w-10 h-10 border rounded shadow"
        >
          &divide;
        </button>
        <button
          @click="btnPressed('7')"
          class="p-2 w-10 h-10 border rounded shadow"
        >
          7
        </button>
        <button
          @click="btnPressed('8')"
          class="p-2 w-10 h-10 border rounded shadow"
        >
          8
        </button>
        <button
          @click="btnPressed('9')"
          class="p-2 w-10 h-10 border rounded shadow"
        >
          9
        </button>
        <button
          @click="btnPressed('*')"
          class="p-2 w-10 h-10 border rounded shadow"
        >
          &times;
        </button>
        <button
          @click="btnPressed('4')"
          class="p-2 w-10 h-10 border rounded shadow"
        >
          4
        </button>
        <button
          @click="btnPressed('5')"
          class="p-2 w-10 h-10 border rounded shadow"
        >
          5
        </button>
        <button
          @click="btnPressed('6')"
          class="p-2 w-10 h-10 border rounded shadow"
        >
          6
        </button>
        <button
          @click="btnPressed('-')"
          class="p-2 w-10 h-10 border rounded shadow"
        >
          &minus;
        </button>
        <button
          @click="btnPressed('1')"
          class="p-2 w-10 h-10 border rounded shadow"
        >
          1
        </button>
        <button
          @click="btnPressed('2')"
          class="p-2 w-10 h-10 border rounded shadow"
        >
          2
        </button>
        <button
          @click="btnPressed('3')"
          class="p-2 w-10 h-10 border rounded shadow"
        >
          3
        </button>
        <button
          @click="btnPressed('+')"
          class="p-2 w-10 h-10 border rounded shadow"
        >
          &plus;
        </button>
        <button
          @click="btnPressed('sqrt')"
          class="p-2 w-10 h-10 border rounded shadow"
        >
          &Sqrt;
        </button>
        <button
          @click="btnPressed('.')"
          class="p-2 w-10 h-10 border rounded shadow"
        >
          .
        </button>
        <button
          @click="btnPressed('0')"
          class="p-2 w-10 h-10 border rounded shadow"
        >
          0
        </button>
        <button
          @click="btnPressed('=')"
          class="p-2 w-10 h-10 border rounded shadow"
        >
          =
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import useWindowEvent from '../utilities/composition/useWindowEvent'

export default {
  setup() {
    const calculation = ref("");
    const result = ref("");

    const currentNum = ref("");
    const prevNum = ref("");
    const operand = ref("");

    const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const operations = ["*", "/", "-", "+", "%"];
    const subOps = ["ac", "backspace", "sqrt"];

    function btnPressed(value) {
      if (value === "=" || value === "Enter") {
        calculate();
      } else if (operations.includes(value)) {
        operate(value);
      } else if (subOps.includes(value)) {
        subOperation(value);
      } else if (numbers.includes(value)) {
        appendNumber(value);
      }
    }
    function appendNumber(value) {
      if(!currentNum.value){
        currentNum.value = currentNum.value + value;
      }
      calculation.value = calculation.value + value;
    }
    function calculate() {
      calculation.value = prevNum.value + operand.value + currentNum.value;
      if (operand.value === "+") {
        add();
      } else if (operand.value === "-") {
        subtract();
      } else if (operand.value === "*") {
        multiply();
      } else if (operand.value === "/") {
        divide();
      } else if (operand.value === "%") {
        percent();
      }
    }
    function operate(value) {
      prevNum.value = currentNum.value;
      currentNum.value = "";
      operand.value = value;
      calculate();
      calculation.value = prevNum.value + operand.value;
    }

    const add = ()=> result.value = Number(prevNum.value) + Number(currentNum.value);
                     currentNum.value = result.value;
    const subtract = ()=> result.value = prevNum.value - currentNum.value;
    const multiply = ()=> result.value = prevNum.value * currentNum.value;
    const divide = ()=> result.value = prevNum.value / currentNum.value;
    const percent = ()=> result.value = prevNum.value * (currentNum.value / 100);
    
    function subOperation(value) {
      if (value === "ac") {
        prevNum.value = "";
        currentNum.value = "";
        calculation.value = "";
        result.value = "";
      } else if (value === "backspace") {
        currentNum.value = currentNum.value.slice(0, -1);
        calculation.value = calculation.value.slice(0, -1);
        result.value = "";
      }
    }

    const handleKeyDown = (e)=> btnPressed(e.key);
    useWindowEvent('keydown',handleKeyDown);
    return {
      calculation,
      currentNum,
      prevNum,
      operand,
      btnPressed,
      appendNumber,
      calculate,
      operate,
      subOperation,
      operations,
      result,
    };
  },
};
</script>

<style>
</style>