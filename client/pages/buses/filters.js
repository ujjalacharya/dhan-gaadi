import { Card, Checkbox } from "antd";
import { getAllTravels } from "../../actions/travel";
import { useEffect, useState } from "react";
import { searchBusByFilter } from "../../actions/location";

const Filters = ({ info, setBuses, setLoading }) => {
  const [travels, setTravels] = useState([]);
  const [checkedTravels, setCheckedTravels] = useState([]);
  const [checkedType, setCheckedType] = useState([]);

  useEffect(() => {
    fetchAllTravels();
  }, []);

  const onChangeCheckbox = e => {
    setLoading(true);
    let list = [...checkedTravels];
    let listType = [...checkedType];
    if (e.target.checked) {
      list.push(e.target.name);
    } else {
      list = list.filter(event => event != e.target.name);
    }
    setCheckedTravels(list);

    if (listType.length <= 0) {
      listType = ["AC", "Delux", "Suspense AC", "Suspense Delux", "Normal"];
    } 

    // Logic for getting all bus if all checkbox are unchecked
    const newArr =[];
    if (list.length <= 0) {
      travels.map((tr, i) => {
        newArr[i] = tr._id;
      });
      fetchCheckedTravels(newArr, listType);
    } else {
      fetchCheckedTravels(list, listType);
    }
  };

  const onChangeType = e => {
    setLoading(true);
    let list = [...checkedType];
    let travelsList = [...checkedTravels];

    if (e.target.checked) {
      list.push(e.target.name);
    } else {
      list = list.filter(event => event != e.target.name);
    }
    setCheckedType(list);

    if (travelsList.length <= 0) {
      travels.map((tr, i) => {
        travelsList[i] = tr._id;
      });
    }

    // Logic for getting all bus if all checkbox are unchecked
    let newArr = [];
    if (list.length <= 0) {
      newArr = ["AC", "Delux", "Suspense AC", "Suspense Delux", "Normal"];
      fetchCheckedTravels(travelsList, newArr);
    } else {
      fetchCheckedTravels(travelsList, list);
    }
  };

  const fetchCheckedTravels = async (travel, type) => {
    const resp = await searchBusByFilter({ travel, ...info, type });
    setBuses(resp);
    setLoading(false);
  };

  const fetchAllTravels = async () => {
    const travels = await getAllTravels();
    setTravels(travels);
  };
  return (
    <div style={{ marginRight: "2rem" }}>
      <Card className="mb-2" style={{ width: "90%" }}>
        <h1>Travels: </h1>
        {travels.map(travel => (
          <div key={travel._id} className="checkbox-wrappper">
            <Checkbox name={travel._id} onChange={onChangeCheckbox}>
              {travel.name}
            </Checkbox>
          </div>
        ))}
      </Card>

      <Card className="mb-2" style={{ width: "90%" }}>
        <h1>Bus Type: </h1>
        <div className="checkbox-wrappper">
          <Checkbox name="AC" onChange={onChangeType}>
            AC
          </Checkbox>
        </div>
        <div className="checkbox-wrappper">
          <Checkbox name="Delux" onChange={onChangeType}>
            Delux
          </Checkbox>
        </div>
        <div className="checkbox-wrappper">
          <Checkbox name="Suspense AC" onChange={onChangeType}>
            Suspense AC
          </Checkbox>
        </div>
        <div className="checkbox-wrappper">
          <Checkbox name="Suspense Delux" onChange={onChangeType}>
            Suspense Delux
          </Checkbox>
        </div>
        <div className="checkbox-wrappper">
          <Checkbox name="Normal" onChange={onChangeType}>
            Normal
          </Checkbox>
        </div>
      </Card>
    </div>
  );
};

export default Filters;
