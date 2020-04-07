<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Build-in Directives</h1>
                <!-- 以下簡單回顧一些 Vue 的“提示”語法 ex: v-if, v-bind, v-for, v-text 等 -->
                <!-- 此處在提醒一下，v-提示="" 裡面的東西都是 javascript，所以若只是要顯示string，記得要加上'' -->
                <p v-text="'Some Text'"></p>
                <p v-html="'<strong>Some strong text</strong>'"></p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style>

</style>
