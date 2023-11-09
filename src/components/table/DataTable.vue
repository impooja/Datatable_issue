<script setup lang="ts">
import DataTable from 'datatables.net-vue3';
import DataTablesLib from 'datatables.net-bs5';
import { ref,onMounted} from 'vue'
DataTable.use(DataTablesLib);

const props =  defineProps(['columns','data','id']);
const emit = defineEmits(["handleEdit", "handleDelete"]);

    

const tableRef=ref();
// onMounted(() => {
//   console.log('Component mounted');
//   const dataTable = tableRef.value?.dt;
//   console.log('DataTable:', dataTable);
//   // dt = table.value.dt;
//   if (dataTable) {
//     dataTable.on('click','tbody tr td svg', function ( e:any, settings:any, json :any)  {
//     let data=tableRef.value.dt.row(e.currentTarget.id.split('_')[1]).data();
//     if(e.currentTarget.id.split('_')[0]=="edit"){
//       emit("handleEdit",data);
//     }
//     else{
//       emit("handleDelete", data);
//     }

//   });
//   }
// })

</script>

<template>

    <DataTable
      :columns="props.columns"
      :data="props.data"
      :id="props.id"
      class="table table-hover"
      width="100%"
      ref="tableRef"
    >
      <thead>
        <tr>
           <slot></slot>
        </tr>
      </thead>
    </DataTable>

</template>

<style>
@import 'bootstrap';
@import 'datatables.net-bs5';
</style>
