import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/UI/Input.jsx";
import Button from "../components/UI/Button.jsx";
import FormLayout from "../layouts/FormLayout.jsx";
import "./OpenNewSitePage.css";
import { request } from "../api/archeoService.jsx";

export default function OpenNewSitePage() {
  const [siteName, setSiteName] = useState("");
  const [siteDescription, setSiteDescription] = useState("");
  const [centerLongitude, setCenterLongitude] = useState(0.0);
  const [centerLatitude, setCenterLatitude] = useState(0.0);
  const [perimeterCoordinates, setPerimeterCoordinates] = useState([
    { latitude: "", longitude: "", orderIndex: 0 },
  ]);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  const requestDate = new Date();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const jwt = localStorage.getItem("jwt");
      await request({
        jwt,
        siteName,
        siteDescription,
        centerLatitude,
        centerLongitude,
        perimeterCoordinates,
        requestDate,
        userId,
      });
      navigate("/dashboard");
    } catch (err) {
      setError("There was a problem, try again later.");
    }
  };

  const addPerimeterCoordinate = () => {
    setPerimeterCoordinates([
      ...perimeterCoordinates,
      { latitude: "", longitude: "", orderIndex: perimeterCoordinates.length },
    ]);
  };

  const handlePerimeterCoordinateChange = (index, field, value) => {
    const newCoordinates = [...perimeterCoordinates];
    newCoordinates[index][field] = value;
    setPerimeterCoordinates(newCoordinates);
  };

  return (
    <div className="new-site-page h-full">
      <FormLayout title="Request open new site">
        <form onSubmit={handleSubmit}>
          <div className="submit-row">
            <div className="perimeter-coordinates">
              <div className="submit-row">
                <Input
                  label="Site name"
                  id="sitename"
                  value={siteName}
                  onChange={setSiteName}
                />
                <Input
                  label="Site description"
                  id="sitedesc"
                  value={siteDescription}
                  onChange={setSiteDescription}
                  textarea
                />
              </div>
              <div className="submit-row">
                <Input
                  label="Center longitude"
                  id="center-longitude"
                  value={centerLongitude}
                  type="number"
                  onChange={setCenterLongitude}
                />
                <Input
                  label="Center latitude"
                  id="center-latitude"
                  value={centerLatitude}
                  type="number"
                  onChange={setCenterLatitude}
                />
              </div>
            </div>
            <div className="perimeter-coordinates">
              <div className="perimeter-coordinates">
                <h3>Perimeter Coordinates</h3>
                {perimeterCoordinates.map((coord, index) => (
                  <div key={index} className="submit-row">
                    <Input
                      label={`Latitude ${index + 1}`}
                      id={`latitude-${index}`}
                      value={coord.latitude}
                      onChange={(e) =>
                        handlePerimeterCoordinateChange(index, "latitude", e)
                      }
                    />
                    <Input
                      label={`Longitude ${index + 1}`}
                      id={`longitude-${index}`}
                      value={coord.longitude}
                      onChange={(e) =>
                        handlePerimeterCoordinateChange(index, "longitude", e)
                      }
                    />
                  </div>
                ))}
                <Button type="button" outlined onClick={addPerimeterCoordinate}>
                  Add another coordinate
                </Button>
              </div>
              {error && <p className="error">{error}</p>}
            </div>
          </div>
          <Button type="submit" outlined styleType="primary">
            Send request
          </Button>
        </form>
      </FormLayout>
    </div>
  );
}
