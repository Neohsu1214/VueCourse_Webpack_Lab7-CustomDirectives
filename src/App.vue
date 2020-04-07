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
            <hr>
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Custom Directives</h1>
                <!-- 以下會說明如何建立『客製化』的 v-directive -->
                <!-- 此處在提醒一下，v-提示="" 裡面的東西都是 javascript，所以若只是要顯示string，記得要加上'' -->
                <p v-highlight="'red'">Ｃolor this with v-highlight!</p>

                <!-- 以下建立『客製化』+『參數化』的 v-directive，此例的客製化參數為 background -->
                <p v-highlight2:background="'red'">Ｃolor this with v-highlight2 and argument!</p>
                <p v-highlight2="'red'">Ｃolor this with v-highlight2!</p>

                <!-- 以下建立『客製化』+『參數化』+『有修飾詞』的 v-directive，此例的客製化參數為 background，修飾詞為 delayed -->
                <p v-highlight3:background.delayed="'red'">Ｃolor this with v-highlight3 and argument and "delayed" modifiers!</p>
                
                <!-- 以下建立『local專用』的 v-directive -->
                <p v-local-highlight4="'red'">Ｃolor this with v-local-highlight4!</p>
                
                <!-- 以下建立『local專用』的 v-directive，並實作傳入多個修飾詞 與多個值(透過javascript object)-->
                <p v-local-highlight5:background.delayed.blink="{mainColor: 'red', secondColor: 'green', interval: 500}">Ｃolor this with v-highlight4 and argument and "delayed/blink" modifiers!</p>
                
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        // 以下說明如何建立『local專用』的 v-directives
        directives: {
            'local-highlight4': {
                bind: function(el, binding, vnode) { 
                    el.style.backgroundColor = binding.value;
                }
            },
            'local-highlight5': {
                bind: function(el, binding, vnode) { 
                    // 以下示範有多個修飾詞時的處理
                    var delay = 0;
                    if (binding.modifiers['delayed']) { // modifiers是個array!
                        delay = 3000;
                    }
                    if (binding.modifiers['blink']) {
                        // 如果有 blink 修飾詞的話，就給他一閃一閃吧！
                        let mainColor = binding.value.mainColor;
                        let secondColor = binding.value.secondColor;
                        let currentColor = mainColor;
                        setTimeout(function() {
                            // 每秒做一次以下事情
                            setInterval(function() {
                                currentColor == secondColor ? currentColor = mainColor : currentColor = secondColor;
                                // 以下邏輯是說：若有指定是改變background的顏色，則設定 backgroundColor=binding.value，否則就改變字體顏色
                                if (binding.arg == 'background') {
                                    el.style.backgroundColor = currentColor;
                                } else {
                                    el.style.color = currentColor;
                                }
                            }, binding.value.interval);
                        }, delay);
                    } else {
                        setTimeout(function() {
                            // 以下邏輯是說：若有指定是改變background的顏色，則設定 backgroundColor=binding.value.mainColor，否則就改變字體顏色
                            if (binding.arg == 'background') {
                                el.style.backgroundColor = binding.value.mainColor;
                            } else {
                                el.style.color = binding.value.mainColor;
                            }
                        }, delay);
                    }
                    
                    
                }
            }
        }
    }
</script>

<style>

</style>
