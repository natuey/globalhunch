import React, { Component } from "react";
import { Collapse } from "antd";
import { text } from "./TermsData";

const { Panel } = Collapse;

export class Terms extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>
            <span>
              <strong>Terms and Conditions</strong>
            </span>
          </h1>
          <p>
            These terms constitute an agreement between you and Global Hunch Pty
            Ltd ABN 74 631 282 945 of Sydney, NSW 2120 Australia (“we”, “our”,
            “us” and “Global Hunch“ referring to this company). “You” and “Your”
            and “User” refer to the person who uses the Global Hunch online
            platform at globalhunch.io (“Platform”) or registers a Platform
            account with us (“Account”). You may be an actual or prospective
            supplier or acquirer of services who uses the Platform to facilitate
            your dealings with other users of the Platform. By registering an
            account or using the Platform, you agree to be bound by these terms
            and all other policies and terms we notify you, including via the
            Platform. These other terms and policies include our privacy policy
            at https://globalhunch.io/privacypolicy/ and the general terms
            applicable to use of our online sites at
            https://globalhunch.io/terms/.
          </p>
          <p>
            We have adopted the Australian Privacy Principles (APPs) contained
            in the Privacy Act 1988 (Cth) (the Privacy Act). The NPPs govern the
            way in which we collect, use, disclose, store, secure and dispose of
            your Personal Information.
          </p>
          <p>
            A copy of the Australian Privacy Principles may be obtained from the
            website of The Office of the Australian Information Commissioner at
            www.aoic.gov.au
          </p>
          <p>
            If you do not wish to be bound by these terms, do not use the
            Platform and do not register an account with us.
          </p>
          <p>
            These terms apply to all dealings, including supplies of goods and
            services facilitated via the Platform. We may change these terms
            from time to time. If we propose to do so, we will give at least 2
            weeks’ notice of this via this site. If you do not accept the
            change, do not continue to use the Platform after the end of that
            time because from then, these terms as changed will apply to that
            use.
          </p>
        </div>
        <div>
          <Collapse accordion bordered={false} defaultActiveKey={["0"]}>
            {text.map((p, index) => {
              return (
                <Panel header={p.header} key={index}>
                  <p>{p.body}</p>
                </Panel>
              );
            })}
          </Collapse>
        </div>
      </div>
    );
  }
}

export default Terms;
