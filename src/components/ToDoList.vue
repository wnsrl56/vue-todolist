<template>
  <div class="container" width="70%">
    <div class="alert alert-success" role="alert">
      <h2 class="alert-heading">To Do List</h2>
      <span>Get Your Goal!</span>
      <hr>
    </div>
    <div class="container" id="form-view">
      <form>
        <div class="form-row align-items-center">
          <div class="col-auto">
            <label class="sr-only" for="inlineFormInput">Name</label>
            <input type="text" class="form-control mb-2 mb-sm-0" id="inlineFormInput" placeholder="Jane Doe">
          </div>
          <div class="col-auto">
            <label class="sr-only" for="inlineFormInputGroup">Username</label>
            <div class="input-group mb-2 mb-sm-0">
              <div class="input-group-addon">@</div>
              <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Username">
            </div>
          </div>
          <div class="col-auto">
            <div class="form-check mb-2 mb-sm-0">
              <label class="form-check-label">
                <input class="form-check-input" type="checkbox"> Remember me
              </label>
            </div>
          </div>
          <div class="col-auto">
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </div>
      </form>

      <hr>
    </div>
    <div class="container" id="list-view">
      <div class="row">
        <div class="col-8" id="todo-view">
          <div id="todo-content">
            <div class="alert alert-success" role="alert">
              To do List
            </div>
            <ul class="list-group">
               <li class="list-group-item active">Cras justo odio</li>
              <v-for>
              <!-- content list using component -->
              </v-for>
            </ul>        
          </div>        
          <div class="btn-box" id="todo-control">
            <button type="button" class="btn btn-danger" @click="removeAll()">Remove All</button>
            <button type="button" class="btn btn-success" @click="moveAll()">Move All</button>
          </div>
        </div>      
        <div class="col-4" id="done-view">
          <div id="done-content">
            <div class="alert alert-info" role="alert">
              Done List
            </div>
            <ul class="list-group">
              <li class="list-group-item active">Cras justo odio</li>
              <v-for>
              <!-- content list using component -->
              </v-for>
            </ul>
          </div>        
          <div class="btn-box" id="done-control">
            <button type="button" class="btn btn-danger" @click="removeAll()">Remove All</button>
            <button type="button" class="btn btn-success" @click="moveAll()">Move All</button>
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
      msg: 'todo'
    }
  }
}
</script>

<style>
.btn-box{
  padding: 10px;
}
</style>
