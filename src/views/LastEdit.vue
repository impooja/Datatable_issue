<template>
  <div class="container-fluid content">
    <div class="row">
      <!-- Dropdowns in a single row -->
      <div class="col-md-3">
        <div class="mb-2">
          <label for="BrandsSelect" class="form-label"><b>Brands:</b></label>
          <select v-model="filters.BRANDCODE" @change="handleBrandChange()" class="form-select" id="BrandsSelect">
            <option value="">All Brands</option>
            <option v-for="brand in brands" :value="brand.BRANDCODE">{{ brand.BRANDNAME }}</option>
          </select>
        </div>
      </div>

      <div class="col-md-3">
        <div class="mb-2">
          <label for="regionSelect" class="form-label"><b>Region:</b></label>
          <select v-model="filters.REGIONNUM" @change="handleRegionChange()" class="form-select" id="regionSelect">
            <option value="">All Regions</option>
            <option v-for="reg in regions" :value="reg.REGIONNUM">{{ reg.REGIONNAME }}</option>
          </select>
        </div>
      </div>

      <div class="col-md-3">
        <div class="mb-2">
          <label for="districtSelect" class="form-label"><b>District:</b></label>
          <select v-model="filters.DISTRICTNUM" @change="handleDistrictChange()" class="form-select" id="districtSelect">
            <option value="">All Districts</option>
            <option v-for="dis in districts" :value="dis.DISTRICTNUM">{{ dis.DISTRICTNAME }}</option>
          </select>
        </div>
      </div>

      <div class="col-md-3">
        <div class="mb-2">
          <label for="storeSelect" class="form-label"><b>Store:</b></label>
          <select v-model="filters.STORENUM" @change="loadLastEdit()" class="form-select" id="storeSelect">
            <option value="">All Stores</option>
            <option v-for="st in stores" :value="st.STORENUM">{{ st.STORENUM }}</option>
          </select>
        </div>
      </div>
    </div>

    <!-- Dates in the next row -->
    <div class="row">
      <div class="col-md-4">
        <div class="mb-2">
          <label for="startDateInput" class="form-label"><b>Start Date:</b></label>
          <input type="date" v-model="filters.STARTDATE" @change="loadLastEdit()" class="form-control"
            id="startDateInput">
        </div>
      </div>

      <div class="col-md-4">
        <div class="mb-2">
          <label for="endDateInput" class="form-label"><b>End Date:</b></label>
          <input type="date" v-model="filters.ENDDATE" @change="loadLastEdit()" class="form-control" id="endDateInput">
        </div>
      </div>

      <div class="col-md-4">
        <div class="mb-2 mt-4">

          <button type="button" @click="resetFilters" class="btn-alarm-secondary me-5">
            <i class="fa fa-times"></i> Clear
          </button>
          <button type="button" class="btn-alarm" style="float: right;" @click="print"><i class="fa fa-print"></i>
            Print</button>
        </div>
      </div>

    </div>

    <div>
      <DataTable :columns="columns" :data="lastEditData" id="routingrules" class="routing routing-hover" width="100%">

        <th>#</th>
        <th>Updated</th>
        <th>Store</th>
        <th>User Id</th>
        <th>Name</th>
        <th>Areas</th>
        <th>Type</th>
        <th>Edit Area</th>
        <th>Edited By</th>

      </DataTable>
    </div>
  </div>
</template>



<script setup lang="ts">
import { ref, onMounted } from 'vue';
import DataTable from '@/components/table/DataTable.vue';
import { getStoreHierarchyData } from '../utils/getStoreHierarchyData';
import { getLastEditData } from '../utils/getLastEditData';
const { lastEditData, loadLastEdit } = getLastEditData();
const { brands, regions, stores, districts, loadBrands, loadRegions, loadDistricts, loadStores } = getStoreHierarchyData();

const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};
const filters = ref({
  BRANDCODE: '' as string,
  REGIONNUM: '' as string,
  DISTRICTNUM: '' as string,
  STORENUM: '' as string,
  STARTDATE: formatDate(new Date(new Date().setDate(new Date().getDate() - 1))),
  ENDDATE: formatDate(new Date()),
});


onMounted(() => {
  loadLastEdit();
  loadBrands();
});

const columns = [
  {
    data: null, className: 'word-break', width: "2%",
    render: function (row: any, type: any, full: any, meta: any) {
      return meta.row + 1;
    }
  },
  { data: 'LASTUPDATEDATE', className: 'word-break', width: "15%" },
  { data: 'STORENUM', className: 'word-break', width: "10%" },
  { data: 'USERID', className: 'word-break', width: "8%" },
  { data: 'CONTACTNAME', className: 'word-break', width: "10%" },
  { data: 'AREALIST', className: 'word-break', width: "15%" },
  { data: 'CHANGETYPE', className: 'word-break', width: "10%" },
  { data: 'CHANGEDDATA', className: 'word-break', width: "15%" },
  { data: 'CHANGEUSERID', className: 'word-break', width: "10%" },

];

const handleBrandChange = () => {
  loadLastEdit();
  loadRegions();
};
const handleRegionChange = () => {
  loadLastEdit();
  loadDistricts();
};

const handleDistrictChange = () => {
  loadLastEdit();
  loadStores();
};
const resetFilters = () => {
  filters.value = { STARTDATE: '', ENDDATE: '', BRANDCODE: '', REGIONNUM: '', DISTRICTNUM: '', STORENUM: '' };
  loadLastEdit();
};

const print = () => {
  window.print();
};





</script>

