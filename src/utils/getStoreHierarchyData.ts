import { ref } from "vue";
import * as lasteditService from "../services/lasteditService";
import { useLoading } from "vue-loading-overlay";

export const getStoreHierarchyData = () => {
  const brands = ref<any>([]);
  const regions = ref<any>([]);
  const districts = ref<any>([]);
  const stores = ref<any>([]);
  const $loading = useLoading({
    color: "green",
    loader: "bars",
  });

  const loadBrands = () => {
    const loader = $loading.show();
    lasteditService
      .loadBrands()
      .then(
        (response) => {
          debugger;
          brands.value = response.data;
          loader.hide();
        },
        (reject) => {
          console.log(reject);
          loader.hide();
        }
      )
      .catch(() => {
        loader.hide();
      });
  };

  const loadRegions = () => {
    const loader = $loading.show();
    lasteditService
      .loadRegions()
      .then(
        (response) => {
          regions.value = response.data;
          loader.hide();
        },
        (reject) => {
          console.log(reject);
          loader.hide();
        }
      )
      .catch(() => {
        loader.hide();
      });
  };

  const loadDistricts = () => {
    const loader = $loading.show();
    lasteditService
      .loadDistricts()
      .then(
        (response) => {
          districts.value = response.data;
          loader.hide();
        },
        (reject) => {
          console.log(reject);
          loader.hide();
        }
      )
      .catch(() => {
        loader.hide();
      });
  };

  const loadStores = () => {
    const loader = $loading.show();
    lasteditService
      .loadStores()
      .then(
        (response) => {
          stores.value = response.data;
          loader.hide();
        },
        (reject) => {
          console.log(reject);
          loader.hide();
        }
      )
      .catch(() => {
        loader.hide();
      });
  };

  return {
    loadBrands,
    loadRegions,
    loadDistricts,
    loadStores,
    $loading,
    brands,
    regions,
    districts,
    stores,
  };
};
