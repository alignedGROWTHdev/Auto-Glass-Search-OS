---
name: HubSpot attribution fields
description: Constraint on creating and mapping structured lead-attribution contact properties.
---

The connected HubSpot account can read and write contacts, but the Replit connector authorization does not include contact-schema write permission. Creating custom contact properties returns `MISSING_SCOPES`, including after OAuth reauthorization. HubSpot last reported the requested attribution properties as missing.

The user explicitly directed the API to send the requested attribution keys despite that warning.

**Why:** HubSpot rejects contact writes containing unknown properties, so ordinary attributed leads may fail until the fields are created.

**How to apply:** Before publishing or diagnosing lead failures, verify the requested attribution properties exist in HubSpot. Create them through a HubSpot context with schema-write permission; the Replit connector cannot currently do so.