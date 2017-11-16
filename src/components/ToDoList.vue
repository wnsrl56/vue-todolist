<template>
  <div class="container" width="70%">
    <div class="alert alert-success" role="alert">
      <h2 class="alert-heading">To Do List</h2>
      <span>Get Your Goal!</span>
      <hr>
    </div>
    <div class="container" id="form-view">
      <div class="row">
        <div class="col-10">
          <input type="text" class="form-control" placeholder="해야할 일을 적어주세요." v-model="inputString">
        </div>
        <div class="col-2">
          <button class="btn btn-secondary" type="button" @click="addList()">Add List</button>
        </div>
      </div>
      <hr>
    </div>
    <div class="container" id="list-view">
      <div class="row">
        <div class="col-8" id="todo-view">
          <div id="todo-content">
            <div class="alert alert-success" role="alert">
              To do List
            </div>
            <div class="list-group">            
              <template v-for="item in todoList">                
                     <div class="list-group-item d-flex flex-nowrap" :key="item.id">                                     
                      <div class="col-2 align-self-baseline">
                        <input type="checkbox"  :key="item.id">
                      </div>
                      <div class="col-8 align-self-baseline">                      
                        <p>{{ item }}</p> 
                      </div>
                      <div class="col- 1 btn-group-sm align-self-baseline" role="group">
                        <button type="button" class="btn btn-primary btn-group-sm" style="display: block" @click="toMove()">move</button>     
                      </div>                          
                      <div class="col- 1 btn-group-sm align-self-baseline" role="group" style="margin-left:5px">
                        <button type="button" class="btn btn-danger btn-group-sm" style="display: block" @click="toRemove()">remove</button>     
                      </div>                                          
                    </div>                                                            
              </template>
            </div>        
          </div>        
          <div class="btn-box" id="todo-control">            
            <button type="button" class="btn btn-success" @click="moveAll()">Move All</button>
            <button type="button" class="btn btn-danger" @click="removeAll()">Remove All</button>
          </div>
        </div>      
        <div class="col-4" id="done-view">
          <div id="done-content">
            <div class="alert alert-info" role="alert">
              Done List
            </div>
            <div class="list-group">
                <template v-for="item in doneList">                                  
                    <div class="list-group-item d-flex flex-nowrap" :key="item.id">                                     
                      <div class="col-2 align-self-baseline">
                       <input type="checkbox"  :key="item.id">
                      </div>
                      <div class="col-5 align-self-baseline">                      
                      <p>{{ item }}</p> 
                      </div>
                      <div class="col- 2 btn-group-sm align-self-baseline" role="group">
                        <button type="button" class="btn btn-primary btn-group-sm" style="display: block" @click="toMove()"> revert </button>     
                      </div>                                            
                    </div>                                                               
                </template>
            </div>
          </div>        
          <div class="btn-box" id="done-control">            
            <button type="button" class="btn btn-success" @click="moveAll()">Move All</button>
            <button type="button" class="btn btn-danger" @click="removeAll()">Remove All</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: function () {
    return {    
      todoList: {},
      doneList: {
       '0' : 'TEST',
       '1' : 'TEST2' 
      },
      inputString: '',
      checkedTodoList: []
    }
  },
  methods: {
    addList: function () {
      let ix, ixLen;
      let keys = Object.keys(this.todoList);      
      this.$set(this.todoList, keys.length,this.inputString);

      for(ix = 0, ixLen = keys.length; ix < ixLen; ix++){
        localStorage.setItem(keys[ix],this.todoList[keys[ix]]);
      }
      
      localStorage.setItem('length',this.todoList.length);
    },
    toMove: function () {
      
    },
    toRemove: function () {
      console.log(this.checkedTodoList);
    }
  },
  mounted: function () {
    let obj= {};
    let temp;
    let ix, ixLen;    
    ixLen = localStorage['length'];
    for(ix = 0; ix < ixLen; ix++){
       obj[ix] = localStorage.getItem(ix) ? localStorage.getItem(ix) : '';      
    }
    this.todoList = Object.assign({}, this.todoList, obj);
  }
  
}
</script>

<style>
.btn-box{
  padding: 10px;
}
</style>
