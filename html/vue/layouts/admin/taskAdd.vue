<template>
<div>
  <el-form :inline="true" :model="createForm" class="createForm-panel block">
    <el-form-item>
      <el-input v-model="createForm.dbName"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button @click="createDb">创建或打开数据库</el-button>
      <el-button @click="delDb">删除数据库</el-button>
      <el-button v-if = "db" v-on:click="addData">添加数据</el-button>
      <el-button v-if = "db" v-on:click="getData">获取数据</el-button>
    </el-form-item>
  </el-form>
  <div class="block">
    <el-form :model="createTask" label-width = "80px">
      <el-form-item label="任务名:">
        <el-input v-model="createTask.name"></el-input>
      </el-form-item>
      <el-form-item label="任务描述:">
        <el-input type="textarea" v-model="createTask.description"></el-input>
      </el-form-item>      
    </el-form>
  </div>
  <div class="block">
    <el-table
      :data = "tasks"
    >
      <el-table-column
        type = 'index'
        label = '序号'
        width = "80"
      ></el-table-column>
      <el-table-column
        prop = 'id'
        label = 'id'
        width = '180'
        sortable
      ></el-table-column>
      <el-table-column
        prop = 'name'
        label = '任务名'
      ></el-table-column>
      <el-table-column
        prop = 'description'
        label = '任务描述'
      ></el-table-column>      
    </el-table>
  </div>
</div>
</template>
<script>
import {getRandom} from '../../utils/common.js'
export default {
  data () {
    return {
      createForm: {
        dbName: "taskDB"
      },
      createTask: {
        name: '',
        description: ''
      },
      db: null,
      tasks: [],
      data: null
    }
  },
  methods: {
    createDb (cb) {
      let _self = this
      var request = indexedDB.open(_self.createForm.dbName, 1);
      request.onupgradeneeded = function (e) {
        let db = e.target.result;
        if(!db.objectStoreNames.contains('tasks')){
            db.createObjectStore('tasks',{keyPath:"id"});
        }
        console.info('a')
      };
      request.onsuccess = function(e) {
        _self.db = e.target.result;
        if(cb instanceof Function) {
          cb()
        }
      }
    },
    delDb () {
      let deleteDbRequest = indexedDB.deleteDatabase(this.createForm.dbName);
      deleteDbRequest.onsuccess = function (event) {
          alert("数据库删除成功")
      };
      deleteDbRequest.onerror = function (e) {
          alert("数据库删除错误")
      };      
    },
    addData (cb) {
      class task {
        constructor () {
          this.id = parseInt((new Date()).getTime() + getRandom())
          this.name = "任务"
        }
      }
      this.createTask.id = parseInt((new Date()).getTime() + getRandom())
      let _self = this
      let transaction = this.db.transaction('tasks', 'readwrite')
      let store = transaction.objectStore('tasks')
      store.add(this.createTask).onsuccess = () => {
        _self.getData()
      }
    },
    getData () {
      let tr = this.db.transaction('tasks', 'readwrite')
      let store = tr.objectStore("tasks")
      let _self = this
      let arr = []
      store.openCursor().onsuccess = function(e){
          var cursor=e.target.result;
          if(cursor){
              let task=cursor.value;
              arr.push(task)
              cursor.continue();
          }
          else{
            _self.tasks = arr
          }
      }
    }
  },
  created () {
    this.createDb (this.getData);
  }
}
</script>
<style>
  .block {margin:20px;padding:15px;border-radius:15px; border:solid 1px #ccc;}
  .createForm-panel .el-form-item{margin-bottom: 0}
</style>