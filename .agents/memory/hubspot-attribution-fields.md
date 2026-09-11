---
name: HubSpot attribution fields
description: Constraint on creating and mapping structured lead-attribution contact properties.
---

The connected HubSpot account can read and write contacts, but the Replit connector authorization does not include contact-schema write permission. Creating custom contact properties returns `MISSING_SCOPES`, including after OAuth reauthorization.

**Why:** Mapping values to nonexistent HubSpot properties causes the entire contact upsert to fail, which would block all website lead delivery.

**How to apply:** Keep attribution in the human-readable contact message until the six custom fields are created through a HubSpot context with schema-write permission. Verify each field exists before adding it to the API property payload.