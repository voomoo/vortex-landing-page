import FeatureCard from "./FeatureCard";
import {
  ThunderboltFilled,
  DollarCircleFilled,
  SmileFilled,
} from "@ant-design/icons";

const FeatureSection = () => {
  return (
    <div className="feature-section">
      <hr />
      <h1>We're Different</h1>
      <div className="feature-card-group">
        <FeatureCard
          icon={<ThunderboltFilled className="icon" />}
          title="Snappy Process"
          text="Our application process can be completed in minutes, not hours. Don't get stuck filling in tedious forms"
        />
        <FeatureCard
          icon={<DollarCircleFilled className="icon" />}
          title="Affordable Prices"
          text="We don't want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible "
        />
        <FeatureCard
          icon={<SmileFilled className="icon" />}
          title="People First"
          text="Our plans aren't full of conditions and clauses to prevent payouts. We make sure you are covered when you need it."
        />
      </div>
    </div>
  );
};

export default FeatureSection;
