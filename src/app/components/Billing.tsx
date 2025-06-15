import { Col, Divider, Row } from "antd";
import check from "../../assets/images/check.png";
import arrow from "../../assets/images/right.png";
import cross from "../../assets/images/cross.png";
import React from "react";
import Image from "next/image";

const Billing = () => {
  return (
    <div className="box">
      <Row className="justify-between">
        <Col span={6}>
          <h4>Pricing Plan</h4>
        </Col>
        <Col span={6}>
          <div className="bill">
            <h6>Bill yearly</h6>
            <span>-$80</span>
            <p>Bill monthly</p>
          </div>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={8} className="gutter-row">
          <div className="box_line">
            <div className="flex">
              <h6>Premium</h6>
            </div>
            <h3>
              $19 <span>user / month</span>
            </h3>
            <p>
              Aenean at lectus posuere enim id nec. Molestie neque, sed fusce
              faucibus.
            </p>
            <Divider />
            <ul>
              <li>
                <Image src={check} alt="check" />
                <span>
                  Tortor interdum condimentum nunc molestie quam lectus.
                </span>
              </li>
              <li>
                <Image src={check} alt="check" />
                <span>
                  Tortor interdum condimentum nunc molestie quam lectus.
                </span>
              </li>
              <li>
                <Image src={check} alt="check" />
                <span>
                  Tortor interdum condimentum nunc molestie quam lectus.
                </span>
              </li>
              <li>
                <Image src={cross} alt="check" />
                <span>
                  Tortor interdum condimentum nunc molestie quam lectus.
                </span>
              </li>
              <li>
                <Image src={cross} alt="check" />
                <span>
                  Tortor interdum condimentum nunc molestie quam lectus.
                </span>
              </li>
            </ul>
            <button>
              Get started <Image src={arrow} alt="arrow" />{" "}
            </button>
          </div>
        </Col>
        <Col span={8} className="gutter-row">
          <div className="box_line">
            <div className="flex justify-between align-middle">
              <h6>Team</h6>
              <span className="plan">🔥 Current Plan</span>
            </div>
            <h3>
              $39 <span>user / month</span>
            </h3>
            <p>
              Aenean at lectus posuere enim id nec. Molestie neque, sed fusce
              faucibus.
            </p>
            <Divider />
            <ul>
              <li>
                <Image src={check} alt="check" />
                <span>
                  Tortor interdum condimentum nunc molestie quam lectus.
                </span>
              </li>
              <li>
                <Image src={check} alt="check" />
                <span>
                  Tortor interdum condimentum nunc molestie quam lectus.
                </span>
              </li>
              <li>
                <Image src={check} alt="check" />
                <span>
                  Tortor interdum condimentum nunc molestie quam lectus.
                </span>
              </li>
              <li>
                <Image src={check} alt="check" />
                <span>
                  Tortor interdum condimentum nunc molestie quam lectus.
                </span>
              </li>
              <li>
                <Image src={check} alt="check" />
                <span>
                  Tortor interdum condimentum nunc molestie quam lectus.
                </span>
              </li>
            </ul>
            <button>
              Get started <Image src={arrow} alt="arrow" />
            </button>
          </div>
        </Col>
        <Col span={8} className="gutter-row">
          <div className="box_line">
            <div className="flex">
              <h6>Enterprise</h6>
            </div>
            <h3 style={{ fontSize: "24px" }}>Custom pricing</h3>
            <p>
              Aenean at lectus posuere enim id nec. Molestie neque, sed fusce
              faucibus.
            </p>
            <Divider />
            <ul>
              <li>
                <Image src={check} alt="check" />
                <span>
                  Tortor interdum condimentum nunc molestie quam lectus.
                </span>
              </li>
              <li>
                <Image src={check} alt="check" />
                <span>
                  Tortor interdum condimentum nunc molestie quam lectus.
                </span>
              </li>
              <li>
                <Image src={check} alt="check" />
                <span>
                  Tortor interdum condimentum nunc molestie quam lectus.
                </span>
              </li>
              <li>
                <Image src={check} alt="check" />
                <span>
                  Tortor interdum condimentum nunc molestie quam lectus.
                </span>
              </li>
              <li>
                <Image src={check} alt="check" />
                <span>
                  Tortor interdum condimentum nunc molestie quam lectus.
                </span>
              </li>
            </ul>
            <button>
              Contact us <Image src={arrow} alt="arrow" />
            </button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Billing;
