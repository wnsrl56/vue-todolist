<template>
    <div id="form">    
        <input v-model="message" placeholder="replace in here">
        <button type="button" class="btn btn-primary" @click="onClick()">Click Me</button>
        <button type="button" class="btn btn-primary" @click="saveLocalStorage()">SAVE</button>
        <p>{{ message }}</p>    
        
        <input type="checkbox" id="checkbox" v-model="checked">
        <label for="checkbox">{{ checked }}</label>
        
        <div>        
            <input type="checkbox" id="jack" value="jack" v-model="checkedNames">
            <label for="jack">Jack</label>
            <input type="checkbox" id="john" value="john" v-model="checkedNames">
            <label for="john">John</label>
            <input type="checkbox" id="mike" value="mike" v-model="checkedNames">
            <label for="mike">Mike</label>
            <div>
                <span>cheked names : {{ checkedNames }}</span>
            </div>
        </div>

        <input type="radio" id="one" value="One" v-model="picked">
        <label for="one">One</label>
        <br>
        <input type="radio" id="two" value="Two" v-model="picked">
        <label for="two">Two</label>
        <br>
        <span> picked: {{ picked }}</span>

        <select v-model="selected">
            <option disabled value="">Please select one</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
        </select>
        
        <span> selected: {{ selected }}</span>

        <select v-model="selectedList" multiple>        
            <option>A</option>
            <option>B</option>
            <option>C</option>
        </select>

        <span> selected: {{ selectedList }}</span>

        <select v-model="selectedFor">
            <option v-for="option in options" v-bind:value="option.value" :key="option.value.id">
                {{ option.text }}
            </option>
        </select>
        
        <span> selected: {{ selectedFor }}</span>

        
        <input type="radio" v-model="pickedValue" value="a">
        
        <input type="checkbox" v-model="toggle">
        
        <select v-model="selected">
            <option value="abc">ABC</option>
        </select>

        <input
            type="checkbox"
            v-model="toggle"
            v-bind:true-value="a"
            v-bind:false-value="b"
        >
        <span> toggle: {{toggle}} </span>

    </div>
</template>
<script>
export default{
    name: 'FormView',
    data: function () {
        return {
            message: '',
            checked: '',
            picked: '',
            selectedFor: '',
            selectedList: [],
            checkedNames: [],
            selected: 'A',
            toggle: true,
            pickedValue: '',
            options:  [
                { text: 'One', value: 'A' },
                { text: 'Two', value: 'B' },
                { text: 'Three', value: 'C' }
            ]
        }
    },
    computed: {

    },
    methods: {
        onClick: function(){
            alert(this.message);
        },
        saveLocalStorage: function(){
            localStorage.setItem('value', 1134);
            localStorage.setItem('new', 3254515);        
            localStorage.clear();            
        }

    }
}
</script>

<style>

</style>