/* ============================================================
   SAMMY — The SAM Agent · Proteam Advisory Chatbot v3.0
   Self-contained Q&A knowledge base · No API · No key · Offline
   ============================================================
   Covers basics across SAM / HAM / FinOps / ITAM and current
   licensing landscape for Microsoft, Oracle, SAP, IBM, Adobe,
   Salesforce, ServiceNow, VMware (Broadcom).

   Last KB review: May 2026. Vendor pricing and policy details
   change frequently — always direct customers to Proteam
   experts for exact counts, current pricing, and contract advice.
   ============================================================ */

(function () {
  'use strict';

  /* ============================================================
     KNOWLEDGE BASE
     Each entry:
       q     — canonical question variations & keyword phrases
       a     — answer (HTML allowed; [CONTACT] becomes the link)
       tags  — short topic tags for chip-based browsing
     ============================================================ */
  const KB = [

    /* ────────── SAM CORE ────────── */
    {
      q: ['what is sam', 'software asset management', 'define sam', 'explain sam', 'sam definition'],
      a: `<strong>Software Asset Management (SAM)</strong> is the practice of managing the full lifecycle of software — procurement, deployment, usage, compliance, optimisation, and retirement. Its three core outputs are an accurate software inventory, an Effective Licence Position (ELP) against entitlements, and a defensible audit posture. A mature SAM practice typically saves 20–30% of total software spend through reharvesting, right-sizing, and audit avoidance.`,
      tags: ['sam', 'basics']
    },
    {
      q: ['why is sam important', 'benefits of sam', 'value of sam', 'sam roi'],
      a: `SAM delivers value in four places: <strong>cost</strong> (reclaiming shelfware, avoiding over-buying), <strong>compliance</strong> (defensible position in publisher audits), <strong>risk</strong> (no unsupported or end-of-life software running unnoticed), and <strong>agility</strong> (knowing what you have so M&A, cloud moves, and renewals don't surprise you). Industry data suggests organisations are typically over-licensed by ~60% in some products while simultaneously under-licensed in others.`,
      tags: ['sam', 'basics']
    },
    {
      q: ['sam lifecycle', 'software lifecycle', 'stages of sam', 'sam process'],
      a: `The SAM lifecycle has six stages: <strong>1. Request</strong> (need identified), <strong>2. Procure</strong> (purchase, contract), <strong>3. Deploy</strong> (install, assign), <strong>4. Manage</strong> (monitor usage, true-up, renew), <strong>5. Reharvest</strong> (reclaim unused licences), <strong>6. Retire</strong> (uninstall, dispose, archive entitlement records). Each stage produces data that feeds the ELP.`,
      tags: ['sam', 'basics']
    },
    {
      q: ['what is elp', 'effective licence position', 'effective license position', 'compliance position'],
      a: `An <strong>Effective Licence Position (ELP)</strong> compares what you've <em>deployed</em> (discovered installations and usage) against what you're <em>entitled to</em> (purchase records, contracts) for a single publisher at a point in time. The output is per-product: compliant, over-deployed (shortfall), or over-licensed (shelfware). The ELP is the foundation of every audit response and every renewal negotiation.`,
      tags: ['sam', 'compliance']
    },
    {
      q: ['what is shelfware', 'unused licences', 'unused licenses', 'idle licences'],
      a: `<strong>Shelfware</strong> is software you've paid for but aren't using — licences allocated to users who left, installed on retired devices, or bought "just in case." It's the easiest SAM win: identify, reharvest, and either reassign or drop at renewal. Cloud SaaS shelfware (dormant Microsoft 365, Salesforce, Zoom seats) is now the largest category in most enterprises.`,
      tags: ['sam', 'basics']
    },
    {
      q: ['what is true up', 'true-up', 'trueup', 'annual true up'],
      a: `A <strong>true-up</strong> is a reconciliation event — usually annual — where you report actual usage against your contract baseline and pay for any growth. Common in Microsoft Enterprise Agreements (EA), where new users/devices added during the year are paid for at the true-up anniversary. Underreporting at true-up is the most common source of audit findings.`,
      tags: ['sam', 'microsoft']
    },
    {
      q: ['what is reconciliation', 'licence reconciliation', 'how does reconciliation work'],
      a: `<strong>Reconciliation</strong> is the matching of discovered software installations against entitlements to determine compliance. In tools like ServiceNow SAM Pro or Flexera, reconciliation runs on a schedule and produces a per-product compliance result. It depends on three things being right: clean discovery data, accurate entitlement records, and correct licence metric rules.`,
      tags: ['sam', 'tools']
    },
    {
      q: ['what is downgrade rights', 'downgrade right', 'use older version'],
      a: `<strong>Downgrade rights</strong> let you use an older version of software under a current licence — useful when an application or OS isn't certified on the latest release. Microsoft grants downgrade rights on most Volume Licensing products. Always confirm in writing: downgrade is not universal, and some SaaS subscriptions have no downgrade concept at all.`,
      tags: ['sam', 'microsoft']
    },
    {
      q: ['what is software assurance', 'microsoft sa', 'sa benefits', 'why software assurance'],
      a: `<strong>Software Assurance (SA)</strong> is Microsoft's maintenance offering on Volume Licensing. Benefits include version upgrade rights, licence mobility (move workloads between servers/cloud), home use rights, training vouchers, and access to certain SKUs only sold with SA. SA is typically ~25% of licence cost per year. Without it, you're locked to the version you bought.`,
      tags: ['microsoft', 'basics']
    },
    {
      q: ['what is licence mobility', 'license mobility', 'mobility through sa'],
      a: `<strong>Licence Mobility</strong> (Microsoft) lets you move eligible Server licences from on-prem to authorised cloud providers (AWS, Azure, GCP) without buying again — but only if you have active Software Assurance and the product is on the eligible list (SQL Server, SharePoint, Exchange, etc.). Windows Server and SQL Server BYOL into hyperscalers depends on the Azure Hybrid Benefit terms.`,
      tags: ['microsoft', 'cloud']
    },
    {
      q: ['sam best practices', 'how to start sam', 'sam program', 'building sam'],
      a: `Start with three things: <strong>(1) one accurate inventory</strong> using discovery (SCCM, Intune, ServiceNow Discovery, agent-based scanners), <strong>(2) a contract/entitlement repository</strong> capturing every PO and agreement, <strong>(3) ELPs for your top 3–5 publishers by spend</strong> (usually Microsoft, Oracle, Adobe, SAP, VMware). Mature later with reharvesting, request workflow, and SaaS management.`,
      tags: ['sam', 'basics']
    },
    {
      q: ['sam maturity model', 'sam maturity levels', 'iso 19770'],
      a: `Common maturity stages: <strong>Reactive</strong> (firefighting audits) → <strong>Proactive</strong> (annual ELPs, basic reharvest) → <strong>Optimised</strong> (request-to-retire workflow, role-based licensing) → <strong>Strategic</strong> (SAM informs procurement, cloud and M&A decisions). <strong>ISO/IEC 19770-1</strong> is the international standard for SAM management systems; 19770-2/-3 define tag formats for software identification and entitlement.`,
      tags: ['sam', 'basics']
    },
    {
      q: ['what is sam tool', 'sam tools', 'best sam tool'],
      a: `Categories: <strong>full-suite SAM/ITAM</strong> (ServiceNow SAM Pro, Flexera One, Snow — now part of Flexera), <strong>SaaS management</strong> (Zylo, Productiv, BetterCloud, Torii), <strong>vendor-specific</strong> (Aspera for IBM/Oracle, USU for Oracle), and <strong>discovery-led</strong> (Lansweeper). Choice depends on estate complexity, publisher mix, and whether you already run ServiceNow. For specific tool fit, [CONTACT].`,
      tags: ['sam', 'tools']
    },
    {
      q: ['servicenow sam pro', 'sam pro', 'servicenow software asset management'],
      a: `<strong>ServiceNow SAM Pro</strong> sits on the Now Platform and uses ServiceNow Discovery (or third-party connectors) to populate a Software Installations table, then normalises and reconciles against entitlements you load in. <strong>Publisher Packs</strong> add vendor-specific rules for Microsoft, Oracle, IBM, SAP, Adobe, Citrix, VMware. <strong>SAM Premier</strong> adds advanced engineering rules and ISO certification support.`,
      tags: ['tools', 'servicenow']
    },
    {
      q: ['flexera one', 'flexera', 'flexera tool'],
      a: `<strong>Flexera One</strong> is a SaaS platform combining IT Asset Management (formerly FlexNet Manager), SaaS Management, IT Visibility (Technopedia-powered normalisation), and Cloud cost management. Strong on Microsoft, Oracle, IBM, SAP rule libraries via Flexera's Technology Intelligence catalogue. Flexera acquired Snow Software in 2023, consolidating two major SAM vendors.`,
      tags: ['tools', 'flexera']
    },
    {
      q: ['snow software', 'snow license manager', 'snow inventory'],
      a: `<strong>Snow Software</strong> was a leading SAM vendor; <strong>acquired by Flexera in 2023</strong>. Snow products (Snow License Manager, Snow for Oracle, Snow SaaS Management) continue to be sold and supported, and roadmaps are being aligned with Flexera One over time. Existing Snow customers should review their renewal path with their account team.`,
      tags: ['tools', 'flexera']
    },
    {
      q: ['aspera tool', 'aspera sam', 'usu aspera'],
      a: `<strong>Aspera SmartTrack</strong> (now part of USU) is a SAM platform with particularly strong rule sets for IBM (PVU/RVU/sub-capacity) and Oracle (Database Options, Java). Often used alongside a broader SAM tool for those two publishers specifically.`,
      tags: ['tools']
    },
    {
      q: ['zylo', 'zylo saas', 'saas management tool'],
      a: `<strong>Zylo</strong> is a SaaS Management Platform (SMP) — discovers SaaS spend from expense and SSO data, tracks application owners, licences, renewals, and usage. Sits alongside SAM tools rather than replacing them. Competitors include Productiv, Torii, BetterCloud, and Flexera SaaS Management.`,
      tags: ['tools', 'saas']
    },

    /* ────────── HAM ────────── */
    {
      q: ['what is ham', 'hardware asset management', 'define ham', 'explain ham'],
      a: `<strong>Hardware Asset Management (HAM)</strong> manages the lifecycle of physical IT assets — procurement, receiving, deployment, in-life maintenance, refresh, and secure disposal. Outputs: accurate asset register, total cost of ownership, refresh forecasting, ITAD (IT Asset Disposition) records, and ESG/sustainability reporting on e-waste.`,
      tags: ['ham', 'basics']
    },
    {
      q: ['ham lifecycle', 'hardware lifecycle', 'asset lifecycle'],
      a: `Six HAM stages: <strong>Request → Procure → Receive (stockroom) → Deploy → In-life (warranty, repair, move/add/change) → Retire (wipe, dispose via ITAD).</strong> Disposal must produce a Certificate of Data Destruction and weight-based recycling records to satisfy audit, GDPR/UK DPA, and increasingly CSRD/ESG reporting.`,
      tags: ['ham', 'basics']
    },
    {
      q: ['sam vs ham', 'difference sam ham', 'sam and ham'],
      a: `<strong>SAM</strong> manages software (licences, entitlements, compliance). <strong>HAM</strong> manages hardware (devices, peripherals, data centre assets, lifecycle). Together they're <strong>ITAM</strong> — IT Asset Management. SAM is dominated by licence-compliance risk; HAM is dominated by cost, refresh, and disposal/sustainability concerns.`,
      tags: ['sam', 'ham', 'basics']
    },
    {
      q: ['what is cmdb', 'configuration management database', 'cmdb explained'],
      a: `A <strong>CMDB</strong> stores Configuration Items (CIs) — servers, applications, services — and the relationships between them. It's the source of truth for change, incident, and impact analysis. SAM relies on CMDB data for software-to-CI mapping; HAM relies on it for hardware CIs. Bad CMDB data is the single most common reason ELPs are wrong.`,
      tags: ['ham', 'basics', 'servicenow']
    },
    {
      q: ['what is itad', 'it asset disposition', 'asset disposal'],
      a: `<strong>IT Asset Disposition (ITAD)</strong> covers the secure retirement of hardware: data wiping (to NIST 800-88 or equivalent), resale or recycling, and chain-of-custody documentation. A good ITAD partner provides Certificates of Data Destruction and weight-based recycling reports. Increasingly part of ESG/CSRD reporting.`,
      tags: ['ham', 'compliance']
    },

    /* ────────── ITAM CONCEPTS ────────── */
    {
      q: ['what is itam', 'it asset management', 'define itam', 'explain itam'],
      a: `<strong>IT Asset Management (ITAM)</strong> is the umbrella for SAM (software), HAM (hardware), and increasingly Cloud/SaaS asset management. ITAM aligns with the <strong>ITIL 4</strong> service value system and with the <strong>ISO/IEC 19770</strong> family of standards. The discipline now overlaps significantly with FinOps as cloud and SaaS dominate IT spend.`,
      tags: ['itam', 'basics']
    },
    {
      q: ['itam vs itsm', 'difference itam itsm'],
      a: `<strong>ITSM</strong> (IT Service Management) is process-oriented — incident, problem, change, request fulfilment. <strong>ITAM</strong> is asset-oriented — what you own, where it is, what it costs. They share a CMDB and overlap heavily (a change in ITSM should update an ITAM record), but answer different questions: ITSM "is the service running?", ITAM "what do we have and what does it cost?"`,
      tags: ['itam', 'basics']
    },

    /* ────────── LICENCE METRICS ────────── */
    {
      q: ['licence metrics', 'license metrics', 'what are licence metrics', 'types of licence metrics'],
      a: `A <strong>licence metric</strong> is the unit a vendor uses to count usage. Common metrics: <strong>Per User</strong> (subscription seats), <strong>Named User</strong> (specific identified individual), <strong>Concurrent</strong> (simultaneous users), <strong>Per Device</strong>, <strong>Per Processor / Per Core</strong>, <strong>PVU</strong> and <strong>RVU</strong> (IBM), <strong>Document-based</strong> (SAP Digital Access), <strong>Per Employee</strong> (Oracle Java SE Universal).`,
      tags: ['metrics', 'basics']
    },
    {
      q: ['what is per user licence', 'user licence', 'subscription seat'],
      a: `<strong>Per User</strong> licensing assigns one entitlement to one identified person. They may use the software on any number of devices. Most SaaS (M365, Salesforce, Zoom) is per user. Reharvesting is critical: when a user leaves, the seat must be reassigned or dropped at renewal.`,
      tags: ['metrics']
    },
    {
      q: ['named user plus', 'oracle named user', 'nup'],
      a: `<strong>Named User Plus (NUP)</strong> is Oracle's per-individual metric for Database, Middleware, and other technology products. Each named individual or non-human operated device that accesses the program needs a licence, regardless of whether they're actively using it. Oracle defines minimum NUP-per-processor counts that often drive the licence to be processor-based instead.`,
      tags: ['metrics', 'oracle']
    },
    {
      q: ['what is per device', 'device licence', 'per device licensing'],
      a: `<strong>Per Device</strong> licences are tied to a specific machine (workstation, laptop, server). Any number of users can use the software on that device. Common in shift-work environments (call centres, retail, manufacturing) where many users share fewer devices. Microsoft offers per-device Windows VDA and per-device M365 options.`,
      tags: ['metrics']
    },
    {
      q: ['what is concurrent licence', 'concurrent user', 'floating licence'],
      a: `<strong>Concurrent</strong> (or <em>floating</em>) licences allow up to N users active at the same time, drawn from a shared pool. Common in engineering software (AutoCAD, MATLAB). Requires a licence server to enforce. Often more cost-efficient than per-user when there are many occasional users — but watch peak usage.`,
      tags: ['metrics']
    },
    {
      q: ['per processor licence', 'processor licence', 'cpu licence'],
      a: `<strong>Per Processor</strong> licences are based on the physical CPUs (or sockets) running the software. Common for older on-prem server software. Definitions vary by vendor — Oracle uses a Processor Core Factor (e.g. 0.5 for most Intel/AMD x86 cores), while Microsoft moved server products to per-core in 2016. Confirm the vendor's specific definition before counting.`,
      tags: ['metrics', 'oracle', 'microsoft']
    },
    {
      q: ['per core licence', 'core licence', 'core-based licensing'],
      a: `<strong>Per Core</strong> licensing counts physical cores rather than sockets. <strong>Microsoft</strong> SQL Server and Windows Server use per-core with minimums (typically 16 cores per server, 8 cores per processor). <strong>VMware</strong> moved to per-core under Broadcom with a 16-core-per-CPU minimum, raising costs significantly for low-core servers.`,
      tags: ['metrics', 'microsoft', 'vmware']
    },
    {
      q: ['what is pvu', 'ibm pvu', 'processor value unit'],
      a: `<strong>PVU (Processor Value Unit)</strong> is IBM's processor-based metric. Each core type has a published PVU rating (e.g. an Intel Xeon core is typically 70 PVU; IBM Power cores are higher). PVUs of all cores running the software, multiplied across systems, equals the licence requirement. <strong>Sub-capacity</strong> licensing lets you license only the VMs running IBM software, not the full host — but only with ILMT in place.`,
      tags: ['metrics', 'ibm']
    },
    {
      q: ['what is rvu', 'ibm rvu', 'resource value unit'],
      a: `<strong>RVU (Resource Value Unit)</strong> is IBM's metric for things you can't easily count by CPU — e.g. managed nodes, devices, user IDs, terabytes managed. Common for security, storage, and management products (e.g. QRadar, Spectrum Protect). Each product specifies what the resource is.`,
      tags: ['metrics', 'ibm']
    },
    {
      q: ['what is ilmt', 'ibm ilmt', 'license metric tool'],
      a: `<strong>ILMT (IBM License Metric Tool)</strong> is IBM's free tool for measuring sub-capacity PVU usage in virtualised environments. Installing, configuring, and retaining ILMT reports (quarterly, 2-year retention) is an <strong>IBM contractual requirement</strong> for any customer using sub-capacity licensing. No ILMT = full-capacity charges in an audit.`,
      tags: ['ibm', 'compliance', 'tools']
    },
    {
      q: ['sub-capacity', 'sub capacity', 'subcapacity licensing'],
      a: `<strong>Sub-capacity</strong> licensing lets you license only the cores actually assigned to the VM running the software, not the entire physical host. The contractual conditions are strict — IBM requires ILMT and reports, Oracle has separate (and contested) "approved hypervisor" rules. Without sub-capacity rights, virtualised hosts are licensed at full physical capacity.`,
      tags: ['ibm', 'oracle', 'virtualization']
    },
    {
      q: ['perpetual vs subscription', 'perpetual licence', 'subscription licence'],
      a: `<strong>Perpetual</strong>: pay once, own the right to use that version forever. Maintenance (~20–22%/yr) is optional and gives you updates and support. <strong>Subscription</strong>: pay periodically; stop paying and the right to use ends. Most modern enterprise software (M365, Salesforce, SAP RISE, VMware under Broadcom) is subscription-only — perpetual is increasingly unavailable for new purchases.`,
      tags: ['metrics', 'basics']
    },
    {
      q: ['what is oem', 'oem licence', 'oem software'],
      a: `<strong>OEM (Original Equipment Manufacturer)</strong> licences are sold pre-installed on hardware (e.g. Windows on a new laptop) and are tied to that device for its life. They typically cannot be transferred to another machine and don't include the upgrade and mobility rights of Volume Licensing.`,
      tags: ['metrics', 'microsoft']
    },

    /* ────────── MICROSOFT ────────── */
    {
      q: ['microsoft licensing programs', 'volume licensing', 'mpsa', 'ea', 'enterprise agreement', 'microsoft csp'],
      a: `Microsoft's main programs: <strong>Enterprise Agreement (EA)</strong> — 3-year commitment, ≥500 users/devices, best discounts and most negotiation leverage; <strong>CSP (Cloud Solution Provider)</strong> — monthly/annual, no minimum, bought through partners, increasingly Microsoft's preferred path; <strong>MPSA</strong> — transactional, no commitment; <strong>MCA-E (Microsoft Customer Agreement-Enterprise)</strong> — modernised replacement for EA being rolled out for new and renewing customers.`,
      tags: ['microsoft']
    },
    {
      q: ['m365 e3 vs e5', 'microsoft 365 e3 e5', 'difference e3 e5'],
      a: `<strong>Microsoft 365 E3</strong> — Office apps, Windows Enterprise, Intune, basic security and compliance. <strong>E5</strong> adds advanced security (Defender for Endpoint Plan 2, Defender for Office 365 P2, Defender for Identity), advanced compliance (eDiscovery Premium, Insider Risk, Information Barriers), Power BI Pro, and audio conferencing. E5 typically costs ~60% more than E3. The decision usually hinges on whether you need the security and compliance stack.`,
      tags: ['microsoft']
    },
    {
      q: ['m365 copilot', 'microsoft 365 copilot', 'copilot licence', 'copilot prerequisites'],
      a: `<strong>Microsoft 365 Copilot</strong> is a per-user add-on with a current list price of <strong>$30/user/month (annual commit)</strong>. It requires a qualifying base licence: <strong>M365 E3, E5, Business Standard, or Business Premium</strong>, or (since 2025) Office 365 E3/E5. Free <strong>Copilot Chat</strong> is included with any qualifying M365 plan. For volume discounts and current pricing in your region, [CONTACT].`,
      tags: ['microsoft', 'copilot', 'ai']
    },
    {
      q: ['copilot chat', 'free copilot', 'copilot chat licence'],
      a: `<strong>Microsoft 365 Copilot Chat</strong> is the free, web-grounded AI assistant included with any eligible M365 subscription. It covers public-web grounding only; for grounding on your <em>tenant</em> data (Word, Excel, Teams meetings, SharePoint), you need a paid Microsoft 365 Copilot licence.`,
      tags: ['microsoft', 'copilot', 'ai']
    },
    {
      q: ['microsoft price increase 2026', 'm365 price rise', 'office price increase'],
      a: `Microsoft announced on <strong>4 December 2025</strong> that Microsoft 365 suite list prices will rise from <strong>1 July 2026</strong>. Indicative changes flagged by partners include E3 from $36 → $39, E5 from $57 → $60, Business Basic from $6 → $7, Business Standard from $12.50 → $14 (per user/month). Confirm current quoted pricing through your reseller; [CONTACT] for renewal strategy.`,
      tags: ['microsoft', 'pricing']
    },
    {
      q: ['azure hybrid benefit', 'ahb', 'byol azure'],
      a: `<strong>Azure Hybrid Benefit (AHB)</strong> lets you apply Windows Server and SQL Server licences with active Software Assurance to Azure VMs, paying the base compute rate instead of licence-included. Can also be used for SQL Server in AVS, and for RHEL/SLES subscriptions. Significant savings (up to ~40–55% on Windows VMs) — but tracking AHB application is now an audit focus.`,
      tags: ['microsoft', 'cloud', 'azure']
    },
    {
      q: ['windows server licensing', 'windows server cal', 'server cal'],
      a: `Windows Server is licensed <strong>per core</strong> — minimum 16 cores per server, 8 cores per processor. Plus you need <strong>CALs (Client Access Licenses)</strong> for every user or device that accesses the server. Datacenter edition (unlimited VMs on the host) vs Standard (2 VMs per licensed host, can stack). Cloud equivalents come via AHB.`,
      tags: ['microsoft', 'metrics']
    },
    {
      q: ['sql server licensing', 'sql per core', 'sql cal'],
      a: `SQL Server has two main models: <strong>Per Core</strong> (16-core minimum per server, no CALs needed — best for high-user/public-facing workloads) or <strong>Server + CAL</strong> (one server licence plus CALs per user/device — better for internal apps with few users). Enterprise vs Standard edition is a separate decision driving feature set and price.`,
      tags: ['microsoft', 'metrics']
    },

    /* ────────── ORACLE ────────── */
    {
      q: ['oracle java licensing', 'oracle java', 'java se subscription', 'java per employee'],
      a: `Since <strong>23 January 2023</strong>, Oracle Java SE is sold as the <strong>Java SE Universal Subscription</strong>, priced <strong>per employee</strong> (not per user, not per processor). "Employee" is defined broadly: all full-time, part-time, temporary staff, plus contractors and outsourcers supporting internal operations. List prices range from <strong>$15/employee/month</strong> at the smallest tier down to <strong>$5.25</strong> at large scale. If one Java install requires a paid licence, you must license your entire eligible employee base.`,
      tags: ['oracle', 'java']
    },
    {
      q: ['oracle java alternatives', 'free java', 'openjdk', 'java replacement'],
      a: `Free/low-cost alternatives to Oracle JDK: <strong>OpenJDK</strong> (Oracle builds under GPL; free, no Premier Support), <strong>Eclipse Temurin</strong> (Adoptium, very widely used), <strong>Amazon Corretto</strong>, <strong>Azul Zulu / Platinum</strong> (commercial support available), <strong>Red Hat OpenJDK</strong>, <strong>Microsoft Build of OpenJDK</strong>. Most enterprises responding to Oracle's price changes are migrating to one of these. For a migration plan, [CONTACT].`,
      tags: ['oracle', 'java']
    },
    {
      q: ['oracle database options', 'oracle options', 'partitioning option', 'advanced compression'],
      a: `Oracle Database <strong>Options</strong> (Partitioning, Advanced Compression, Advanced Security, Real Application Clusters, Active Data Guard, etc.) and <strong>Management Packs</strong> (Diagnostics, Tuning, Lifecycle Management) are <strong>separately licensed</strong> on top of Database Enterprise Edition. Accidental usage — e.g. a DBA enables Partitioning for one table — creates audit exposure. Use DBA_FEATURE_USAGE_STATISTICS to check what's been used.`,
      tags: ['oracle', 'database']
    },
    {
      q: ['oracle vmware', 'oracle on vmware', 'oracle hard partitioning'],
      a: `Oracle's <strong>partitioning policy</strong> classifies VMware as <em>soft partitioning</em>, meaning Oracle's stated position is that all physical cores in the VMware cluster (potentially the whole vCenter) must be licensed — not just the VMs running Oracle. This policy is a <em>policy document, not a contractual term</em>, and has been challenged. Common mitigations: dedicated clusters, hard-partitioned platforms (LPAR, Solaris Zones), or moving to OCI/cloud@customer.`,
      tags: ['oracle', 'virtualization']
    },
    {
      q: ['oracle cloud licensing', 'oracle byol cloud', 'oracle authorised cloud'],
      a: `Oracle's <strong>Authorized Cloud Environments policy</strong> covers BYOL into AWS and Azure: count 2 vCPUs as equal to 1 Oracle Processor licence if hyper-threading is on (1:1 otherwise). OCI uses Oracle's own metric (OCPU). As with the VMware policy, this is a policy document, not a contract term — always negotiate cloud rights explicitly into your Oracle agreement.`,
      tags: ['oracle', 'cloud']
    },
    {
      q: ['oracle audit', 'oracle lms', 'oracle license review'],
      a: `Oracle audits ("LMS reviews" or "GLAS reviews") usually start with a formal letter, request you run scripts on Database/Middleware servers and Java installs, and produce a deployment report. Best practice: have your own ELP ready <em>before</em> Oracle's data arrives, control what scripts run, never volunteer extra information, and engage independent licensing advice immediately. [CONTACT] for audit defence.`,
      tags: ['oracle', 'audit']
    },
    {
      q: ['oracle ulas', 'oracle unlimited license', 'ula'],
      a: `An <strong>Oracle ULA (Unlimited License Agreement)</strong> grants unlimited deployment of specific products for a fixed term (typically 3 years) for a fixed fee. At the end you <em>certify</em> usage and that becomes your perpetual licence count. ULAs can be great value if you're growing fast in scope — and a trap if growth doesn't materialise or you've over-deployed in unintended places (e.g. cloud, M&A entities).`,
      tags: ['oracle', 'contracts']
    },

    /* ────────── SAP ────────── */
    {
      q: ['sap licensing', 'sap named user', 'sap licence types'],
      a: `SAP licensing has two main components: <strong>Named Users</strong> (Developer, Professional, Functional/Limited, Employee Self-Service — each with different access rights and prices) and <strong>Engines/Packages</strong> (e.g. Payroll, CRM, BW — licensed by metric specific to the engine, like number of employees paid, orders, GB managed). Under S/4HANA the simplified model is <strong>FUE (Full Use Equivalent)</strong>.`,
      tags: ['sap']
    },
    {
      q: ['sap indirect access', 'sap digital access', 'indirect use sap'],
      a: `<strong>SAP Digital Access</strong> (introduced 2018) licenses indirect/third-party access by <strong>documents created</strong> in SAP, not users. Nine document types are counted: Sales Order, Invoice, Purchase Order, Service & Maintenance, Manufacturing, Quality, Time Management, Financial, Material. If a non-SAP system (CRM, e-commerce, IoT) creates these in SAP, those documents need licensing. Negotiate this explicitly in any new S/4HANA contract.`,
      tags: ['sap', 'compliance']
    },
    {
      q: ['rise with sap', 'rise sap', 's4hana cloud', 'rise vs grow'],
      a: `<strong>RISE with SAP</strong> is SAP's bundled cloud subscription for S/4HANA Cloud — infrastructure, ERP licences, business process intelligence, and basic services in one contract. <strong>GROW with SAP</strong> is the mid-market equivalent (S/4HANA Cloud Public Edition). RISE typically <em>includes</em> basic Digital Access entitlements, simplifying indirect access — confirm volumes in the order form.`,
      tags: ['sap', 'cloud']
    },
    {
      q: ['s4hana 2027', 'ecc end of support', 'sap ecc deadline'],
      a: `SAP ECC mainstream maintenance ends <strong>31 December 2027</strong>, with extended (premium) maintenance available to <strong>2030</strong> at additional cost. Most customers are migrating to S/4HANA via <strong>greenfield</strong> (new implementation), <strong>brownfield</strong> (system conversion), or <strong>selective data transition</strong>. Timing the move, choosing between RISE and on-prem S/4HANA, and reusing legacy licences are all major commercial decisions.`,
      tags: ['sap']
    },
    {
      q: ['sap fue', 'full use equivalent', 'fue licensing'],
      a: `<strong>FUE (Full Use Equivalent)</strong> is SAP's simplified user metric for S/4HANA Cloud and RISE. Different user roles count as a fraction of one FUE — e.g. 1 Advanced user ≈ 1 FUE, 5 Core users ≈ 1 FUE, 30 Self-Service users ≈ 1 FUE. You buy a total FUE pool and assign users within it.`,
      tags: ['sap', 'metrics']
    },
    {
      q: ['sap audit', 'sap license audit', 'sap measurement'],
      a: `SAP audits via the <strong>USMM (User Measurement)</strong> transaction (named users) plus <strong>LAW (License Administration Workbench)</strong> across systems, plus engine-specific measurement programs. Always classify users carefully <em>before</em> measurement — under-classification (e.g. calling a Professional a Limited user) is the most common audit finding. [CONTACT] for measurement preparation.`,
      tags: ['sap', 'audit']
    },

    /* ────────── VMWARE / BROADCOM ────────── */
    {
      q: ['vmware broadcom', 'broadcom vmware changes', 'vmware licensing changes', 'vmware new model'],
      a: `Since Broadcom's acquisition (closed November 2023, new model effective <strong>February 2024</strong>), VMware has moved to <strong>subscription-only</strong>, eliminated perpetual licences, and collapsed ~160 SKUs into four bundles: <strong>VCF</strong> (VMware Cloud Foundation), <strong>VVF</strong> (vSphere Foundation), <strong>VVS</strong> (vSphere Standard), and <strong>VVEP</strong> (vSphere Essentials Plus, capped at 3 hosts/96 cores). Metric changed from per-CPU to <strong>per-core with a 16-core-per-CPU minimum</strong>. Customer renewal increases of 2x–10x have been widely reported.`,
      tags: ['vmware', 'broadcom']
    },
    {
      q: ['vcf vs vvf', 'vmware bundles', 'cloud foundation vsphere foundation'],
      a: `<strong>VCF (VMware Cloud Foundation)</strong> — full SDDC: compute (vSphere), storage (vSAN), networking (NSX), management (Aria). The "premium" path. <strong>VVF (vSphere Foundation)</strong> — compute + limited management; no NSX, limited vSAN. For most existing vSphere Enterprise Plus customers, VVF is the closest equivalent; VCF if you need or are pushed to the full stack.`,
      tags: ['vmware', 'broadcom']
    },
    {
      q: ['vmware perpetual', 'existing vmware licences', 'vmware support renewal'],
      a: `Existing VMware perpetual licences remain valid for use, but <strong>renewals of Support & Subscription (SnS)</strong> on perpetuals are no longer being offered as a general rule — customers are transitioned to subscription at the next renewal. Some special enterprise-agreement renewals may retain SnS; check your specific agreement. Without active support, you lose access to patches and major-version upgrades.`,
      tags: ['vmware', 'broadcom']
    },
    {
      q: ['vmware alternatives', 'alternative to vmware', 'leave vmware', 'replace vmware'],
      a: `Common alternatives being evaluated post-Broadcom: <strong>Nutanix AHV</strong>, <strong>Microsoft Hyper-V / Azure Stack HCI</strong>, <strong>Red Hat OpenShift Virtualization</strong> (KubeVirt), <strong>Proxmox VE</strong>, <strong>Scale Computing</strong>, and hyperscaler migration (Azure, AWS, GCP). Migration costs and ecosystem (backup, security, monitoring) compatibility are usually the deciding factors. For a TCO comparison, [CONTACT].`,
      tags: ['vmware', 'broadcom']
    },
    {
      q: ['vmware renewal penalty', 'broadcom late renewal', 'vmware retroactive'],
      a: `Broadcom has applied a <strong>20%+ uplift on late or lapsed VMware renewals</strong> — if you let a subscription lapse and then renew, you can be charged retroactively from the lapse date. Set renewal alarms 6+ months in advance, and never let SnS expire without a deliberate decision. [CONTACT] before any renewal conversation.`,
      tags: ['vmware', 'broadcom']
    },

    /* ────────── IBM ────────── */
    {
      q: ['ibm cloud paks', 'cloud pak', 'ibm vpc'],
      a: `<strong>IBM Cloud Paks</strong> are containerised, OpenShift-based bundles of IBM middleware (e.g. Cloud Pak for Data, for Integration, for Business Automation, for Security). They're licensed by <strong>VPC (Virtual Processor Core)</strong> — a modernised metric replacing PVU for new offerings. Each Cloud Pak entitlement converts to a ratio of constituent product VPCs, giving deployment flexibility.`,
      tags: ['ibm']
    },
    {
      q: ['ibm passport advantage', 'passport advantage', 'ibm pa'],
      a: `<strong>IBM Passport Advantage (PA)</strong> is IBM's volume licensing program. Customers purchase entitlements that accrue suggested volume points, driving tier discounts. Renewals are via <strong>Passport Advantage Express (PAE)</strong> for smaller customers or directly through PA for enterprises. PA terms include rights to audit and require ILMT for sub-capacity.`,
      tags: ['ibm']
    },

    /* ────────── SALESFORCE & ADOBE ────────── */
    {
      q: ['salesforce licensing', 'salesforce editions', 'salesforce user types'],
      a: `Salesforce is licensed per user, with <strong>Editions</strong> (Essentials, Professional, Enterprise, Unlimited, Einstein 1) defining feature scope, and <strong>User types</strong> defining access (Full Sales/Service users, Platform users, Chatter Free, Customer/Partner Community). Edition mix-and-match within one org is restricted — moving up an edition is much easier than moving down. Major add-ons: Einstein, Data Cloud, MuleSoft, Slack, Tableau.`,
      tags: ['salesforce']
    },
    {
      q: ['salesforce einstein', 'einstein gpt', 'salesforce ai'],
      a: `<strong>Einstein</strong> is Salesforce's AI layer; <strong>Einstein 1</strong> is the bundled top-edition combining CRM, Data Cloud, Einstein AI, and Slack. AI features are increasingly included in Einstein 1 and Unlimited+ editions, with consumption-based metering for generative AI usage (Einstein Requests, Data Cloud credits). Audit your projected AI consumption before committing.`,
      tags: ['salesforce', 'ai']
    },
    {
      q: ['adobe licensing', 'creative cloud teams', 'adobe vip', 'adobe etla'],
      a: `Adobe's main enterprise paths: <strong>VIP (Value Incentive Plan)</strong> — annual subscription for SMB/mid-market, transacted through resellers; <strong>VIP Marketplace</strong> via hyperscaler marketplaces; <strong>ETLA (Enterprise Term Licensing Agreement)</strong> — 3-year fixed-term contract for large enterprises, custom-priced. Products: Creative Cloud, Acrobat, Adobe Experience Cloud (Analytics, AEM, Marketo, etc.).`,
      tags: ['adobe']
    },
    {
      q: ['adobe acrobat licensing', 'acrobat pro', 'acrobat dc'],
      a: `Acrobat is sold as <strong>Acrobat Standard</strong> or <strong>Acrobat Pro</strong>, per user, via VIP or ETLA. Adobe Sign / Acrobat Sign is licensed by transaction volume or per-user, depending on plan. Common compliance issue: shared accounts (one Acrobat licence used by multiple people) — Adobe's terms require one named user per licence.`,
      tags: ['adobe']
    },

    /* ────────── SERVICENOW ────────── */
    {
      q: ['servicenow licensing', 'servicenow fulfiller', 'servicenow requester', 'servicenow user types'],
      a: `ServiceNow is licensed mainly by <strong>Fulfiller</strong> (named user with full read/write — e.g. IT agents, HR partners) and includes <strong>unlimited Requesters</strong> (employees who can submit tickets). Modules are licensed separately (ITSM, ITOM, CSM, HRSD, SecOps, SAM/HAM, etc.) with tiers (Standard, Pro, Enterprise, and now Pro Plus/Enterprise Plus for AI features). <strong>Custom tables</strong> and integrations can add cost.`,
      tags: ['servicenow']
    },
    {
      q: ['now assist', 'servicenow ai', 'now assist pricing', 'pro plus'],
      a: `<strong>Now Assist</strong> is ServiceNow's generative-AI add-on, requiring an existing <strong>Pro or Enterprise</strong> subscription on the relevant module (ITSM, CSM, HRSD, etc.) and an upgrade to <strong>Pro Plus / Enterprise Plus</strong> tier. ServiceNow has moved to a <strong>consumption (Assist Packs)</strong> model — base allocations included in the tier, overage purchased in packs. Critically, Now Assist is licensed per <strong>100% of Fulfillers</strong> in scope, not per active user. For pricing modelling, [CONTACT].`,
      tags: ['servicenow', 'ai']
    },
    {
      q: ['servicenow renewal', 'servicenow uplift', 'servicenow price increase'],
      a: `ServiceNow agreements typically include an <strong>annual uplift</strong> of <strong>5–10%</strong> on existing licences, compounded across multi-year terms. Renewal cycles increasingly come with pressure to adopt Pro Plus or Enterprise Plus tiers to access AI features. Start renewal preparation <strong>9–12 months before</strong> expiry to give yourself negotiation room; [CONTACT].`,
      tags: ['servicenow']
    },

    /* ────────── FINOPS ────────── */
    {
      q: ['what is finops', 'cloud finops', 'define finops', 'finops meaning'],
      a: `<strong>FinOps (Cloud Financial Operations)</strong> is an operating model and culture for managing cloud spend collaboratively across engineering, finance, and business. Defined by the <strong>FinOps Foundation</strong>. Goal: maximise business value of cloud, not just minimise spend. The 2025 Framework formally extended scope beyond hyperscaler cloud to also include SaaS, licensing, AI, and on-prem ("Cloud+").`,
      tags: ['finops', 'basics']
    },
    {
      q: ['finops phases', 'inform optimize operate', 'finops lifecycle'],
      a: `Three iterative phases: <strong>Inform</strong> — visibility, allocation, showback/chargeback, forecasting. <strong>Optimize</strong> — rightsizing, reservations/savings plans, idle resource cleanup, architectural change. <strong>Operate</strong> — embed continuous practices, policy, automation, KPIs. Different parts of the organisation are usually at different phases at the same time.`,
      tags: ['finops', 'basics']
    },
    {
      q: ['finops principles', 'six principles finops'],
      a: `The six FinOps principles: <strong>(1)</strong> Teams need to collaborate; <strong>(2)</strong> Decisions are driven by business value of cloud; <strong>(3)</strong> Everyone takes ownership of their cloud usage; <strong>(4)</strong> FinOps data should be accessible, timely, and accurate; <strong>(5)</strong> A centralised team drives FinOps; <strong>(6)</strong> Take advantage of the variable cost model of the cloud.`,
      tags: ['finops']
    },
    {
      q: ['finops personas', 'who does finops', 'finops roles'],
      a: `Core personas: <strong>FinOps Practitioner</strong>, <strong>Engineering</strong>, <strong>Finance</strong>, <strong>Procurement</strong>, <strong>Leadership/Executive</strong>, <strong>Product</strong>. Allied personas (consulted, not core): Security, Sustainability, ITAM/SAM, ITSM. A common mistake is treating FinOps as a finance-only function — it fails without engineering buy-in.`,
      tags: ['finops']
    },
    {
      q: ['reserved instance', 'what is ri', 'aws reserved instance'],
      a: `A <strong>Reserved Instance (RI)</strong> is a 1- or 3-year commitment to a specific instance family/size in a specific region, in exchange for ~30–60% discount versus on-demand. Three payment options: All Upfront (biggest discount), Partial Upfront, No Upfront. RIs apply automatically to matching usage. Less flexible than Savings Plans — but in some services (e.g. RDS, Redshift) still the only commitment option.`,
      tags: ['finops', 'aws']
    },
    {
      q: ['savings plan', 'aws savings plan', 'compute savings plan', 'sp vs ri'],
      a: `<strong>AWS Savings Plans</strong> commit to a $/hour spend for 1 or 3 years. <strong>Compute Savings Plans</strong> apply across EC2, Fargate, Lambda regardless of region, instance family, OS, or tenancy — much more flexible than RIs. <strong>EC2 Instance Savings Plans</strong> are family-specific in one region (higher discount, less flexibility). Azure and GCP have similar commitment offerings (Azure Reservations + Savings Plans for Compute; GCP CUDs).`,
      tags: ['finops', 'aws']
    },
    {
      q: ['azure reservation', 'azure savings plan', 'azure reserved instance'],
      a: `<strong>Azure Reservations</strong> (1- or 3-year, per-VM-size, per-region) and <strong>Azure Savings Plans for Compute</strong> (1- or 3-year, $/hour commitment across compute services, similar to AWS Compute SP) are Microsoft's two main commitment models. Reservations give bigger discounts; Savings Plans give more flexibility. Many enterprises layer both.`,
      tags: ['finops', 'azure']
    },
    {
      q: ['tagging strategy', 'cloud tagging', 'cost allocation tags'],
      a: `<strong>Tagging</strong> is the foundation of cost allocation. Common minimum tag set: <em>Environment</em>, <em>Application</em> (or Service), <em>Owner</em> (or Team), <em>Cost Centre</em>. Enforce via policy (AWS SCPs/Tag Policies, Azure Policy, GCP Org Policy) — untagged resources are usually the largest source of unallocated spend. Plan to allocate shared/untaggable costs proportionally.`,
      tags: ['finops']
    },
    {
      q: ['chargeback vs showback', 'showback chargeback'],
      a: `<strong>Showback</strong> — present teams with their cloud cost; no financial transfer. Lower friction, focuses on awareness. <strong>Chargeback</strong> — actually transfer the cost to the consuming team's P&L. Higher friction (needs accurate allocation and rate cards), but creates strong accountability. Most practices start with Showback and graduate to Chargeback as data quality improves.`,
      tags: ['finops']
    },
    {
      q: ['focus billing', 'focus standard', 'cloud billing standard'],
      a: `<strong>FOCUS (FinOps Open Cost and Usage Specification)</strong> is the FinOps Foundation's open standard for billing data — a common schema across AWS, Azure, GCP, OCI, and SaaS. All major hyperscalers now publish FOCUS-conformant exports. Enables tool-agnostic FinOps reporting and cross-cloud comparisons without ETL gymnastics.`,
      tags: ['finops']
    },
    {
      q: ['kubernetes finops', 'container cost', 'k8s cost allocation'],
      a: `Kubernetes cost allocation is a known FinOps challenge: the cloud bill shows you nodes, but consumption happens at the pod/namespace level. Tools: <strong>OpenCost</strong> (open source, CNCF), <strong>Kubecost</strong>, <strong>CAST AI</strong>, plus native cost-allocation features in EKS/AKS/GKE. Allocate by labels (namespace, team, app) and reconcile against the cloud bill.`,
      tags: ['finops', 'kubernetes']
    },
    {
      q: ['finops maturity', 'crawl walk run', 'finops levels'],
      a: `FinOps Foundation defines three maturity levels per capability: <strong>Crawl</strong> (basic, manual, point-in-time), <strong>Walk</strong> (consistent, regularly reviewed), <strong>Run</strong> (automated, embedded in operations, KPI-driven). A practice is usually at different levels for different capabilities — you might be Run on Anomaly Detection but Crawl on Allocation.`,
      tags: ['finops']
    },
    {
      q: ['ai finops', 'ai spend management', 'cloud ai cost'],
      a: `Managing AI spend is a fast-growing FinOps scope, covering: <strong>foundation model API costs</strong> (token-based pricing, prompt/output tracking), <strong>GPU compute</strong> (training and inference), <strong>vector databases</strong>, and <strong>commercial AI tools</strong> (Copilot, Einstein, Now Assist). Allocation is hard — costs often hit central platform teams, not the consuming product. For an AI cost framework, [CONTACT].`,
      tags: ['finops', 'ai']
    },
    {
      q: ['saas management', 'saas spend', 'smp tool'],
      a: `<strong>SaaS Management</strong> tracks SaaS applications, licences, usage, and renewals across the estate. Discovery sources: expense data, SSO logs, browser extensions, finance feeds. Tools: Zylo, Productiv, BetterCloud, Torii, Flexera SaaS Management, LeanIX, Vendr. Typical findings: 30–40% of SaaS spend is on shadow/redundant tools.`,
      tags: ['finops', 'saas']
    },

    /* ────────── AUDITS & COMPLIANCE ────────── */
    {
      q: ['software audit', 'license audit', 'licence audit', 'vendor audit', 'audit notice', 'audit letter', 'received an audit'],
      a: `Receive a vendor audit letter? Do this in order: <strong>(1)</strong> Acknowledge in writing but don't commit to a timeline; <strong>(2)</strong> Confirm scope, contract clause being invoked, and proposed methodology; <strong>(3)</strong> Engage independent advice before sharing any data; <strong>(4)</strong> Run your own ELP first; <strong>(5)</strong> Control what scripts/tools run on your environment. Never volunteer information or treat the auditor as a neutral party. [CONTACT] immediately.`,
      tags: ['audit', 'compliance']
    },
    {
      q: ['audit defence', 'how to defend audit', 'fight software audit'],
      a: `Defence relies on three things: (1) a defensible <strong>ELP you ran first</strong>, with documented assumptions; (2) <strong>contract clauses in your favour</strong> — audit scope, frequency, advance notice, dispute resolution; (3) <strong>control of the process</strong> — who's onsite, what tools run, what data leaves your network. Audits are negotiation, not arithmetic. Expert representation typically reduces settlements by 50–80%. [CONTACT].`,
      tags: ['audit']
    },
    {
      q: ['how often vendor audit', 'audit frequency', 'audit clause'],
      a: `Standard contractual clauses typically allow vendors to audit <strong>once per year</strong>, with <strong>30 days written notice</strong>, during business hours, at vendor's cost (unless material non-compliance is found, in which case the customer pays the audit cost <em>plus</em> the deficiency). Microsoft, Oracle, IBM, SAP, Adobe all have similar clauses. Some agreements allow "informal" inquiries that bypass formal audit rights — beware.`,
      tags: ['audit', 'contracts']
    },
    {
      q: ['ifrs 16', 'lease accounting software', 'capitalising software'],
      a: `Subscription software is generally an operating expense (OpEx). Perpetual licences are capitalised (CapEx) and amortised over useful life. Under <strong>IFRS 16</strong>, most cloud contracts <em>don't</em> qualify as leases (no controlled identified asset), so they remain OpEx — but this is a CFO/auditor judgement, not a SAM call. Coordinate with finance.`,
      tags: ['compliance', 'finance']
    },

    /* ────────── GENERIC INTENTS ────────── */
    {
      q: ['how much does it cost', 'price of', 'pricing', 'cost', 'how much is', 'what is the price'],
      a: `For pricing details, our Proteam experts are best placed to help — current list prices, regional variations, and your negotiated rate all matter. [CONTACT]`,
      tags: ['pricing']
    },
    {
      q: ['how many licences', 'how many licenses', 'licence count', 'licence quantity', 'exact number'],
      a: `For exact licence counts and your specific deployment position, please speak to our Proteam experts — we'll run an ELP against your actual estate. [CONTACT]`,
      tags: ['counts']
    },

    /* ────────── GREETINGS / META ────────── */
    {
      q: ['hi', 'hello', 'hey', 'hiya', 'good morning', 'good afternoon', 'good evening'],
      a: `Hi! I'm <strong>Sammy</strong>, Proteam's SAM agent. Ask me about licence metrics, SAM/HAM/FinOps concepts, ITAM tools, or current vendor licensing — Microsoft, Oracle, SAP, VMware/Broadcom, IBM, ServiceNow, Salesforce, Adobe.`,
      tags: ['meta']
    },
    {
      q: ['who are you', 'what are you', 'what can you do', 'help', 'what do you know'],
      a: `I'm <strong>Sammy</strong>, Proteam Advisory's SAM agent. I cover the basics of: licence metrics & types, Software/Hardware Asset Management, FinOps, ITAM tooling (ServiceNow, Flexera, Snow, Zylo, Aspera), and current licensing for the major publishers. For exact counts, pricing, or contract advice, I'll point you to our experts. Try one of the quick chips, or ask a question.`,
      tags: ['meta']
    },
    {
      q: ['thanks', 'thank you', 'thx', 'cheers', 'appreciated'],
      a: `You're welcome! Anything else on SAM, HAM, FinOps, or vendor licensing?`,
      tags: ['meta']
    },
    {
      q: ['bye', 'goodbye', 'cya', 'see you', 'thanks bye'],
      a: `Cheers — drop in anytime, or [CONTACT] for tailored advice.`,
      tags: ['meta']
    },
    {
      q: ['proteam', 'about proteam', 'who is proteam', 'proteam advisory'],
      a: `<strong>Proteam Advisory Solutions LLP</strong> is an independent Software Asset Management consultancy operating across India, UK, US, and the Middle East. Over <strong>$1B+ in savings</strong> delivered through <strong>4000+ licensing reviews</strong>. Independent means we don't resell software — our advice has no vendor agenda. [CONTACT]`,
      tags: ['meta']
    }

  ];

  /* ============================================================
     MATCHING ENGINE
     ============================================================ */
  const STOPWORDS = new Set([
    'a','an','the','is','are','was','were','be','been','being','am',
    'do','does','did','can','could','would','should','will','shall',
    'i','me','my','mine','you','your','yours','we','us','our','ours','they','them','their',
    'this','that','these','those','it','its',
    'in','on','at','of','to','for','from','by','with','as','about','into','onto','out','up','down','over','under',
    'and','or','but','if','then','so','because','than','though',
    'what','whats','which','who','whom','where','when','why','how','tell','explain','please',
    'some','any','all','more','most','less','few','many','much'
  ]);

  function normalise(s) {
    return (s || '').toLowerCase()
      .replace(/[`'']/g, '')
      .replace(/[^a-z0-9+&/.\- ]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function tokens(s) {
    return normalise(s).split(' ').filter(t => t && !STOPWORDS.has(t));
  }

  // Precompute keyword token sets for each entry
  const KB_INDEX = KB.map(entry => {
    const phrases = entry.q.map(normalise);
    const allTokens = new Set();
    for (const p of phrases) for (const t of p.split(' ')) if (t && !STOPWORDS.has(t)) allTokens.add(t);
    return { entry, phrases, tokenSet: allTokens };
  });

  function scoreEntry(query, indexed) {
    const qNorm = normalise(query);
    const qTokens = tokens(query);

    let score = 0;

    // Phrase match — strong signal.
    // Multi-word phrases: substring match anywhere in qNorm.
    // Single-word phrases: only when qNorm IS that token (handles "ELP", "hi", "thanks").
    for (const phrase of indexed.phrases) {
      if (phrase.length < 2) continue;
      if (phrase.includes(' ')) {
        if (qNorm.includes(phrase)) {
          score += 5 + phrase.split(' ').length * 2;
        }
      } else {
        if (qNorm === phrase || qNorm.startsWith(phrase + ' ') || qNorm.endsWith(' ' + phrase)) {
          score += 5;
        }
      }
    }

    // Token overlap (after stopword filter)
    if (qTokens.length > 0) {
      let overlap = 0;
      for (const t of qTokens) if (indexed.tokenSet.has(t)) overlap += 1;
      score += overlap * 2;
      // Full-overlap bonus (every query token landed in this entry).
      // Smaller bonus for single-token queries to avoid over-weighting one-word matches.
      if (overlap >= 1 && overlap === qTokens.length) {
        score += qTokens.length === 1 ? 2 : 3;
      }
    }

    return score;
  }

  function findBestAnswer(query) {
    let best = null;
    let bestScore = 0;
    for (const idx of KB_INDEX) {
      const s = scoreEntry(query, idx);
      if (s > bestScore) { bestScore = s; best = idx.entry; }
    }
    // Minimum confidence threshold
    return bestScore >= 4 ? best : null;
  }

  /* ============================================================
     UI (unchanged Sammy widget — different brain)
     ============================================================ */
  let questionCount = 0;
  let isOpen = false;
  let greeted = false;

  function contactLink() {
    return '<a href="contact.html" style="color:#0D7377;text-decoration:underline;font-weight:600;">Contact our experts →</a>';
  }

  function applyTemplates(html) {
    return html.replace(/\[CONTACT\]/g, contactLink());
  }

  const FALLBACK = `I can help with the basics of SAM, HAM, FinOps, ITAM tooling, and current licensing for major publishers (Microsoft, Oracle, SAP, VMware/Broadcom, IBM, ServiceNow, Salesforce, Adobe). For your specific question, our Proteam experts will give you a proper answer — [CONTACT].`;

  /* ── Build DOM ───────────────────────────────────────────── */
  function buildWidget() {
    const style = document.createElement('style');
    style.textContent = `
      #sammy-root { position:fixed; bottom:28px; right:28px; z-index:9999; font-family:'Geist',-apple-system,BlinkMacSystemFont,sans-serif; }
      #sammy-bot { width:64px; height:64px; cursor:pointer; animation:sammyFloat 3s ease-in-out infinite; filter:drop-shadow(0 10px 28px rgba(13,115,119,0.5)); position:relative; z-index:2; }
      @keyframes sammyFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
      #sammy-bot:hover { filter:drop-shadow(0 12px 32px rgba(13,115,119,0.65)); }
      #sammy-greet { position:absolute; bottom:72px; right:0; background:#0D7377; color:#F5F6F8; padding:10px 14px; border-radius:12px 12px 2px 12px; font-size:13px; line-height:1.45; white-space:nowrap; box-shadow:0 8px 32px rgba(30,43,60,0.28); opacity:0; transform:translateY(6px) scale(0.95); transition:all 0.35s cubic-bezier(0.34,1.56,0.64,1); pointer-events:none; }
      #sammy-greet.show { opacity:1; transform:translateY(0) scale(1); pointer-events:auto; }
      #sammy-greet::after { content:''; position:absolute; bottom:-6px; right:14px; width:12px; height:6px; background:#0D7377; clip-path:polygon(0 0,100% 0,100% 100%); }
      #sammy-panel { position:absolute; bottom:80px; right:0; width:340px; background:#F7F9FB; border:1px solid rgba(30,43,60,0.10); border-radius:16px; box-shadow:0 20px 60px rgba(30,43,60,0.18); overflow:hidden; display:flex; flex-direction:column; opacity:0; transform:translateY(12px) scale(0.96); transition:all 0.3s cubic-bezier(0.34,1.36,0.64,1); pointer-events:none; max-height:520px; }
      #sammy-panel.open { opacity:1; transform:translateY(0) scale(1); pointer-events:auto; }
      #sammy-header { background:#0D7377; padding:14px 16px; display:flex; align-items:center; gap:10px; }
      #sammy-header-avatar { width:36px; height:36px; flex-shrink:0; }
      #sammy-header-info { flex:1; }
      #sammy-header-name { color:#F0F2F5; font-size:13px; font-weight:600; line-height:1.2; display:flex; align-items:center; gap:6px; }
      #sammy-ai-badge { background:rgba(255,255,255,0.18); color:rgba(240,242,245,0.9); font-size:9px; padding:2px 6px; border-radius:20px; font-weight:600; letter-spacing:0.05em; }
      #sammy-header-status { color:rgba(240,242,245,0.5); font-size:11px; display:flex; align-items:center; gap:5px; }
      #sammy-status-dot { width:6px; height:6px; border-radius:50%; background:#22c55e; display:inline-block; animation:sammyPulse 2s infinite; }
      @keyframes sammyPulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
      #sammy-close { color:rgba(240,242,245,0.5); font-size:18px; line-height:1; cursor:pointer; padding:4px; transition:color 0.2s; }
      #sammy-close:hover { color:#F0F2F5; }
      #sammy-messages { flex:1; overflow-y:auto; padding:16px; display:flex; flex-direction:column; gap:10px; scrollbar-width:thin; scrollbar-color:rgba(30,43,60,0.15) transparent; }
      .sammy-msg { max-width:88%; padding:10px 13px; border-radius:12px; font-size:13px; line-height:1.55; animation:msgIn 0.25s ease; }
      @keyframes msgIn { from{opacity:0;transform:translateY(4px)} to{opacity:1;transform:none} }
      .sammy-msg.bot { background:#E6F7F7; color:#1E2B3C; border-radius:2px 12px 12px 12px; align-self:flex-start; }
      .sammy-msg.user { background:#0D7377; color:#F5F6F8; border-radius:12px 12px 2px 12px; align-self:flex-end; }
      .sammy-msg.err { background:#FEE2E2; color:#991B1B; border-radius:2px 12px 12px 12px; align-self:flex-start; }
      .sammy-msg a { color:#0D7377; }
      #sammy-typing { display:none; align-self:flex-start; padding:10px 14px; background:#EEF1F8; border-radius:2px 12px 12px 12px; }
      #sammy-typing span { display:inline-block; width:6px; height:6px; border-radius:50%; background:#6B7C8F; margin:0 2px; animation:typingDot 1.2s infinite; }
      #sammy-typing span:nth-child(2){animation-delay:0.2s} #sammy-typing span:nth-child(3){animation-delay:0.4s}
      @keyframes typingDot { 0%,60%,100%{transform:translateY(0)} 30%{transform:translateY(-5px)} }
      #sammy-suggestions { padding:0 12px 10px; display:flex; flex-wrap:wrap; gap:6px; }
      .sammy-chip { font-size:11px; padding:5px 10px; border-radius:20px; border:1px solid rgba(30,43,60,0.14); background:#fff; color:#6B7C8F; cursor:pointer; transition:all 0.15s; font-family:inherit; white-space:nowrap; }
      .sammy-chip:hover { border-color:#0D7377; color:#0D7377; background:#E6F7F7; }
      #sammy-disclaimer { padding:6px 14px 8px; font-size:10px; color:#9BA8B5; text-align:center; line-height:1.4; border-top:1px solid rgba(30,43,60,0.06); }
      #sammy-input-area { padding:12px; border-top:1px solid rgba(30,43,60,0.08); display:flex; gap:8px; background:#F7F9FB; }
      #sammy-input { flex:1; border:1px solid rgba(30,43,60,0.14); border-radius:8px; padding:9px 12px; font-size:13px; font-family:inherit; outline:none; color:#1E2B3C; background:#fff; transition:border-color 0.2s; }
      #sammy-input:focus { border-color:#0D7377; }
      #sammy-input::placeholder { color:#9BA8B5; }
      #sammy-input:disabled { background:#F0F2F5; cursor:not-allowed; }
      #sammy-send { width:36px; height:36px; border-radius:8px; background:#0D7377; color:#F5F6F8; display:flex; align-items:center; justify-content:center; cursor:pointer; transition:background 0.2s; flex-shrink:0; border:none; }
      #sammy-send:hover:not(:disabled) { background:#0A8F92; }
      #sammy-send:disabled { background:#9BA8B5; cursor:not-allowed; }
      #sammy-send svg { width:15px; height:15px; }
      @media(max-width:420px){ #sammy-panel{width:calc(100vw - 40px);right:-8px;} #sammy-root{bottom:18px;right:18px;} }
    `;
    document.head.appendChild(style);

    const botSVG = `
      <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="sBodyG" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#14A8AC"/><stop offset="100%" stop-color="#0D7377"/>
          </linearGradient>
        </defs>
        <ellipse cx="32" cy="58" rx="14" ry="2.5" fill="rgba(30,43,60,0.18)"/>
        <rect x="14" y="16" width="36" height="34" rx="14" fill="url(#sBodyG)"/>
        <rect x="20" y="24" width="24" height="16" rx="8" fill="#F7F9FB"/>
        <ellipse id="sammy-eye-l" cx="27" cy="32" rx="2.6" ry="4" fill="#1E2B3C"/>
        <ellipse id="sammy-eye-r" cx="37" cy="32" rx="2.6" ry="4" fill="#1E2B3C"/>
        <circle cx="28" cy="31" r="0.9" fill="#fff"/>
        <circle cx="38" cy="31" r="0.9" fill="#fff"/>
        <path d="M 28 44 Q 32 47 36 44" stroke="#0D7377" stroke-width="1.5" fill="none" stroke-linecap="round"/>
        <line x1="32" y1="11" x2="32" y2="16" stroke="#0D7377" stroke-width="2" stroke-linecap="round"/>
        <circle cx="32" cy="9" r="2.5" fill="#14A8AC"/>
      </svg>`;

    const root = document.createElement('div');
    root.id = 'sammy-root';
    root.innerHTML = `
      <div id="sammy-greet">Hi! Ask me about licence metrics & SAM ✨</div>
      <div id="sammy-panel">
        <div id="sammy-header">
          <div id="sammy-header-avatar">${botSVG}</div>
          <div id="sammy-header-info">
            <div id="sammy-header-name">Sammy <span id="sammy-ai-badge">SAM AGENT</span></div>
            <div id="sammy-header-status"><span id="sammy-status-dot"></span>Online</div>
          </div>
          <div id="sammy-close">✕</div>
        </div>
        <div id="sammy-messages"></div>
        <div id="sammy-typing"><span></span><span></span><span></span></div>
        <div id="sammy-suggestions">
          <button class="sammy-chip" data-q="What is SAM?">What is SAM?</button>
          <button class="sammy-chip" data-q="What is an effective licence position?">ELP explained</button>
          <button class="sammy-chip" data-q="What is FinOps?">FinOps basics</button>
          <button class="sammy-chip" data-q="What changed with VMware under Broadcom?">VMware/Broadcom</button>
          <button class="sammy-chip" data-q="How does Oracle Java licensing work now?">Oracle Java</button>
          <button class="sammy-chip" data-q="What is Microsoft 365 Copilot licensing?">M365 Copilot</button>
          <button class="sammy-chip" data-q="What is SAP digital access?">SAP Digital Access</button>
          <button class="sammy-chip" data-q="What is Now Assist?">Now Assist</button>
        </div>
        <div id="sammy-disclaimer">Sammy covers licence metrics &amp; SAM/HAM/FinOps concepts.<br>Exact counts &amp; pricing → our experts.</div>
        <div id="sammy-input-area">
          <input id="sammy-input" type="text" placeholder="Ask about licence metrics, SAM, FinOps…" maxlength="250" autocomplete="off"/>
          <button id="sammy-send" title="Send">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
          </button>
        </div>
      </div>
      <div id="sammy-bot">${botSVG}</div>
    `;
    document.body.appendChild(root);
    return root;
  }

  /* ── Main init ───────────────────────────────────────────── */
  function init() {
    const root     = buildWidget();
    const bot      = root.querySelector('#sammy-bot');
    const panel    = root.querySelector('#sammy-panel');
    const greet    = root.querySelector('#sammy-greet');
    const msgs     = root.querySelector('#sammy-messages');
    const typing   = root.querySelector('#sammy-typing');
    const input    = root.querySelector('#sammy-input');
    const sendBtn  = root.querySelector('#sammy-send');
    const closeBtn = root.querySelector('#sammy-close');
    const chips    = root.querySelectorAll('.sammy-chip');

    // Eye blink
    setInterval(() => {
      ['#sammy-eye-l','#sammy-eye-r'].forEach(id => {
        const el = document.querySelectorAll(id);
        el.forEach(e => {
          e.setAttribute('ry','0.5');
          setTimeout(() => e.setAttribute('ry','4'), 120);
        });
      });
    }, 3200);

    // Greeting bubble
    setTimeout(() => {
      greet.classList.add('show');
      setTimeout(() => { if (!isOpen) greet.classList.remove('show'); }, 4500);
    }, 1200);

    function addMsg(html, who) {
      const div = document.createElement('div');
      div.className = `sammy-msg ${who}`;
      div.innerHTML = applyTemplates(html);
      msgs.appendChild(div);
      msgs.scrollTop = msgs.scrollHeight;
    }

    function openPanel() {
      isOpen = true;
      panel.classList.add('open');
      greet.classList.remove('show');
      if (!greeted) {
        greeted = true;
        setTimeout(() => addMsg(
          "👋 Hi! I'm <strong>Sammy</strong>, Proteam's SAM agent.<br><br>" +
          "I cover the basics of <strong>licence metrics</strong>, <strong>SAM/HAM/FinOps</strong>, " +
          "<strong>ITAM tools</strong>, and current licensing for the major publishers " +
          "(Microsoft, Oracle, SAP, VMware/Broadcom, IBM, ServiceNow, Salesforce, Adobe).<br><br>" +
          "For exact licence counts or pricing, I'll point you to our experts. " +
          "Try one of the quick chips, or ask a question.", 'bot'), 300);
      }
      setTimeout(() => input.focus(), 350);
    }

    function closePanel() { isOpen = false; panel.classList.remove('open'); }

    bot.addEventListener('click', () => isOpen ? closePanel() : openPanel());
    closeBtn.addEventListener('click', closePanel);

    function handleQuestion(question) {
      if (!question.trim()) return;
      addMsg(question, 'user');
      questionCount++;
      input.disabled = true;
      sendBtn.disabled = true;
      typing.style.display = 'flex';
      msgs.scrollTop = msgs.scrollHeight;

      // Simulate a short think — feels more natural than instant
      setTimeout(() => {
        const match = findBestAnswer(question);
        let reply = match ? match.a : FALLBACK;

        // Periodic gentle nudge every 4 questions
        if (questionCount > 0 && questionCount % 4 === 0 && !/\[CONTACT\]/.test(match?.a || '')) {
          reply += `<br><br><em style="color:#6B7C8F;font-size:12px;">Need tailored guidance? [CONTACT]</em>`;
        }

        typing.style.display = 'none';
        addMsg(reply, 'bot');
        input.disabled = false;
        sendBtn.disabled = false;
        input.focus();
      }, 450 + Math.random() * 350);
    }

    function send() {
      const q = input.value.trim();
      if (!q || input.disabled) return;
      input.value = '';
      if (!isOpen) openPanel();
      handleQuestion(q);
    }

    sendBtn.addEventListener('click', send);
    input.addEventListener('keydown', e => { if (e.key === 'Enter') send(); });
    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        if (!isOpen) openPanel();
        chip.remove();
        setTimeout(() => handleQuestion(chip.dataset.q), 200);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
