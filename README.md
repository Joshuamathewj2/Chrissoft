# B2B Procurement & Vendor Management Platform

A modern, scalable B2B Procurement and Vendor Marketplace platform built with Medusa v2 as the commerce engine, Mercur as the multi-vendor marketplace extension, and custom B2B procurement packages.

## Core Features
- **Monorepo Architecture**: Clean workspaces powered by `pnpm` and `turbo`.
- **Commerce Engine**: Medusa v2 handles standard commerce and product catalogues.
- **Marketplace Extensions**: Mercur manages seller models, splitting commissions, and vendor portals.
- **Prisma & Postgres**: Unified, fully-typed schema for procurement entities.
- **Background Tasks**: BullMQ queue processing.
- **Search**: Fast index matching via Typesense.
- **Storage**: Document and asset storage using MinIO.
- **AI Recommendation Engine**: Placeholders for Gemini models and smart vendor selection logic.

## Documentation
- [Architecture](file:///c:/chrissoft/docs/Architecture.md)
- [Folder Structure](file:///c:/chrissoft/docs/FolderStructure.md)
- [Environment Setup](file:///c:/chrissoft/docs/Environment.md)
- [Database Models](file:///c:/chrissoft/docs/Database.md)
- [Setup & Running Guide](file:///c:/chrissoft/docs/Setup.md)
- [Refactor Report](file:///c:/chrissoft/PROJECT_REFACTOR_REPORT.md)

## How to Initialize & Run
Please run the included `run_all.bat` script on your Windows host to finalize process cleaning, package moving, git initialization, and remote repository push:
```cmd
run_all.bat
```
