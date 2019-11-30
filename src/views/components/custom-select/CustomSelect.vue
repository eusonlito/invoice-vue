<template>
    <div v-bind="null" class="vs-component vs-con-input-label vs-input vs-input-primary vs-select-custom">
        <label v-if="label" class="vs-select--label" ref="inputSelectLabel">{{ label }}</label>

        <div class="vs-con-input">
            <select v-bind="$attrs" v-model="selected" class="vs-inputx vs-input--input normal hasValue" @focus="focus" @blur="blur">
                <option v-if="empty" value="" :selected="!selected">{{ empty }}</option>
                <option :key="index" :value="item[optionValue]" v-for="(item, index) in options" :selected="item[optionValue] === selected">{{ item[optionTitle] }}</option>
            </select>
        </div>
    </div>
</template>

<script src="./CustomSelect.js"></script>
<style src="./CustomSelect.scss" lang="scss"></style>