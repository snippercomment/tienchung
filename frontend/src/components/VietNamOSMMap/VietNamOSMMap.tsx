import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const VietNamOSMMap = () => {
  useEffect(() => {

    // GIỚI HẠN PHẠM VI VIỆT NAM
    const vietnamBounds = L.latLngBounds(
      [23.393395, 102.14441], // Điểm Bắc - Tây
      [8.179066, 109.46917]   // Điểm Nam - Đông
    );

    const map = L.map("osmvnmap", {
      zoomControl: true,
      scrollWheelZoom: true,
      maxBounds: vietnamBounds,        // Giới hạn theo VN
      maxBoundsViscosity: 1.0,         // Bật lại khi kéo ra ngoài
      minZoom: 5,
      maxZoom: 18,
    });

    map.fitBounds(vietnamBounds); // Tự căn vừa khung Việt Nam

    // LAYER OSM
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    // MARKER MẪU
    const hanoi = L.marker([21.028, 105.834]).addTo(map);
    hanoi.bindPopup("Hà Nội");

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div
      id="osmvnmap"
      style={{
        width: "100%",
        height: "100%",
        borderRadius: "6px",
      }}
    ></div>
  );
};

export default VietNamOSMMap;
