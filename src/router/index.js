import Vue from 'vue'
import Router from 'vue-router'
import Bootstrap from 'bootstrap'
import HelloWorld from '@/components/HelloWorld'
import FormView from '@/components/FormView'
import ToDoList from '@/components/ToDoList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/form',
      name: 'Form',
      component: FormView
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/todo',
      name: 'main',
      component: ToDoList
    }
  ]
})
