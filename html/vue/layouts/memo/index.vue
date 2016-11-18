<template>
	<div>
		姓名：
		<el-input placeholder="请输入内容" v-model="item.name"></el-input><br> 手机号码：
		<el-input placeholder="请输入内容" v-model="item.number"></el-input><br>
		<el-button type="primary" @click="addNumer">添加</el-button><br> 列表：
		<el-table :data="queryList" style="width: 100%">
			<el-table-column prop="name" label="姓名">
			</el-table-column>
			<el-table-column prop="number" label="电话">
			</el-table-column>
		</el-table>
	</div>


</template>
<script>
    export default {
        data () {
            return {
                item:{name:'',number:''},
                querName:'',
                queryList:[]                
            }
        },
        methods () {
            return {
                addNumer () {
                    let name = this.item.name;
                    let number = this.item.number;
                    if(name&&number){
                        localStorage.setItem(name,number);
                        alert('添加成功！');
                        location.reload();
                    }else{
                        alert('请输入姓名和手机号码');
                    }
                },
                query () {
                    let dataLength = localStorage.length;
                    let dataList = [];
                    for(let i = 0;i < dataLength;i++){
                        var newItem = {name:localStorage.key(i),number:localStorage.getItem(localStorage.key(i))};
                        dataList.unshift(newItem);
                    }
                    this.queryList = dataList;
                }
            }
        },
        created () {
            this.query()
        }
        
    }
</script>