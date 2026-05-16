# Sammy v3 — Self-Contained SAM Agent

Drop-in replacement for the original `sammy-chatbot.js`. No API, no key, no proxy.

## What's different

| | v1 (Grok)               | v2 (Cloudflare proxy)        | **v3 (this one)** |
|---|---|---|---|
| Brain                  | xAI Grok-3-mini             | xAI via Worker proxy            | **Local KB, no LLM**          |
| API key needed?        | Yes (in the JS — leaked)    | Yes (in the Worker)             | **No**                        |
| Costs                  | Pay xAI per call            | Pay xAI + Worker                | **£0**                        |
| Latency                | 1–3s per answer             | 1–4s per answer                 | **~500ms (simulated think)**  |
| Hallucinations         | Possible                    | Possible                        | **Impossible**                |
| Coverage               | Open-ended                  | Open-ended                      | **98 curated Q&As**           |

## Install

1. Replace the existing `sammy-chatbot.js` in your website root with this one.
2. That's it. The existing `<script src="sammy-chatbot.js"></script>` tag in `index.html` (line ~3403) doesn't need to change.

## What it covers

98 Q&As, ~70 KB, single file. Areas:

- **SAM core** — definition, lifecycle, ELP, true-up, reconciliation, downgrade rights, Software Assurance, licence mobility, maturity, ISO 19770
- **HAM** — definition, lifecycle, ITAD, CMDB, SAM vs HAM
- **ITAM concepts** — ITAM vs ITSM, umbrella terminology
- **Licence metrics** — per user / device / core / processor, NUP, PVU, RVU, ILMT, sub-capacity, OEM, perpetual vs subscription, concurrent
- **Microsoft** — EA/CSP/MPSA/MCA-E, E3 vs E5, M365 Copilot ($30/user, prerequisites, July 2026 price increases), Azure Hybrid Benefit, Windows Server CALs, SQL Server licensing
- **Oracle** — Java SE Universal Subscription (per-employee since Jan 2023), OpenJDK alternatives, Database Options, VMware partitioning policy, ULAs, LMS audits
- **SAP** — named user types, FUE, Digital Access (9 doc types), RISE vs GROW, ECC 2027 deadline, USMM/LAW audits
- **VMware/Broadcom** — subscription-only since Feb 2024, VCF/VVF/VVS/VVEP bundles, per-core 16-min, 20%+ late-renewal penalty, alternatives (Nutanix, Hyper-V, Proxmox, OpenShift)
- **IBM** — Passport Advantage, Cloud Paks, VPC
- **Salesforce / Adobe** — editions, Einstein, VIP/ETLA
- **ServiceNow** — Fulfiller licensing, Now Assist (Pro Plus requirement, Assist Packs, 100% Fulfiller scope), renewal uplifts
- **FinOps** — definition, three phases (Inform/Optimize/Operate), six principles, personas, FOCUS, RIs vs Savings Plans, Azure Reservations, tagging, chargeback vs showback, Kubernetes cost, AI spend, SaaS management
- **Audits** — defence playbook, audit clauses, IFRS 16 treatment

## How matching works

Each entry has a list of keyword phrases. The matcher:

1. Normalises the query (lowercase, strip punctuation)
2. Filters stopwords (~50: what/is/the/how/explain/tell etc.)
3. Scores each entry by phrase match (strong) + token overlap (weighted)
4. Returns best match if score ≥ 4, else fallback message with contact link

The fallback always routes to your experts via the contact page — Sammy will **never** invent licence counts or quote prices.

## Pricing & licensing data

KB reviewed **May 2026**. Vendor pricing and policies change frequently — Sammy's pricing answers (M365 Copilot $30, Oracle Java $5.25–$15, etc.) are framed as list prices and always direct users to verify with Proteam experts.

## Customising

Add or edit Q&A entries by appending to the `KB` array near the top of the file. Each entry:

```js
{
  q: ['question variant 1', 'keyword phrase 2', 'synonym 3'],
  a: `HTML answer here. Use [CONTACT] to insert the contact link.`,
  tags: ['optional', 'topic', 'tags']
}
```

Restart not needed — just refresh the page.
