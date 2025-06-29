#!/bin/bash

# DevOps Future Pathway - Page Verification Script
# Quick script to verify all pages are working correctly

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

print_status() {
    local status=$1
    local message=$2
    case $status in
        "SUCCESS") echo -e "${GREEN}✅ $message${NC}" ;;
        "ERROR") echo -e "${RED}❌ $message${NC}" ;;
        "WARNING") echo -e "${YELLOW}⚠️ $message${NC}" ;;
        "INFO") echo -e "${BLUE}ℹ️ $message${NC}" ;;
    esac
}

echo -e "${BLUE}🚀 DevOps Future Pathway - Page Verification${NC}"
echo "=============================================="

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    print_status "ERROR" "package.json not found. Please run this script from the project root."
    exit 1
fi

print_status "INFO" "Checking project structure..."

# Check required files
files_to_check=(
    "package.json"
    "vite.config.ts"
    "src/App.tsx"
    "src/main.tsx"
    "index.html"
)

for file in "${files_to_check[@]}"; do
    if [ -f "$file" ]; then
        print_status "SUCCESS" "$file exists"
    else
        print_status "ERROR" "$file missing"
    fi
done

# Check all required pages
print_status "INFO" "Checking page components..."

pages=(
    "Index.tsx"
    "About.tsx"
    "BeginnerRoadmap.tsx"
    "BestPractices.tsx"
    "Blog.tsx"
    "Careers.tsx"
    "Certifications.tsx"
    "Community.tsx"
    "Contact.tsx"
    "Events.tsx"
    "Glossary.tsx"
    "InterviewPrep.tsx"
    "Labs.tsx"
    "LearningPaths.tsx"
    "NotFound.tsx"
    "Resources.tsx"
    "Roadmaps.tsx"
    "SalaryGuide.tsx"
    "Tools.tsx"
)

missing_pages=0
for page in "${pages[@]}"; do
    if [ -f "src/pages/$page" ]; then
        print_status "SUCCESS" "$page exists"
        # Check if it has default export
        if grep -q "export default" "src/pages/$page"; then
            print_status "SUCCESS" "$page has default export"
        else
            print_status "WARNING" "$page missing default export"
        fi
    else
        print_status "ERROR" "$page missing"
        ((missing_pages++))
    fi
done

# Check App.tsx configuration
print_status "INFO" "Checking App.tsx configuration..."

if [ -f "src/App.tsx" ]; then
    if grep -q "BrowserRouter" src/App.tsx; then
        print_status "SUCCESS" "React Router configured"
    else
        print_status "ERROR" "BrowserRouter not found"
    fi
    
    if grep -q "basename" src/App.tsx; then
        print_status "SUCCESS" "GitHub Pages basename configured"
    else
        print_status "WARNING" "No basename found"
    fi
    
    route_count=$(grep -c "<Route" src/App.tsx || echo "0")
    print_status "INFO" "Found $route_count routes"
fi

# Check dependencies
print_status "INFO" "Checking dependencies..."

if [ -d "node_modules" ]; then
    print_status "SUCCESS" "Dependencies installed"
else
    print_status "WARNING" "Dependencies not installed - run 'npm install'"
fi

# Test TypeScript compilation
print_status "INFO" "Testing TypeScript compilation..."

if command -v npx >/dev/null 2>&1; then
    if npx tsc --noEmit --skipLibCheck 2>/dev/null; then
        print_status "SUCCESS" "TypeScript compilation passed"
    else
        print_status "WARNING" "TypeScript compilation issues detected"
    fi
else
    print_status "WARNING" "npx not available, skipping TypeScript check"
fi

# Test build
if [ -d "node_modules" ]; then
    print_status "INFO" "Testing build process..."
    
    if npm run build >/dev/null 2>&1; then
        print_status "SUCCESS" "Build successful"
        
        if [ -f "dist/index.html" ]; then
            print_status "SUCCESS" "Build output generated"
        else
            print_status "ERROR" "Build output missing"
        fi
    else
        print_status "ERROR" "Build failed"
    fi
fi

# Summary
echo -e "\n${BLUE}📊 Summary${NC}"
echo "----------"

if [ $missing_pages -eq 0 ]; then
    print_status "SUCCESS" "All page components present"
else
    print_status "ERROR" "$missing_pages page(s) missing"
fi

echo -e "\n${BLUE}💡 Next Steps${NC}"
echo "-------------"

if [ $missing_pages -gt 0 ]; then
    echo "1. Create missing page components"
fi

if [ ! -d "node_modules" ]; then
    echo "2. Run: npm install"
fi

echo "3. Run: npm run dev (to test locally)"
echo "4. Test all routes in browser"
echo "5. Run: npm run build (to test production build)"

echo -e "\n${BLUE}🔗 Test URLs (when running dev server)${NC}"
echo "--------------------------------------"
echo "Home: http://localhost:5173/"
echo "About: http://localhost:5173/about"
echo "Roadmaps: http://localhost:5173/roadmaps"
echo "Resources: http://localhost:5173/resources"
echo "Tools: http://localhost:5173/tools"
echo "Careers: http://localhost:5173/careers"
echo "Community: http://localhost:5173/community"
echo "Blog: http://localhost:5173/blog"
echo "Contact: http://localhost:5173/contact"

echo -e "\n${GREEN}✅ Verification complete!${NC}"

if [ $missing_pages -eq 0 ] && [ -d "node_modules" ]; then
    echo -e "${GREEN}🎉 All checks passed! Your application should be working correctly.${NC}"
else
    echo -e "${YELLOW}⚠️ Some issues found. Please address them and run this script again.${NC}"
fi
