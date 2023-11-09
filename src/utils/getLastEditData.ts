import { ref } from "vue";
import * as lasteditService from "../services/lasteditService";
import { useLoading } from "vue-loading-overlay";
import moment from "moment";

export const getLastEditData = () => {
  const lastEditData = ref(
    [] as {
      LASTUPDATEDATE: string;
      STORENUM: string;
      USERID: string;
      CONTACTNAME: string;
      AREALIST: string;
      CHANGETYPE: string;
      CHANGEDDATA: string;
      CHANGEUSERID: string;
    }[]
  );
  const $loading = useLoading({
    color: "green",
    loader: "bars",
  });
  const loadLastEdit = () => {
    const loader = $loading.show();
    lasteditService
      .loadLastEdit()
      .then(
        (response) => {
          lastEditData.value = response.data;
          lastEditData.value = lastEditData.value.map((item) => {
            const lastUpdateDate = moment(item.LASTUPDATEDATE);
            const hoursToAdd = lastUpdateDate.isDST() ? 4 : 5;

            return {
              ...item,
              LASTUPDATEDATE: lastUpdateDate
                .add(hoursToAdd, "hours")
                .format("MM/DD/YYYY h:mmA"),
            };
          });
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
    loadLastEdit,
    $loading,
    lastEditData,
  };
};
