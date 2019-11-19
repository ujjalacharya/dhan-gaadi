import { Card, Checkbox } from "antd";
import { getAllTravels } from "../../actions/travel";
import { useEffect, useState } from "react";
import { searchBusByFilter } from "../../actions/location";

const Filters = ({ info, setBuses, setLoading }) => {
  const [travels, setTravels] = useState([]);
  const [checkedTravels, setCheckedTravels] = useState([]);

  useEffect(() => {
    fetchAllTravels();
  }, []);

  const onChange = e => {
    setLoading(true);
    let list = [...checkedTravels];
    if (e.target.checked) {
      list.push(e.target.name);
    } else {
      list.pop(e.target.name);
    }
    setCheckedTravels(list);

    // Logic for getting all bus if all checkbox are unchecked
    let newArr = [];
    if (list.length <= 0) {
      travels.map((tr, i) => {
        newArr[i] = tr._id;
      });
      fetchCheckedTravels(newArr);
    } else {
      fetchCheckedTravels(list);
    }
  };

  const fetchCheckedTravels = async travel => {
    const resp = await searchBusByFilter({ travel, ...info });
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
            <Checkbox name={travel._id} onChange={onChange}>
              {travel.name}
            </Checkbox>
          </div>
        ))}
      </Card>

      <Card className="mb-2" style={{ width: "90%" }}>
        <h1>Bus Type: </h1>
        <div className="checkbox-wrappper">
          <Checkbox onChange={onChange}>AC</Checkbox>
        </div>
        <div className="checkbox-wrappper">
          <Checkbox onChange={onChange}>Delux</Checkbox>
        </div>
        <div className="checkbox-wrappper">
          <Checkbox onChange={onChange}>Suspense AC</Checkbox>
        </div>
        <div className="checkbox-wrappper">
          <Checkbox onChange={onChange}>Suspense Delux</Checkbox>
        </div>
        <div className="checkbox-wrappper">
          <Checkbox onChange={onChange}>Normal</Checkbox>
        </div>
      </Card>
    </div>
  );
};

export default Filters;
