"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";

const navItems = [
  { label: "Shop", href: "/homepage" },
  { label: "Rotating", href: "/rotating" },
  { label: "My Proxies", href: "/my-proxies" },
  { label: "Payments", href: "/payments" },
  { label: "Downloads", href: "/downloads" },
  { label: "API", href: "/api-page" },
  { label: "FAQ", href: "/faq" },
];

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ marginBottom: "36px" }}>
      <p
        style={{
          fontWeight: 700,
          fontSize: "14px",
          color: "#111827",
          marginBottom: "10px",
        }}
      >
        {title}
      </p>
      {children}
    </div>
  );
}

function Line({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontSize: "13px",
        color: "#374151",
        margin: "3px 0",
        lineHeight: "1.6",
      }}
    >
      {children}
    </p>
  );
}

function Bold({ children }: { children: React.ReactNode }) {
  return <span style={{ fontWeight: 700 }}>{children}</span>;
}

function Code({ children }: { children: React.ReactNode }) {
  return (
    <pre
      style={{
        fontFamily: "monospace",
        fontSize: "11.5px",
        color: "#374151",
        margin: "6px 0",
        whiteSpace: "pre-wrap",
        wordBreak: "break-all",
        lineHeight: "1.6",
      }}
    >
      {children}
    </pre>
  );
}

export default function ApiPage() {
  const router = useRouter();
  const [activeNav, setActiveNav] = useState("API");

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#fff",
        fontFamily: "Poppins, sans-serif",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <Header />

      {/* Body */}
      <div
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          padding: "40px 24px",
          width: "100%",
        }}
      >
        <h1
          style={{
            fontSize: "24px",
            fontWeight: 700,
            color: "#111827",
            textAlign: "center",
            marginBottom: "36px",
          }}
        >
          API
        </h1>

        {/* Getting authorization token */}
        <Section title="Geting authorization token">
          <Line>example :</Line>
          <Code>{`curl --request POST \\
--url https://auth.bigmama.network/oauth/token \\
--header 'content-type: application/x-www-form-urlencoded' \\
-d
"client_id=iyinBdBok0wjoGlMdxuCDkYc5n0HuTlB&client_secret=W0H_5sc8HkjmIMjZTwy_alv23FtCOyDJe74BT4VSpe7u2wPPbVKOYZ7SdcL8WmDE"
"&username=email&password=password&audience=https%3A%2F%2Fcollector&grant_type=password"`}</Code>

          <Line>
            <Bold>client_id</Bold> : iyinBdBok0wjoGlMdxuCDkYc5n0HuTlB
          </Line>
          <Line>
            <Bold>client_secret</Bold> :
            W0H_5sc8HkjmIMjZTwy_alv23FtCOyDJe74BT4VSpe7u2wPPbVKOYZ7SdcL8WmDE
          </Line>
          <Line>
            <Bold>email</Bold> : your login
          </Line>
          <Line>
            <Bold>password</Bold> : your password
          </Line>
          <Line>
            <Bold>audience</Bold> : https%3A%2F%2Fcollector
          </Line>
          <Line>
            <Bold>grant_type</Bold> : password
          </Line>

          <div style={{ marginTop: "14px" }}>
            <Line>
              All requests should provide &quot;authorization&quot; token,
              otherwise 403 Forbidden response
            </Line>
            <Line>will be sent.</Line>
          </div>
        </Section>

        {/* Requesting proxy list */}
        <Section title="Requesting proxy list">
          <Line>
            <Bold>GET</Bold> : https://market.bigmama.network/api/agents?....
          </Line>
          <Line>
            <Bold>Header</Bold> : authorization: Bearer [token]
          </Line>
          <Line>
            <Bold>query vars:</Bold>
          </Line>
          <div style={{ paddingLeft: "0px" }}>
            <Line>
              *cursor : cursor for next page (available in response) 0 - initial
            </Line>
            <Line>
              *segments : true/false - display segments data in response
            </Line>
            <Line>*cc : 2 letter country code</Line>
            <Line>exstars : 1..5 - show with rating only</Line>
            <Line>city :: string</Line>
            <Line>ip1 [ip2] : string first/second ip octet</Line>
            <Line>reg : region name</Line>
            <Line>isp : isp name</Line>
            <Line>leases : none/some - (private/shared)</Line>
            <Line>conn : wifi/cell</Line>
            <Line>fresh : fresh/worn (new/old)</Line>
          </div>
          <div style={{ marginTop: "8px" }}>
            <Line>
              <Bold>response :</Bold>
            </Line>
            <Code>{`{ "agents": [ <AGENT_OBJECT>, ... ], "cursor": "222", "total": "333", "segments": { "cities": { <string>, ... }, "isps": { <string>, ... }, "zips": { <string>, ... }, "regions": { <string>, ... } } }`}</Code>
          </div>
          <div style={{ marginTop: "4px" }}>
            <Line>
              <Bold>AGENT_OBJECT:</Bold>
            </Line>
            <Code>{`{ "self": "/api/agents/CR5ZmjGRe7X", "id": "CR5ZmjGRe7X", "ip": "66.176._..", "host": "c-w.hsdl.fl.comcast.net", "conn": "wifi", "dev": "android", "stars": 3, "loc": { "cc": "US", "reg": "Florida", "city": "Miami", "zip": "33177", "isp": "Comcast Cable Communications" }, "leases": { "count": 0, "worn": true }, "score": 0.3499999493954, "actv": 0.29, "age": 4036502000000000, "priceSvc": 42, "priceExc": 143, "blacklists": { "listIDs": [ "@msbl.sorbs.net" ] } }`}</Code>
          </div>
        </Section>

        {/* Get leases */}
        <Section title="Get leases">
          <Line>
            <Bold>GET</Bold> :
            https://market.bigmama.network/api/leases?cursor=0
          </Line>
          <Line>
            <Bold>query vars :</Bold>
          </Line>
          <Line>cursor : cursor</Line>
          <div style={{ marginTop: "8px" }}>
            <Line>
              <Bold>response :</Bold>
            </Line>
            <Code>{`{ "leases": [ <LEASE_OBJECT>, ... ], "cursor": 0 }`}</Code>
          </div>
          <div style={{ marginTop: "4px" }}>
            <Line>
              <Bold>LEASE_OBJECT:</Bold>
            </Line>
            <Code>{`{ "self": "/api/leases/3NLV-3662", "id": "3NLV-3662", "user": "urn:useruauth0|5fd7dca5ac74c00683c00f8", "agent": "/api/agents/CR5ZmjGRe7X", "info": { "ip": "66.176.204.30", "host": "c-66-176-204-36.hsdl.fl.comcast.net", "loc": { "cc": "US", "reg": "Florida", "city": "Miami", "zip": "33177", "isp": "Comcast Cable Communications" }, "score": 0.3499999493954, "leases": { "count": 1, "worn": true }, "age": 4036502000000000, "actv": 0.29, "conn": "wifi", "blacklists": { "listIDs": [ "@msbl.sorbs.net" ] } }, "currentInfo": { "ip": "66.176-204-30", "host": "c-66-176-204-36.hsdl.fl.comcast.net", "loc": { "cc": "US", "reg": "Florida", "city": "Miami", "zip": "33177", "isp": "Comcast Cable Communications" }, "score": 0.3499999493954, "leases": { "count": 1, "worn": true }, "age": 4036502000000000, "actv": 0.29, "conn": "wifi", "sucks": false, "host": "market.bigmama.network", "id": "79.129.169.55", "port": 1800, "user": "3d4d556d4b6e4", "pwd": "346466666sv9Ba" }, "stats": { "reqs": 0, "inBytes": 0, "outBytes": 0, "failPct": 0, "refundable": false }, "purchasePrice": 42, "renewable": false, "autoRenew": false }`}</Code>
          </div>
        </Section>

        {/* Lease proxy */}
        <Section title="Lease proxy">
          <Line>
            <Bold>POST</Bold> : https://market.bigmama.network/api/leases
          </Line>
          <Line>json object in body:</Line>
          <Code>{`{"agentID":"<LEASE_ID>","expPrice":<PRICE>,"priv":true,"exc":false}`}</Code>
          <Line>exc : true - private, false - shared</Line>
          <Line>
            <Bold>response</Bold> : [LEASE_OBJECT]
          </Line>
        </Section>

        {/* Refund lease */}
        <Section title="Refund lease">
          <Line>
            <Bold>DELETE</Bold> : https://market.bigmama.network/api/leases/
            {"{LEASE_ID}"}
          </Line>
          <Line>
            <Bold>path vars :</Bold>
          </Line>
          <Line>{"{LEASE_ID}"}</Line>
          <Line>
            <Bold>response</Bold> :200 OK
          </Line>
        </Section>

        {/* Enable/Disable autorenew */}
        <Section title="Enable/Disable autorenew">
          <Line>
            <Bold>GET</Bold> : https://market.bigmama.network/api/leases/
            {"{LEASE_ID}"}/autoRenew?set=true
          </Line>
          <Line>
            <Bold>path vars :</Bold>
          </Line>
          <Line>{"{LEASE_ID}"}</Line>
          <Line>
            <Bold>query vars :</Bold>
          </Line>
          <Line>set : true/false</Line>
          <Line>
            <Bold>response</Bold> :200 OK
          </Line>
        </Section>
      </div>
    </div>
  );
}
